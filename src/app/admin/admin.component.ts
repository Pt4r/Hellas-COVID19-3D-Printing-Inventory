import { UserModel, Shipment, AdminShipmentsModel } from './../_helpers/backend';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, ShipmentService, AuthenticationService } from '@app/_services';
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
    private event: SearchEvent;

    constructor(
        private userService: UserService,
        private shipmentService: ShipmentService,
        private authenticationService: AuthenticationService
    ) {
    }

    ngOnInit() {
        this.loading = true;
        this.columns = [
            { prop: 'firstName', name: 'First Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            { prop: 'lastName', name: 'Last Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            { prop: 'shippedQuantity', name: 'Total Shipped', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            { prop: 'shippingCompany', name: 'Company', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            {
                prop: 'trackingNumber', name: 'Trancking Number', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
                cellTemplate: this._trackingNumberTemplate
            },
            {
                prop: 'latestShippedDate', name: 'Last Date Shipped', draggable: false, canAutoResize: true, sortable: true,
                resizeable: false, cellTemplate: this._dateTemplate
            },
            {
                prop: 'recieved', name: 'Recieved', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
                cellTemplate: this._deliveryTemplate
            }
        ];

        this.pendingUsers.map(x => x.latestShippedDate = new Date());
    }

    getUsersWithShipments(event: SearchEvent): void {
        this.event = event;
        this.shipmentService.getUsersWithShipments(event).pipe(first()).subscribe((users: AdminShipmentsModel[]) => {
            this.loading = false;
            this.pendingUsers = users;
        });
    }

    onRecieved(row) {
        this.deliveryLoading = true;
        this.shipmentService.packageRecieved(row.shipmentId, true).subscribe(() => {
            this.deliveryLoading = false;
            this.getUsersWithShipments(this.event);
        });
    }
}
