import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  public addAndGetMemberList(
    token: string,
    nick: string,
    character: string
  ): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http
      .patch(`http://localhost:3000/members`, { nick, character }, httpOptions)
      .toPromise()
      .then(() => {
        return this.http
          .get(`http://localhost:3000/users/single`, httpOptions)
          .toPromise()
          .then(({ members }: any) => {
            return { members: members };
          })
          .catch((error) => console.log('hola'));
      })
      .catch((error) => {
        return { error: error };
      });
  }

  public deleteMember(token: string, nick: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http
      .patch(`http://localhost:3000/members/delete-one`, { nick }, httpOptions)
      .toPromise()
      .then((response) => {})
      .catch((error) => console.log(error));
  }

  public retrieveUser(token: string): Promise<any> {
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
