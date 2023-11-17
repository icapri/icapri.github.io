import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UTopbarComponent } from "./topbar.component";

@NgModule({
  declarations: [UTopbarComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [UTopbarComponent]
})
export class UTopbarModule {}
