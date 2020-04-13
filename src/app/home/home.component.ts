import { UserModel, Shipment } from './../_helpers/backend';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService, ShipmentService } from '@app/_services';
import { TableColumn } from '@swimlane/ngx-datatable';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    @ViewChild('deliveryTemplate', { static: true }) private _deliveryTemplate: TemplateRef<HTMLElement>;
    @ViewChild('dateTemplate', { static: true }) private _dateTemplate: TemplateRef<HTMLElement>;
    loading = false;
    currentUser: UserModel = new UserModel();
    shipments: Shipment[] = new Array<Shipment>();
    columns: TableColumn[] = [];

    constructor(
        private userService: UserService,
        private shipmentService: ShipmentService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loading = true;
        this.columns = [
            { prop: 'quantity', name: '#', draggable: false, canAutoResize: false, sortable: true, resizeable: false },
            { prop: 'trackingNumber', name: 'Trancking Number', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            { prop: 'shippingCompany', name: 'Company', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            {
                prop: 'dateShipped', name: 'Date shipped', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
                cellTemplate: this._dateTemplate
            },
            {
                prop: 'recieved', name: 'Status', draggable: false, canAutoResize: false, sortable: true, resizeable: false,
                cellTemplate: this._deliveryTemplate
            }
        ];

        this.shipments.map(x => x.dateShipped = new Date());
        this.currentUser.latestShippedDate = new Date();
    }

    getShipments(): void {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe((user: UserModel) => {
            this.loading = false;
            this.currentUser = user;
            if (user.shippedQuantity === null) {
                this.currentUser.shippedQuantity = 0;
            }

            if (user.sentFilamentDate) {
                var nextweek = new Date(user.sentFilamentDate.getFullYear(), user.sentFilamentDate.getMonth(), user.sentFilamentDate.getDate() + 7);
                if (user.sentFilamentDate > nextweek) {
                    this.currentUser.sentFilamentDate = null;
                } else {
                    this.currentUser.sentFilamentDate = user.sentFilamentDate;
                }
            }
        });
        this.shipmentService.getShipmentsByUser(this.currentUser.id).subscribe((shipments: Shipment[]) => {
            this.shipments = shipments;
        });
    }
}
