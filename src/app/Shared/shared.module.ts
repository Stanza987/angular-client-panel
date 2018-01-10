import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { environment } from '../../environments/environment';

import { ClientsComponent } from './components/clients/clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FlashMessagesModule.forRoot()
  ],
  exports: [
    ClientsComponent,
    NavbarComponent,
    SidebarComponent,
    FlashMessagesModule
  ],
  declarations: [
    ClientsComponent,
    NavbarComponent,
    SidebarComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
