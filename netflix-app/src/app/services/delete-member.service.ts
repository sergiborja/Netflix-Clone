import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeleteMemberService {
  constructor(private http: HttpClient) {}

  public async deleteMember(token: string, nick: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http
      .patch(`http://localhost:3000/members/delete-one`, { nick }, httpOptions)
      .toPromise()
      .catch((error) => {
        return { error: error };
      });
  }
}
