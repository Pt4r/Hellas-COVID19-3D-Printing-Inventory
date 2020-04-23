import { ActivatedRoute, Router } from '@angular/router';
import { RegisterModel } from './../_helpers/backend';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formError = '';
  private _user: RegisterModel = new RegisterModel();

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this._authenticationService.currentUserValue) {
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required,
      Validators.pattern(/^[0-9]{10,11}$/)]],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      batchRequiredTime: [0],
      addressStreet: ['', Validators.required],
      addressCity: ['', Validators.required],
      addressTK: ['', Validators.required],
      printerModel: ['', Validators.required],
      printerActive: [true],
      username: ['', Validators.required],
      password: ['', [Validators.required,
      Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.formError = '';
    this._user.firstName = this.f.firstName.value;
    this._user.lastName = this.f.lastName.value;
    this._user.phoneNumber = this.f.phoneNumber.value;
    this._user.email = this.f.email.value;
    this._user.address = this.f.addressStreet.value + ', ' + this.f.addressCity.value + ', ' + this.f.addressTK.value;
    this._user.printerModel = this.f.printerModel.value;
    this._user.batchRequiredTime = this.f.batchRequiredTime.value;
    this._user.printerActive = this.f.printerActive.value;
    this._user.password = this.f.password.value;
    this._user.username = this.f.username.value;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach(key => {

        const controlErrors: ValidationErrors = this.registerForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            this.formError = key + ' is incorrect ( ' + keyError + ' )';
          });
        }
      });
      return;
    }

    this.loading = true;
    this._authenticationService.register(this._user)
      .pipe(first())
      .subscribe(
        data => {
          this._router.navigate([this.returnUrl]);
        },
        error => {
          if (error === 'Bad Request') {
              this.error = 'Username is already taken';
          } else {
              this.error = error;
          }
          this.loading = false;
      });
  }

  goBack() {
    this._router.navigate([this.returnUrl]);
  }
}
