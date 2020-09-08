import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RetrieveUserService {
  constructor(private http: HttpClient) {}

  public async retrieveUser(token: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http
      .get(`${environment.apiUrl}/users/single`, httpOptions)
      .toPromise()
      .then((userRetrieved) => {
        return userRetrieved;
      });
  }
}
