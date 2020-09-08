import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  constructor(private http: HttpClient) {}

  //This function recieves the info of the new user, and sends it to the API using the HttpClient from Angular. After this it returns the response form the server (If the promise doesn't catch any error).
  public async postUser(
    nick: string,
    email: string,
    password: string,
    character: string
  ): Promise<any> {
    return this.http
      .post(`${environment.apiUrl}/users`, {
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
