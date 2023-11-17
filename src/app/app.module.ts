import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { USidebarModule } from './sidebar/sidebar.module';
import { UTopbarModule } from './topbar/topbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    USidebarModule,
    UTopbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
