import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateUserComponent } from './authenticate-user/authenticate-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'authenticate', pathMatch: 'full' },
  { path: 'authenticate', component: AuthenticateUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
