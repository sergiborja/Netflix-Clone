import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { RetrieveMemberService } from '../../services/retrieve-member.service';
import { RetrieveAllFilmsService } from '../../services/retrieve-all-films.service';
import { HandleFavFilmsService } from '../../services/handle-fav-films.service';
import { Router } from '@angular/router';
import { Film } from '../../utils/interfaces';

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
  validToken: boolean;

  constructor(
    private homeService: HomeService,
    private retrieveMemberService: RetrieveMemberService,
    private retrieveAllFilmsService: RetrieveAllFilmsService,
    private handleFavFilmsService: HandleFavFilmsService,
    public router: Router
  ) {}

  ngOnInit() {
    const [, profileSelected] = this.router.url.split('/home/');
    this.validToken = this.homeService.validateToken(sessionStorage.token);
    this.profileSelected = profileSelected;

    this.retrieveMemberService
      .retrieveProfileSelected(this.profileSelected)
      .then((memberFound) => {
        this.profileSelected = memberFound.nick;
        this.favList = memberFound.films;
        this.retrieveMemberService.setFavList(this.favList);
      });

    this.retrieveAllFilmsService
      .retrieveAllFilms()
      .then((allFilmsRetrieved) => {
        this.allFilms = allFilmsRetrieved;

        let dramaFilms: Array<Film> = [];
        allFilmsRetrieved.map((film) => {
          const indexOf = film.gender.indexOf('drama');
          if (indexOf !== -1) dramaFilms.push(film);
        });
        this.dramaFilms = dramaFilms;

        let actionFilms: Array<Film> = [];
        allFilmsRetrieved.map((film) => {
          const indexOf = film.gender.indexOf('action');
          if (indexOf !== -1) actionFilms.push(film);
        });
        this.actionFilms = actionFilms;
      });
  }

  handleFavSelected(ytIdSelected: string): void {
    const token = sessionStorage.token;
    this.handleFavFilmsService
      .handleFavFilms(token, ytIdSelected)
      .then((userUpdatedFilms) => {
        this.retrieveMemberService.setFavList(userUpdatedFilms);
      });
  }

  filmSelected(filmId: string): void {
    this.router.navigate([`player/${filmId}`]);
  }

  logOut(): void {
    delete sessionStorage.token;
    window.location.reload();
  }
}
