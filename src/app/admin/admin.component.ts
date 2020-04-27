import { Role } from '@app/_models';
import { TotalsService } from './../_services/totals.service';
import { AdminShipmentsModel, TotalsModel, UserModel } from './../_helpers/backend';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { first } from 'rxjs/operators';

import { ShipmentService, AuthenticationService } from '@app/_services';
import { TableColumn } from '@swimlane/ngx-datatable';
import { SearchEvent } from '@app/_helpers/list-view/models/search-event';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    @ViewChild('deliveryTemplate', { static: true }) private _deliveryTemplate: TemplateRef<HTMLElement>;
    @ViewChild('dateTemplate', { static: true }) private _dateTemplate: TemplateRef<HTMLElement>;
    @ViewChild('trackingNumberTemplate', { static: true }) private _trackingNumberTemplate: TemplateRef<HTMLElement>;
    loading = false;
    deliveryLoading = false;
    pendingUsers: AdminShipmentsModel[] = new Array<AdminShipmentsModel>();
    columns: TableColumn[] = [];
    totals: TotalsModel = new TotalsModel();
    currentUser: UserModel;
    private event: SearchEvent;

    constructor(
        private shipmentService: ShipmentService,
        private totalsService: TotalsService,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.loading = true;
        this.columns = [
            { prop: 'firstName', name: 'First Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            { prop: 'lastName', name: 'Last Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            {
                prop: 'shippedQuantity', name: 'Quantity', draggable: false, canAutoResize: false, sortable: true, resizeable: false,
                width: 70
            },
            {
                prop: 'shippingCompany', name: 'Shipped By', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
                width: 170
            },
            {
                prop: 'trackingNumber', name: 'Trancking Number', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
                cellTemplate: this._trackingNumberTemplate
            },
            {
                prop: 'dateShipped', name: 'Date Shipped', draggable: false, canAutoResize: true, sortable: true,
                resizeable: false, cellTemplate: this._dateTemplate
            },
            {
                prop: 'recieved', name: 'Recieved', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
                cellTemplate: this._deliveryTemplate
            }
        ];

        this.currentUser = this.authenticationService.currentUserValue;
        this.pendingUsers.map(x => x.dateShipped = new Date());
        this.getTotals();
    }

    getTotals() {
        this.totalsService.getTotals().subscribe((totals: TotalsModel[]) => {
            this.totals = totals[0];
        })
    }

    getUsersWithShipments(event: SearchEvent): void {
        this.event = event;
        if (this.currentUser.username === 'sofoub30') {
            this.shipmentService.getUsersWithShipmentsCP(event).pipe(first()).subscribe((users: AdminShipmentsModel[]) => {
                this.loading = false;
                this.pendingUsers = users;
            });
        } else {
            this.shipmentService.getUsersWithShipments(event).pipe(first()).subscribe((users: AdminShipmentsModel[]) => {
                this.loading = false;
                this.pendingUsers = users;
            });
        }
    }

    onRecieved(row) {
        this.deliveryLoading = true;
        this.shipmentService.packageRecieved(row.shipmentId, true).subscribe(() => {
            this.deliveryLoading = false;
            this.getUsersWithShipments(this.event);
        });
    }
}
