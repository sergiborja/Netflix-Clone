import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoggedModule } from './logged-module/logged.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateUserComponent } from './out-logged-components/authenticate-user/authenticate-user.component';
import { RegisterUserComponent } from './out-logged-components/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateUserComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}