import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Film } from '../../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RetrieveFavFilmsInfoService {
  constructor(private http: HttpClient) {}

  public async retrieveFavFilmsInfo(data): Promise<any> {
    return this.http
      .post(`${environment.apiUrl}/films/favs`, { favList: data })
      .toPromise()
      .then((filmsInfo: Array<Film>) => {
        return filmsInfo;
      });
  }
}
