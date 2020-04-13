import { SearchEvent } from './../_helpers/list-view/models/search-event';
import { BackofficeApiService, User, UserModel, AdminShipmentsModel, UpdateModel, UserFilamentModel } from './../_helpers/backend';
import { Injectable } from '@angular/core';
import { Observable, AsyncSubject } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    private _users: AsyncSubject<User>;

    constructor(private backoffice: BackofficeApiService) { }

    getAll(event: SearchEvent): Observable<UserModel[]> {
        return this.backoffice.users_GetAll(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    GetUsersWithoutFilament(event: SearchEvent): Observable<UserModel[]> {
        return this.backoffice.users_GetUsersWithoutFilament(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    getById(id: string): Observable<UserModel> {
        if (!this._users) {
            this._users = new AsyncSubject<User>();
            this.backoffice.users_GetById(id).subscribe((user: User) => {
                this._users.next(user);
                this._users.complete();
            });
        }
        return this._users;
    }

    update(userId: string, model: UpdateModel) {
        return this.backoffice.users_Update(userId, model).pipe((error) => error);
    }

    deliverFilament(user: UserFilamentModel) {
        return this.backoffice.users_deliverFilament(user);
    }
}
