import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
      .get(`http://localhost:3000/users/single`, httpOptions)
      .toPromise()
      .then((userRetrieved) => {
        return userRetrieved;
      });
  }
}
