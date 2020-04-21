import { UserModel } from './_helpers/backend';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    currentUser: UserModel;
    mobile = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        if (document.documentElement.clientWidth < 768) {
        this.mobile = true;
        }
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin as keyof typeof Role;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}