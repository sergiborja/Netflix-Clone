import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  public getMemberList(
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
      .patch(`http://localhost:3000/users`, { nick, character }, httpOptions)
      .toPromise()
      .catch((error) => console.log(error))
      .then(() => {
        return this.http
          .get(`http://localhost:3000/users`, httpOptions)
          .toPromise()
          .then(({ members }: any) => {
            return members;
          })
          .catch((error) => console.log(error));
      });
  }

  public deleteMember(token: string, nick: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http
      .patch(`http://localhost:3000/users/delMember`, { nick }, httpOptions)
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
      .get(`http://localhost:3000/users`, httpOptions)
      .toPromise()
      .then((userRetrieved) => {
        return userRetrieved;
      });
  }
}
