import { SearchEvent } from './../_helpers/list-view/models/search-event';
import { BackofficeApiService, User, UserModel, AdminShipmentsModel, UpdateModel, UserFilamentModel } from './../_helpers/backend';
import { Injectable } from '@angular/core';
import { Observable, AsyncSubject } from 'rxjs';
import { publishReplay, refCount, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    public users: AsyncSubject<User>;

    constructor(private backoffice: BackofficeApiService) { }

    getAll(event: SearchEvent): Observable<UserModel[]> {
        return this.backoffice.users_GetAll(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    GetUsersWithoutFilament(event: SearchEvent): Observable<UserModel[]> {
        return this.backoffice.users_GetUsersWithoutFilament(event.page, event.pageSize, event.sortField, event.searchTerm);
    }

    getById(id: string): Observable<UserModel> {
        if (!this.users) {
            this.users = new AsyncSubject<User>();
            this.backoffice.users_GetById(id).subscribe((user: User) => {
                this.users.next(user);
                this.users.complete();
            });
        }
        return this.users;
    }

    viewUser(id: string): Observable<UserModel> {
        const _user = new AsyncSubject<User>();
        this.backoffice.users_GetById(id).subscribe((user: User) => {
            _user.next(user);
            _user.complete();
        });
        return _user;
    }

    update(userId: string, model: UpdateModel) {
        return this.backoffice.users_Update(userId, model).pipe(map(_ => {
            this.users = null;
        }));
    }

    deliverFilament(user: UserFilamentModel) {
        return this.backoffice.users_deliverFilament(user).pipe(map(_ => {
            this.users = null;
        }));
    }
}
