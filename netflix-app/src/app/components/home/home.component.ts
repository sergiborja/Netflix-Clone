import { Component, OnInit, Input } from '@angular/core';
import { ValidateTokenService } from '../../services/Commons/validate-token.service';
import { RetrieveMemberService } from '../../services/Member/retrieve-member.service';
import { RetrieveAllFilmsService } from '../../services/Film/retrieve-all-films.service';
import { HandleFavFilmsService } from '../../services/Commons/handle-fav-films.service';
import { RetrieveUserService } from '../../services/User/retrieve-user.service';
import { FavListFeedingService } from '../../services/Film/fav-list-feeding.service';
import { Router } from '@angular/router';
import { Film } from '../../utils/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  //We declare the global properties of this class.
  profileSelected: string;
  favList: Array<string>;
  allFilms: Array<Film>;
  dramaFilms: Array<Film>;
  actionFilms: Array<Film>;
  validToken: boolean;

  //We declare the angular services we are gonna use.
  constructor(
    private validateTokenService: ValidateTokenService,
    private retrieveMemberService: RetrieveMemberService,
    private retrieveAllFilmsService: RetrieveAllFilmsService,
    private handleFavFilmsService: HandleFavFilmsService,
    private favListFeedingService: FavListFeedingService,
    private retrieveUserService: RetrieveUserService,
    public router: Router
  ) {}

  //After the constructor is read, the ngOnInit is executed.
  ngOnInit() {
    //We validate the token so the client can't acces to the url profile information if the token isn't correct.
    this.validToken = this.validateTokenService.validateToken(
      sessionStorage.token
    );

    let profileSelected: string;

    //We take the nick name of the profile selected in the actual url, if it is a member, it calls the retrieve member service, otherwise it calls the retrieve user (admin) service.
    [, profileSelected] = this.router.url.split('/home/a:');
    if (profileSelected) {
      this.retrieveUserService
        .retrieveUser(sessionStorage.token)
        .then((adminFound) => {
          this.profileSelected = adminFound.nick;
          this.favList = adminFound.films;
          this.favListFeedingService.setFavList(adminFound.films);
        });
    } else {
      [, profileSelected] = this.router.url.split('/home/m:');
      this.retrieveMemberService
        .retrieveProfileSelected(profileSelected)
        .then((memberFound) => {
          this.profileSelected = memberFound.nick;
          this.favList = memberFound.films;
          this.favListFeedingService.setFavList(memberFound.films);
        });
    }
    this.profileSelected = profileSelected;

    //Below here we retrieve the information of the films we have in our database, all of them.
    this.retrieveAllFilmsService
      .retrieveAllFilms()
      .then((allFilmsRetrieved: Array<Film>) => {
        this.allFilms = allFilmsRetrieved;

        let dramaFilms: Array<Film> = [];
        allFilmsRetrieved.map((film: Film) => {
          const indexOf = film.gender.indexOf('drama');
          if (indexOf !== -1) dramaFilms.push(film);
        });
        this.dramaFilms = dramaFilms;

        let actionFilms: Array<Film> = [];
        allFilmsRetrieved.map((film: Film) => {
          const indexOf = film.gender.indexOf('action');
          if (indexOf !== -1) actionFilms.push(film);
        });
        this.actionFilms = actionFilms;
      });
  }

  //This function is used to add or delete a film from the list of favourites (using the button each one of them has).
  handleFavSelected(ytIdSelected: string): void {
    this.handleFavFilmsService
      .handleFavFilms(ytIdSelected, this.profileSelected)
      .then((userUpdatedFilms) => {
        this.favListFeedingService.setFavList(userUpdatedFilms);
      });
  }

  //This function is used to play the film selected.
  filmSelected(filmId: string): void {
    this.router.navigate([`player/${filmId}`]);
  }

  //This function is used to log out.
  logOut(): void {
    delete sessionStorage.token;
    window.location.reload();
  }
}
