import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  private favList = new Subject();
  cast = this.favList.asObservable();
  setFavList(data) {
    this.favList.next(data);
  }

  retrieveProfileSelected(profileSelected: string): Promise<any> {
    return this.http
      .get(`http://localhost:3000/users/${profileSelected}`)
      .toPromise()
      .then((memberFound: any) => {
        return memberFound;
      });
  }
  retrieveAllFilms(): Promise<any> {
    return this.http
      .get(`http://localhost:3000/allFilms`)
      .toPromise()
      .then((allFilmsRetrieved: any) => {
        return allFilmsRetrieved;
      });
  }
  handleFavFilms(profileSelected: string, ytIdSelected: string): Promise<any> {
    return this.http
      .patch(`http://localhost:3000/users/handleFavs`, {
        nick: profileSelected,
        ytId: ytIdSelected,
      })
      .toPromise()
      .then((userUpdatedFilms: any) => {
        return userUpdatedFilms;
      });
  }
}
