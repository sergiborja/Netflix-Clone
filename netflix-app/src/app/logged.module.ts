import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './logged-components/welcome/welcome.component';
import { HomeComponent } from './logged-components/home/home.component';
import { FavListChildrenComponent } from './logged-components/fav-list-children/fav-list-children.component';

@NgModule({
  declarations: [WelcomeComponent, HomeComponent, FavListChildrenComponent],
  imports: [CommonModule],
  exports: [WelcomeComponent],
})
export class LoggedModule {}
