import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RetrieveMemberService {
  favFilmsList: Array<string>;
  constructor(private http: HttpClient) {}
  private favList = new Subject();
  cast = this.favList.asObservable();
  setFavList(data) {
    this.favList.next(data);
  }
  async retrieveProfileSelected(profileSelected: string): Promise<any> {
    return this.http
      .get(`http://localhost:3000/members/${profileSelected}`)
      .toPromise()
      .then((memberFound: any) => {
        return memberFound;
      });
  }
}
