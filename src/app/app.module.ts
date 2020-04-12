import { RouterModule } from '@angular/router';
import { ListViewComponent } from './_helpers/list-view/list-view.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

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



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        JwBootstrapSwitchNg2Module,
        NgxDatatableModule
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
        ProfileComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
