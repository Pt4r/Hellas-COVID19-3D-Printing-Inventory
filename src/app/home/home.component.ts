import { UserModel, Shipment, TotalsModel, TopTen } from './../_helpers/backend';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { first, map } from 'rxjs/operators';

import { UserService, AuthenticationService, ShipmentService } from '@app/_services';
import { TableColumn } from '@swimlane/ngx-datatable';
import { TotalsService } from '@app/_services/totals.service';
import { ToastrService } from 'ngx-toastr';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    @ViewChild('deliveryTemplate', { static: true }) private _deliveryTemplate: TemplateRef<HTMLElement>;
    @ViewChild('dateTemplate', { static: true }) private _dateTemplate: TemplateRef<HTMLElement>;
    @ViewChild('trackingNumberTemplate', { static: true }) private _trackingNumberTemplate: TemplateRef<HTMLElement>;
    loading = false;
    currentUser: UserModel = new UserModel();
    shipments: Shipment[] = new Array<Shipment>();
    columns: TableColumn[] = [];
    totals: TotalsModel = new TotalsModel();
    topTen: TopTen[] = [];

    constructor(
        private userService: UserService,
        private shipmentService: ShipmentService,
        private authenticationService: AuthenticationService,
        private totalsService: TotalsService,
        private toastr: ToastrService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        this.loading = true;
    }

    ngOnInit() {
        this.columns = [
            { prop: 'quantity', name: '#', draggable: false, canAutoResize: false, sortable: true, resizeable: false, width: 70 },
            { prop: 'fileName', name: 'File Name', draggable: false, canAutoResize: false, sortable: true, resizeable: false },
            { prop: 'shippingCompany', name: 'Shipped By', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
            {
                prop: 'trackingNumber', name: 'Trancking Number', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
                cellTemplate: this._trackingNumberTemplate
            },
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
        this.getTotals();
        this.showHighScore();
    }

    getTotals() {
        this.totalsService.getTotals().subscribe((totals: TotalsModel) => {
            this.totals = totals;
        })
    }

    getShipments(): void {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe((user: UserModel) => {
            this.loading = false;
            this.currentUser = user;
            if (user.shippedQuantity === null) {
                this.currentUser.shippedQuantity = 0;
            }

            if (user.sentFilamentDate) {
                const nextweek = new Date(user.sentFilamentDate.getFullYear(), user.sentFilamentDate.getMonth(),
                    user.sentFilamentDate.getDate() + 7);

                if (user.sentFilamentDate > nextweek) {
                    this.currentUser.sentFilamentDate = null;
                } else {
                    this.currentUser.sentFilamentDate = user.sentFilamentDate;
                }
            } else {
                user.sentFilamentDate = null;
            }
        });
        this.shipmentService.getShipmentsByUser(this.currentUser.id).subscribe((shipments: Shipment[]) => {
            this.shipments = shipments;
        });
    }

    showHighScore() {
        this.totalsService.getTopTen().subscribe((topTen: TopTen[]) => {
            this.topTen = topTen;

            if (window.screen.width > 760 ) {
                this.toastr.success(`
                <table class="table text-light text-center">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Shipped</th>
                    </tr>
                    </thead>
                    <tbody>
                        ${this.topTen.map((x, index) => '<tr><th scope="row">' + (index + 1) + '</th>' + '<td>' + x.username + '</td>' + '<td>' + x.totalQuantity + '</td></tr>').join('')}
                    </tbody>
                </table>
                `, 'Top 10', {
                    enableHtml: true,
                    closeButton: true,
                    timeOut: 8000,
                    progressBar: true
                });
            };
        });
    }
}
