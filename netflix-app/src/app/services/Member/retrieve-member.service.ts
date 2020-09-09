import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RetrieveMemberService {
  constructor(private http: HttpClient) {}

  async retrieveProfileSelected(profileSelected: string): Promise<any> {
    return this.http
      .get(`${environment.apiUrl}/members/${profileSelected}`)
      .toPromise()
      .then((memberFound: any) => {
        return memberFound;
      });
  }
}
