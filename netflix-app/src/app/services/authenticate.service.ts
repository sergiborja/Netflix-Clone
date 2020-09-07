import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}
  public async getToken(email: string, password: string): Promise<any> {
    return this.http
      .post(
        `http://localhost:3000/users/auth`,
        { email, password },
        { responseType: 'text' }
      )
      .toPromise()
      .then((token: string) => {
        if (token) {
          return { token: JSON.parse(token).token };
        }
      })
      .catch(({ error }) => {
        return { error: error };
      });
  }
}
