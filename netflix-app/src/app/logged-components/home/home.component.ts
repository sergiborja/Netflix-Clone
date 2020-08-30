import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import { Film } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  profileSelected: string;
  favList: Array<string>;
  allFilms: Array<Film>;
  dramaFilms: Array<Film>;
  actionFilms: Array<Film>;

  constructor(private homeService: HomeService, public router: Router) {}

  ngOnInit(): void {
    const [, profileSelected] = this.router.url.split('/home/');

    this.homeService
      .retrieveProfileSelected(profileSelected)
      .then((memberFound) => {
        this.profileSelected = memberFound.nick;
        this.favList = memberFound.films;
        this.homeService.setFavList(this.favList);
      });

    this.homeService.retrieveAllFilms().then((allFilmsRetrieved) => {
      this.allFilms = allFilmsRetrieved;

      let dramaFilms: Array<Film> = [];
      allFilmsRetrieved.map((film) => {
        const indexOf = film.gender.indexOf('drama');
        if (indexOf !== -1) dramaFilms.push(film);
      });
      console.log(dramaFilms);
      this.dramaFilms = dramaFilms;

      let actionFilms: Array<Film> = [];
      allFilmsRetrieved.map((film) => {
        const indexOf = film.gender.indexOf('action');
        if (indexOf !== -1) actionFilms.push(film);
      });
      this.actionFilms = actionFilms;
    });
  }

  handleFavSelected(ytIdSelected: string, profileSelected: string): void {
    this.homeService
      .handleFavFilms(profileSelected, ytIdSelected)
      .then((userUpdatedFilms) => {
        this.homeService.setFavList(userUpdatedFilms);
      });
  }

  filmSelected(filmId: string): void {
    this.router.navigate([`demo/${filmId}`]);
  }

  logOut(): void {
    delete sessionStorage.token;
    window.location.reload();
  }
}
