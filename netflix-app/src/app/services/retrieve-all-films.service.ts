import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RetrieveAllFilmsService {
  constructor(private http: HttpClient) {}

  async retrieveAllFilms(): Promise<any> {
    return this.http
      .get(`http://localhost:3000/films`)
      .toPromise()
      .then((allFilmsRetrieved: any) => {
        return allFilmsRetrieved;
      });
  }
}
