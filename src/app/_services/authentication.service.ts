import { BackofficeApiService, AuthenticateModel, UserModel, RegisterModel, UpdateModel } from './../_helpers/backend';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;

    constructor(private backoffice: BackofficeApiService) {
        this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }

    login(model: AuthenticateModel) {
        return this.backoffice.users_Authenticate(model)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout(): void {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    register(model: RegisterModel) {
        return this.backoffice.users_Register(model).pipe(error => error);
    }

    isAuthorized(roles: string[]): boolean {
        if (roles == null || roles.length === 0) {
            return true;
        }

        if (this.currentUserSubject.value === null) {
            return false;
        }

        return roles.includes(this.currentUserSubject.value.role)
    }
}
