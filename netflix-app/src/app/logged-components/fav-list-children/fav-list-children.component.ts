import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-list-children',
  templateUrl: './fav-list-children.component.html',
  styleUrls: ['./fav-list-children.component.sass'],
})
export class FavListChildrenComponent implements OnInit {
  favList;
  profileSelected;
  constructor(
    private homeService: HomeService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.homeService.cast.subscribe((data: any) => {
      if (data.length > 0) {
        this.http
          .post(`http://localhost:3000/favFilms`, { favList: data })
          .toPromise()
          .then((filmsInfo) => {
            this.favList = filmsInfo;
          });
      } else this.favList = data;
    });
    const [, profileSelected] = this.router.url.split('/home/');
    this.profileSelected = profileSelected;
  }

  handleFavSelected(ytIdSelected: string, profileSelected: string) {
    this.homeService
      .handleFavFilms(profileSelected, ytIdSelected)
      .then((userUpdatedFilms) => {
        this.homeService.setFavList(userUpdatedFilms);
      });
  }
}
