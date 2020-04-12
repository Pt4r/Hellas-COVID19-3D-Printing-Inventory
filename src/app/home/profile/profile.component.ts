import { User } from './../../_models/user';
import { UpdateModel, UserModel } from './../../_helpers/backend';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  updateForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formError = '';
  user: User = new User();
  updatedUser = new UpdateModel();

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.updateForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required,
      Validators.pattern(/^[0-9]{10,11}$/)]],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      address: ['', Validators.required],
      printerModel: ['', Validators.required],
      batchRequiredTime: [0, Validators.required],
      printerActive: [true],
      username: ['', Validators.required],
      password: ['', [Validators.required,
      Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]],
      newPassword: ['', Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // get user details
    this._userService.getById(this._authenticationService.currentUserValue.id).subscribe((user: User) => {
      this.user = user;
      this.f.firstName.setValue(user.firstName);
      this.f.lastName.setValue(user.lastName);
      this.f.phoneNumber.setValue(user.phoneNumber);
      this.f.email.setValue(user.email);
      this.f.address.setValue(user.address);
      this.f.printerModel.setValue(this.user.printerModel);
      this.f.batchRequiredTime.setValue(user.batchRequiredTime);
      this.f.printerActive.setValue(user.printerActive);
      this.f.username.setValue(user.username);
    });
  }

  get f() { return this.updateForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.formError = '';
    this.updatedUser.firstName = this.f.firstName.value;
    this.updatedUser.lastName = this.f.lastName.value;
    this.updatedUser.phoneNumber = this.f.phoneNumber.value;
    this.updatedUser.email = this.f.email.value;
    this.updatedUser.address = this.f.address.value;
    this.updatedUser.printerModel = this.f.printerModel.value;
    this.updatedUser.batchRequiredTime = this.f.batchRequiredTime.value;
    this.updatedUser.printerActive = this.f.printerActive.value;
    this.updatedUser.password = this.f.password.value;
    this.updatedUser.newPassword = this.f.newPassword.value;
    this.updatedUser.username = this.f.username.value;
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      Object.keys(this.updateForm.controls).forEach(key => {

        const controlErrors: ValidationErrors = this.updateForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            this.formError = key + ' is incorrect ( ' + keyError + ' )';
          });
        }
      });
      return;
    }

    this.loading = true;

    this._userService.update(this._authenticationService.currentUserValue.id, this.updatedUser)
      .pipe(first())
      .subscribe(
        data => {
          this._router.navigate([this.returnUrl]);
        },
        (error) => {
          if (error === 'Bad Request') {
            this.error = 'Incorrect password';
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
