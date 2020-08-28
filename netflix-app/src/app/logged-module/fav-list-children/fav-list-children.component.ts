import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-fav-list-children',
  templateUrl: './fav-list-children.component.html',
  styleUrls: ['./fav-list-children.component.sass'],
})
export class FavListChildrenComponent implements OnInit {
  favList;
  constructor(private homeService: HomeService, private http: HttpClient) {}

  ngOnInit() {
    this.homeService.cast.subscribe((data) => {
      if (data.length > 0) {
        this.http
          .post(`http://localhost:3000/favFilms`, { favList: data })
          .toPromise()
          .then((filmsInfo) => {
            this.favList = filmsInfo;
          });
      } else this.favList = data;
    });
  }
}
