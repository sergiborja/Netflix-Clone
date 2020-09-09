import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateTokenService } from '../../services/Commons/validate-token.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass'],
})
export class PlayerComponent implements OnInit {
  //We declare the global properties of this class.s
  filmSelected: String;
  validToken: boolean;
  height: number;
  width: number;

  //We declare the angular services we are gonna use.
  constructor(
    private router: Router,
    private validateTokenService: ValidateTokenService
  ) {}

  //After the constructor is read, the ngOnInit is executed. Takes the id of the film from the url and plays the movie.
  ngOnInit() {
    this.validToken = this.validateTokenService.validateToken(
      sessionStorage.token
    );

    [, this.filmSelected] = this.router.url.split('/player/');
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }
}
