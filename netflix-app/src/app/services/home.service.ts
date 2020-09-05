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
