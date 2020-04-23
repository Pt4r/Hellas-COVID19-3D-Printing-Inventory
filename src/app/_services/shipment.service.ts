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
    private _shipmentsByUser: AsyncSubject<Shipment[]>;

    constructor(
        private backoffice: BackofficeApiService,
        private userService: UserService
    ) { }

    getAll(event: SearchEvent): Observable<ShipmentModel[]> {
        return this.backoffice.shipments_GetAll(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    getById(id: string): Observable<Shipment> {
        if (!this._shipment) {
            this._shipment = new AsyncSubject<Shipment>();
            this.backoffice.shipments_GetById(id).subscribe((shipment: Shipment) => {
                this._shipment.next(shipment);
                this._shipment.complete();
            });
        }
        return this._shipment;
    }

    getShipmentsByUser(id: string): Observable<Shipment[]> {
        if (!this._shipmentsByUser) {
            this._shipmentsByUser = new AsyncSubject<Shipment[]>();
            this.backoffice.shipments_GetShipmentsByUser(id).subscribe((shipment: Shipment[]) => {
                this._shipmentsByUser.next(shipment);
                this._shipmentsByUser.complete();
            });
        }
        return this._shipmentsByUser;
    }

    createShipment(shipment: CreateShipmentModel) {
        return this.backoffice.shipments_Create(shipment).pipe(map(_ => {
            this._shipment = null;
            this._shipmentsByUser = null;
            this.userService.users = null;
        }));
    }

    getUsersWithShipments(event: SearchEvent): Observable<AdminShipmentsModel[]> {
        return this.backoffice.shipments_GetShipmentsWithUsers(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    getUsersWithShipmentsCP(event: SearchEvent): Observable<AdminShipmentsModel[]> {
        return this.backoffice.shipments_GetShipmentsWithUsersCP(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    packageRecieved(packageId: string, recieved: boolean): Observable<void> {
        return this.backoffice.shipments_packageRecieved(packageId, recieved);
    }
}

