import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

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

  constructor(
    private service: HomeService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const [, profileSelected] = this.router.url.split('/home/');
    this.http
      .get(`http://localhost:3000/users/${profileSelected}`)
      .toPromise()
      .then((memberFound: any) => {
        if (memberFound) {
          this.profileSelected = memberFound.nick;
          this.favList = memberFound.films;
          this.service.setTry(this.favList);
          this.http
            .get(`http://localhost:3000/allFilms`)
            .toPromise()
            .then((allFilmsRetrieved: Array<expectedBody>) => {
              this.allFilms = allFilmsRetrieved;
            });
        }
      });
  }

  handleFavSelected(ytIdSelected: string, profileSelected: string) {
    this.http
      .patch(`http://localhost:3000/users/handleFavs`, {
        nick: profileSelected,
        ytId: ytIdSelected,
      })
      .toPromise()
      .catch((error) => console.log(error))
      .then((userUpdatedFilms: any) => {
        this.service.setTry(userUpdatedFilms);
      });
  }

  filmSelected(filmId: string) {
    this.router.navigate([`demo/${filmId}`]);
  }
}
