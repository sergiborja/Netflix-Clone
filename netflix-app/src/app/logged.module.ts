import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { FavListChildrenComponent } from './components/fav-list-children/fav-list-children.component';
import { PlayerComponent } from './components/player/player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    FavListChildrenComponent,
    PlayerComponent,
  ],
  imports: [CommonModule, YouTubePlayerModule],
  exports: [WelcomeComponent],
})
export class LoggedModule {}
