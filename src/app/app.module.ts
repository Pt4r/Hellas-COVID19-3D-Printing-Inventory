import { RouterModule } from '@angular/router';
import { ListViewComponent } from './_helpers/list-view/list-view.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { JwtInterceptor, ErrorInterceptor, BACKOFFICE_API_BASE_URL } from './_helpers';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ShipmentComponent } from './shipment';
import { UsersComponent } from './admin/users/users.component';
import { ViewComponent } from './admin/users/view/view.component';
import { ShipmentsComponent } from './admin/shipments/shipments.component';
import { FilamentComponent } from './admin/filament/filament.component';
import { ProfileComponent } from './home/profile/profile.component';
import { environment } from 'src/environments/environment';
import { ConfirmDialogComponent } from './admin/filament/confirm-dialog/confirm-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GuideComponent } from './guide/guide.component';



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        JwBootstrapSwitchNg2Module,
        NgxDatatableModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgbModule,
        ToastrModule.forRoot({
            preventDuplicates: true
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        RegisterComponent,
        ShipmentComponent,
        ListViewComponent,
        UsersComponent,
        ViewComponent,
        ShipmentsComponent,
        FilamentComponent,
        ProfileComponent,
        ConfirmDialogComponent,
        GuideComponent
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    providers: [
        MatDatepickerModule,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: BACKOFFICE_API_BASE_URL, useFactory: () => environment.apiUrl },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
