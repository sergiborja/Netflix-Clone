import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  profileSelected;
  helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  private favList = new Subject();
  cast = this.favList.asObservable();
  setFavList(data) {
    this.favList.next(data);
  }

  retrieveProfileSelected(profileSelected: string): Promise<any> {
    return this.http
      .get(`http://localhost:3000/members/${profileSelected}`)
      .toPromise()
      .then((memberFound: any) => {
        return memberFound;
      });
  }
  retrieveAllFilms(): Promise<any> {
    return this.http
      .get(`http://localhost:3000/films`)
      .toPromise()
      .then((allFilmsRetrieved: any) => {
        console.log(allFilmsRetrieved);
        return allFilmsRetrieved;
      });
  }
  handleFavFilms(token: string, ytIdSelected: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http
      .patch(
        `http://localhost:3000/users/fav-films`,
        { ytId: ytIdSelected },
        httpOptions
      )
      .toPromise()
      .then((userUpdatedFilms: any) => {
        return userUpdatedFilms;
      });
  }

  getProfileSelected() {
    return this.profileSelected;
  }

  setProfileSelected(profileSelected) {
    this.profileSelected = profileSelected;
  }

  validateToken(token: string) {
    try {
      const validToken: any = !this.helper.isTokenExpired(token);
      if (validToken) return true;
      else return false;
    } catch (error) {
      if (error) return false;
    }
  }
}
