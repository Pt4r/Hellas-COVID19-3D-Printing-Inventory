import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/_services';
import { Role } from '@app/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const currentUser = this.authenticationService.currentUserValue;
        const allowedRoles = route.data.roles;
        const isAuthorized = this.authenticationService.isAuthorized(allowedRoles);

        if (currentUser) {
            if (!isAuthorized) {
                currentUser.role === Role.Admin ? this.router.navigate(['/admin']) : this.router.navigate(['/']);
            }

            return isAuthorized;
        }

        //  not logged in so redirect to login page with the return url
        this.authenticationService.logout();
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;

    }
}
