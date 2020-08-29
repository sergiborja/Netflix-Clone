import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoggedModule } from './logged.module';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateUserComponent } from './out-logged-components/authenticate-user/authenticate-user.component';
import { RegisterUserComponent } from './out-logged-components/register-user/register-user.component';
import { DEMOComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateUserComponent,
    RegisterUserComponent,
    DEMOComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggedModule,
    FormsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
