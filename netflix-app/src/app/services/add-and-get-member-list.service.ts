import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AddAndGetMemberListService {
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
      .patch(`${environment.apiUrl}/members`, { nick, character }, httpOptions)
      .toPromise()
      .then(() => {
        return this.http
          .get(`${environment.apiUrl}/users/single`, httpOptions)
          .toPromise()
          .then(({ members }: any) => {
            return { members: members };
          })
          .catch((error) => {
            return { error: error };
          });
      })
      .catch((error) => {
        return { error: error };
      });
  }
}
