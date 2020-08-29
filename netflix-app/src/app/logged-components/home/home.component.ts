import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

interface expectedBody {
  ytId: string;
  gender: Array<string>;
  name: string;
  description: string;
  time: string;
  cover: string;
  __v: number;
  _id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  trying: string;
  profileSelected: string;
  favList: Array<string>;
  allFilms: Array<expectedBody>;
  dramaFilms;
  actionFilms;

  constructor(private homeService: HomeService, public router: Router) {}

  ngOnInit() {
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
      console.log(allFilmsRetrieved);
      let dramaFilms = [];
      allFilmsRetrieved.map((film) => {
        const indexOf = film.gender.indexOf('drama');
        if (indexOf !== -1) dramaFilms.push(film);
      });
      this.dramaFilms = dramaFilms;

      let actionFilms = [];
      allFilmsRetrieved.map((film) => {
        const indexOf = film.gender.indexOf('action');
        if (indexOf !== -1) actionFilms.push(film);
      });
      this.actionFilms = actionFilms;
    });
  }

  handleFavSelected(ytIdSelected: string, profileSelected: string) {
    this.homeService
      .handleFavFilms(profileSelected, ytIdSelected)
      .then((userUpdatedFilms) => {
        this.homeService.setFavList(userUpdatedFilms);
      });
  }

  filmSelected(filmId: string) {
    this.router.navigate([`demo/${filmId}`]);
  }
}
