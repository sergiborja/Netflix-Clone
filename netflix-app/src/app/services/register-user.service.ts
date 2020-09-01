import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  constructor(private http: HttpClient) {}
  public postUser(nick, email, password, character): Promise<any> {
    return this.http
      .post(`http://localhost:3000/users`, {
        nick,
        email,
        password,
        character,
      })
      .toPromise()
      .then((status: any) => {
        return { status: status };
      })
      .catch(({ error }) => {
        return { error: error };
      });
  }
}
