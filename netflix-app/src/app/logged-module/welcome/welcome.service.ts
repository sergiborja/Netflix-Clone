import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  profileSelected: string;
  loggedInSign: string;
  constructor() {}

  setProfileSelected(data: string) {
    this.profileSelected = data;
  }

  getProfileSelected() {
    return this.profileSelected;
  }
}
