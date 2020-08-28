import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { FavListChildrenComponent } from './fav-list-children/fav-list-children.component';

@NgModule({
  declarations: [LoggedComponent, WelcomeComponent, HomeComponent, FavListChildrenComponent],
  imports: [CommonModule],
  exports: [LoggedComponent],
})
export class LoggedModule {}
