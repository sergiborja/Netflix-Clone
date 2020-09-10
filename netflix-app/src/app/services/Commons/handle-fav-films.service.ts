import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class HandleFavFilmsService {
  constructor(private http: HttpClient) {}

  async handleFavFilms(ytIdSelected: string, nick: string): Promise<any> {
    return this.http
      .patch(`${environment.apiUrl}/users/fav-films`, {
        ytId: ytIdSelected,
        nick,
      })
      .toPromise()
      .then((userUpdatedFilms: any) => {
        return userUpdatedFilms;
      });
  }
}
