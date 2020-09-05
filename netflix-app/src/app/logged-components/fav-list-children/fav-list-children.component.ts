import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { RetrieveMemberService } from '../../services/retrieve-member.service';
import { HandleFavFilmsService } from '../../services/handle-fav-films.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Film } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-fav-list-children',
  templateUrl: './fav-list-children.component.html',
  styleUrls: ['./fav-list-children.component.sass'],
})
export class FavListChildrenComponent implements OnInit {
  favList: Array<Film>;
  profileSelected: string;
  constructor(
    private homeService: HomeService,
    private retrieveMemberService: RetrieveMemberService,
    private handleFavFilmsService: HandleFavFilmsService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.retrieveMemberService.cast.subscribe((data: any) => {
      if (data.length > 0) {
        this.http
          .post(`http://localhost:3000/films/favs`, { favList: data })
          .toPromise()
          .then((filmsInfo: Array<Film>) => {
            this.favList = filmsInfo;
          });
      } else this.favList = data;
    });
    const [, profileSelected] = this.router.url.split('/home/');
    this.profileSelected = profileSelected;
  }

  handleFavSelected(ytIdSelected: string, profileSelected: string): void {
    this.handleFavFilmsService
      .handleFavFilms(profileSelected, ytIdSelected)
      .then((userUpdatedFilms) => {
        this.retrieveMemberService.setFavList(userUpdatedFilms);
      });
  }
}
