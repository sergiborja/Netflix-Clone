import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
}
