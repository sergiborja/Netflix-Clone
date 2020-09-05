import { Component, OnInit, Input } from '@angular/core';
import { ValidateTokenService } from '../../services/validate-token.service';
import { RetrieveMemberService } from '../../services/retrieve-member.service';
import { RetrieveAllFilmsService } from '../../services/retrieve-all-films.service';
import { HandleFavFilmsService } from '../../services/handle-fav-films.service';
import { RetrieveUserService } from '../../services/retrieve-user.service';
import { FavListFeedingService } from '../../services/fav-list-feeding.service';
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
  showFavButton: boolean;

  constructor(
    private validateTokenService: ValidateTokenService,
    private retrieveMemberService: RetrieveMemberService,
    private retrieveAllFilmsService: RetrieveAllFilmsService,
    private handleFavFilmsService: HandleFavFilmsService,
    private favListFeedingService: FavListFeedingService,
    private retrieveUserService: RetrieveUserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.validToken = this.validateTokenService.validateToken(
      sessionStorage.token
    );

    let profileSelected: string;

    [, profileSelected] = this.router.url.split('/home/a:');
    console.log(profileSelected);
    if (profileSelected) {
      this.retrieveUserService
        .retrieveUser(sessionStorage.token)
        .then((adminFound) => {
          this.profileSelected = adminFound.nick;
          this.favList = adminFound.films;
          this.favListFeedingService.setFavList(adminFound.films);
        });
    } else {
      [, profileSelected] = this.router.url.split('/home/');
      this.retrieveMemberService
        .retrieveProfileSelected(profileSelected)
        .then((memberFound) => {
          this.profileSelected = memberFound.nick;
          this.favList = memberFound.films;
          this.favListFeedingService.setFavList(memberFound.films);
        });
    }
    this.profileSelected = profileSelected;

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
    this.handleFavFilmsService
      .handleFavFilms(ytIdSelected, this.profileSelected)
      .then((userUpdatedFilms) => {
        this.favListFeedingService.setFavList(userUpdatedFilms);
      });
  }

  filmSelected(filmId: string): void {
    this.router.navigate([`player/${filmId}`]);
  }

  logOut(): void {
    delete sessionStorage.token;
    window.location.reload();
  }

  alreadyAFavValidation(currentFilmId) {
    if (this.favList.indexOf(currentFilmId) !== -1) {
      this.showFavButton = true;
      return true;
    } else {
      this.showFavButton = false;
      return false;
    }
  }
}
