import { RegisterComponent } from './../register/register.component';
import { AuthenticateModel, TotalsModel } from './../_helpers/backend';
import { User, Role } from '@app/_models';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';
import { TotalsService } from '@app/_services/totals.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    totals: TotalsModel = new TotalsModel();
    private _user: AuthenticateModel = new AuthenticateModel();

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


    onSubmit() {
        this.submitted = true;
        this._user.password = this.f.password.value;
        this._user.username = this.f.username.value;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this._user)
            .pipe(first())
            .subscribe(
                data => {
                    localStorage.getItem('role') === Role.Admin ? this.returnUrl = '/' : this.returnUrl = '/admin';
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    if (error === 'Bad Request') {
                        this.error = 'Username or password is incorrect';
                    } else {
                        this.error = error;
                    }
                    this.loading = false;
                });
    }

    onRegister() {
        this.router.navigate(['register']);
    }
}
