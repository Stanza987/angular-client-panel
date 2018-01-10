import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './Routing/app.routing.module';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { ClientsModule } from './Clients/clients.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ClientsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
