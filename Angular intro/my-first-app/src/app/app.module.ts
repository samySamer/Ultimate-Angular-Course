import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { warningAlertComponent } from './WarningAlert/warning-Alert.Component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MyComponentComponent,
    SuccessAlertComponent,
    warningAlertComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
