import { GuideComponent } from './guide/guide.component';
import { ProfileComponent } from './home/profile/profile.component';
import { FilamentComponent } from './admin/filament/filament.component';
import { ShipmentsComponent } from './admin/shipments/shipments.component';
import { ViewComponent } from './admin/users/view/view.component';
import { UsersComponent } from './admin/users/users.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'guide',
        component: GuideComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'admin/users',
        component: UsersComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'admin/filament',
        component: FilamentComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'admin/shipments',
        component: ShipmentsComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'admin/users/:id/view',
        component: ViewComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'shipments',
        component: ShipmentComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
