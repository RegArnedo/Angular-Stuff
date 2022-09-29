import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WarningAlertComponent } from "./WarningAlert/WarningAlert.component";
import { SuccessAlert } from "./SuccessAlert/SuccessAlert.component";
import { TestAlertComponent } from './test-alert/test-alert.component';

@NgModule({
  declarations: [AppComponent, WarningAlertComponent, SuccessAlert, TestAlertComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
