import { ShipmentModel, TotalsModel } from './../../_helpers/backend';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { SearchEvent } from '@app/_helpers/list-view/models/search-event';
import { ShipmentService } from '@app/_services';
import { first, map } from 'rxjs/operators';
import { TotalsService } from '@app/_services/totals.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html'
})
export class ShipmentsComponent implements OnInit {
  @ViewChild('deliveryTemplate', { static: true }) private _deliveryTemplate: TemplateRef<HTMLElement>;
  @ViewChild('dateTemplate', { static: true }) private _dateTemplate: TemplateRef<HTMLElement>;
  @ViewChild('trackingNumberTemplate', { static: true }) private _trackingNumberTemplate: TemplateRef<HTMLElement>;
  loading = false;
  deliveryLoading = false;
  pendingShipments: ShipmentModel[] = new Array<ShipmentModel>();
  columns: TableColumn[] = [];
  totals: TotalsModel = new TotalsModel();
  private event: SearchEvent;

  constructor(
    private shipmentService: ShipmentService,
    private totalsService: TotalsService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.columns = [
      { prop: 'quantity', name: 'Quantity', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      {
        prop: 'shippingCompany', name: 'Shipping Company', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
      },
      {
        prop: 'trackingNumber', name: 'Trancking Number', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
        cellTemplate: this._trackingNumberTemplate
      },
      { prop: 'fileName', name: 'File', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      {
        prop: 'dateShipped', name: 'Date Shipped', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
        cellTemplate: this._dateTemplate
      },
      {
        prop: 'recieved', name: 'Recieved', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
        cellTemplate: this._deliveryTemplate
      }
    ];

    this.pendingShipments.map(x => x.dateShipped = new Date());
    this.getTotals();
  }

  getUsersWithShipments(event: SearchEvent): void {
    this.event = event;
    this.shipmentService.getAll(event).pipe(first()).subscribe((users: ShipmentModel[]) => {
      this.loading = false;
      this.pendingShipments = users;
    });
  }

  onRecieved(row) {
    this.deliveryLoading = true;
    this.shipmentService.packageRecieved(row.shipmentId, true).subscribe(() => {
      this.deliveryLoading = false;
      this.getUsersWithShipments(this.event);
    });
  }

  getTotals() {
    this.totalsService.getTotals().subscribe((totals: TotalsModel) => {
        this.totals = totals;
    })
}
}
