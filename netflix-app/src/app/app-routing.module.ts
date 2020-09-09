import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateUserComponent } from './components/authenticate-user/authenticate-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';

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
