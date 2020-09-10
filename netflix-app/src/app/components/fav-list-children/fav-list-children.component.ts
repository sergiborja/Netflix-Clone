import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HandleFavFilmsService } from '../../services/Commons/handle-fav-films.service';
import { FavListFeedingService } from '../../services/Film/fav-list-feeding.service';
import { RetrieveFavFilmsInfoService } from '../../services/Commons/retrieve-fav-films-info.service';
import { Router } from '@angular/router';
import { Film } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-fav-list-children',
  templateUrl: './fav-list-children.component.html',
  styleUrls: [
    './fav-list-children.component.sass',
    '../home/home.component.sass',
  ],
})
export class FavListChildrenComponent implements OnInit {
  //We declare the global properties of this class.
  favList: Array<Film>;
  profileSelected: string;

  //We declare the angular services we are gonna use.
  constructor(
    private handleFavFilmsService: HandleFavFilmsService,
    private favListFeedingService: FavListFeedingService,
    private retrieveFavFilmsInfoService: RetrieveFavFilmsInfoService,
    private router: Router
  ) {}

  //After the constructor is read, the ngOnInit is executed. The function inside is listening to the list of favourite films info, if it recieves new data, automatically uptades itself.
  ngOnInit(): void {
    this.favListFeedingService.cast.subscribe(async (data: Array<string>) => {
      if (data.length > 0) {
        this.retrieveFavFilmsInfoService
          .retrieveFavFilmsInfo(data)
          .then((filmsInfo: Array<Film>) => {
            this.favList = filmsInfo;
          });
      } else this.favList = [];
    });

    let profileSelected: string;

    [, profileSelected] = this.router.url.split('/home/a:');

    if (!profileSelected)
      [, profileSelected] = this.router.url.split('/home/m:');

    this.profileSelected = profileSelected;
  }

  //This function deletes a film from the list of favourites, recycling the handleFavFilms function.
  handleFavSelected(ytIdSelected: string): void {
    this.handleFavFilmsService
      .handleFavFilms(ytIdSelected, this.profileSelected)
      .then((userUpdatedFilms) => {
        this.favListFeedingService.setFavList(userUpdatedFilms);
      });
  }
}
