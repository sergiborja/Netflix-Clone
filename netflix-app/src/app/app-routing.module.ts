import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateUserComponent } from './out-logged-components/authenticate-user/authenticate-user.component';
import { RegisterUserComponent } from './out-logged-components/register-user/register-user.component';
import { WelcomeComponent } from './logged-components/welcome/welcome.component';
import { HomeComponent } from './logged-components/home/home.component';
import { PlayerComponent } from './logged-components/player/player.component';

const routes: Routes = [
  { path: '', redirectTo: 'authenticate', pathMatch: 'full' },
  { path: 'authenticate', component: AuthenticateUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home/:nick?', component: HomeComponent },
  { path: 'player/:id?', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
