import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateUserComponent } from './out-logged-components/authenticate-user/authenticate-user.component';
import { RegisterUserComponent } from './out-logged-components/register-user/register-user.component';
import { WelcomeComponent } from './logged-module/welcome/welcome.component';
import { HomeComponent } from './logged-module/home/home.component';
import { LoggedComponent } from './logged-module/logged.component';
import { DEMOComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'authenticate', pathMatch: 'full' },
  { path: 'authenticate', component: AuthenticateUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home/:nick?', component: HomeComponent },
  { path: 'demo/:id?', component: DEMOComponent },
  // {
  //   path: 'logged',
  //   component: LoggedComponent,
  //   children: [
  //     { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  //     { path: 'welcome', component: WelcomeComponent },
  //     { path: 'home', component: HomeComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
