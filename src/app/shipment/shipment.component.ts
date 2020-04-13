import { HomeComponent } from './../home/home.component';
import { CreateShipmentModel } from './../_helpers/backend';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ShipmentService } from '@app/_services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Shipment } from '@app/_models';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html'
})
export class ShipmentComponent implements OnInit {
  shipmentForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formError = '';
  private _shipment: CreateShipmentModel = new CreateShipmentModel();
  private _currentDate;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _shipmentService: ShipmentService
  ) { }

  ngOnInit() {
    this._currentDate = new Date().toISOString().substring(0, 10);

    this.shipmentForm = this._formBuilder.group({
      quantity: [30, [Validators.required, Validators.min(this._shipment.minQuantity)]],
      dateShipped: [this._currentDate, Validators.required],
      trackingNumber: ['', Validators.required],
      shippingCompany: ['', Validators.required],
      needsFilament: [false, Validators.required],
      fileName: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.shipmentForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.formError = '';
    this._shipment.quantity = this.f.quantity.value;
    this._shipment.dateShipped = new Date(this.f.dateShipped.value);
    this._shipment.trackingNumber = this.f.trackingNumber.value;
    this._shipment.shippingCompany = this.f.shippingCompany.value;
    this._shipment.needsFilament = this.f.needsFilament.value;
    this._shipment.fileName = this.f.fileName.value;

    // stop here if form is invalid
    if (this.shipmentForm.invalid) {
      Object.keys(this.shipmentForm.controls).forEach(key => {

        const controlErrors: ValidationErrors = this.shipmentForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            this.formError = key.charAt(0).toUpperCase() + key.slice(1) + ' is incorrect ( ' + keyError + ' )';
          });
        }
      });
      return;
    }

    this.loading = true;
    this._shipmentService.createShipment(this._shipment)
      .pipe(first())
      .subscribe(
        data => {
          this._router.navigate([HomeComponent]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  goBack() {
    this._router.navigate([this.returnUrl]);
  }
}
