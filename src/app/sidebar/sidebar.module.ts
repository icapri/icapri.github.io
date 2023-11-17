import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MatSidenavModule} from '@angular/material/sidenav';
import { USidebarComponent } from "./sidebar.component";

@NgModule({
  declarations: [USidebarComponent],
  imports: [BrowserModule, MatSidenavModule],
  exports: [USidebarComponent]
})
export class USidebarModule {}
