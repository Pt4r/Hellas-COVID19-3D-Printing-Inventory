import { User } from './../../../_helpers/backend';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilamentComponent } from '../filament.component';
import { UserFilamentModel } from '@app/_helpers';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent implements OnInit{
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  filamentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FilamentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private _form: FormBuilder) { }

  ngOnInit(): void {
    this.filamentForm = this._form.group({
      sentFilamentDate: ['', Validators.required],
      filamentTrackingNumber:  ['']
    });
  }

  get f() { return this.filamentForm.controls; }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
