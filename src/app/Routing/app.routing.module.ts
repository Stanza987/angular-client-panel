import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientDetailsComponent } from '../Clients/components/client-details/client-details.component';
import { AddClientComponent } from '../Clients/components/add-client/add-client.component';
import { EditClientComponent } from '../Clients/components/edit-client/edit-client.component';
import { DashboardComponent } from '../Core/components/dashboard/dashboard.component';
import { RegisterComponent } from '../Core/components/register/register.component';
import { LoginComponent } from '../Core/components/login/login.component';
import { SettingsComponent } from '../Core/components/settings/settings.component';
import { NotFoundComponent } from '../Core/components/not-found/not-found.component';

import { AuthGuard } from '../Shared/guards/auth.guard';
import { RegisterGuard } from '../Core/guards/register.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent, canActivate: [AuthGuard] },
  { path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit-client/:id', component: EditClientComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
