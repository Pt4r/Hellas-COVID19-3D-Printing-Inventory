import { UserService } from '@app/_services';
import { UserModel, Shipment, CreateShipmentModel, AdminShipmentsModel, ShipmentModel } from './../_helpers/backend';
import { BackofficeApiService } from '@app/_helpers';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '.';
import { map } from 'rxjs/operators';
import { Observable, AsyncSubject } from 'rxjs';
import { SearchEvent } from '@app/_helpers/list-view/models/search-event';

@Injectable({ providedIn: 'root' })
export class ShipmentService {
    private _shipment: AsyncSubject<Shipment>;
    private _shipments: AsyncSubject<Shipment[]>;

    constructor(
        private backoffice: BackofficeApiService,
        private _authenticationService: AuthenticationService,
        private _shipmentervice: UserService
    ) { }

    getAll(event: SearchEvent): Observable<ShipmentModel[]> {
        return this.backoffice.shipments_GetAll(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    getById(id: string): Observable<Shipment> {
        if (!this._shipment || id !== null) {
            this._shipment = new AsyncSubject<Shipment>();
            this.backoffice.shipments_GetById(id).subscribe((shipment: Shipment) => {
                this._shipment.next(shipment);
                this._shipment.complete();
            });
        }
        return this._shipment;
    }

    getShipmentsByUser(id: string): Observable<Shipment[]> {
        if (!this._shipments || id !== null) {
            this._shipments = new AsyncSubject<Shipment[]>();
            this.backoffice.shipments_GetShipmentsByUser(id).subscribe((shipment: Shipment[]) => {
                this._shipments.next(shipment);
                this._shipments.complete();
            });
        }
        return this._shipments;
    }

    createShipment(shipment: CreateShipmentModel) {
        return this.backoffice.shipments_Create(shipment);
    }

    getUsersWithShipments(event: SearchEvent): Observable<AdminShipmentsModel[]> {
        return this.backoffice.shipments_GetShipmentsWithUsers(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    packageRecieved(packageId: string, recieved: boolean ): Observable<void> {
        return this.backoffice.shipments_packageRecieved(packageId, recieved);
    }
}

