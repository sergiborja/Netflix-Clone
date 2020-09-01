import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass'],
})
export class PlayerComponent implements OnInit {
  filmSelected: String;
  height;
  width;
  constructor(private router: Router) {}

  ngOnInit() {
    [, this.filmSelected] = this.router.url.split('/player/');
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }
}
