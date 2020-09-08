import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RetrieveAllFilmsService {
  constructor(private http: HttpClient) {}

  async retrieveAllFilms(): Promise<any> {
    return this.http
      .get(`${environment.apiUrl}/films`)
      .toPromise()
      .then((allFilmsRetrieved: any) => {
        return allFilmsRetrieved;
      });
  }
}
