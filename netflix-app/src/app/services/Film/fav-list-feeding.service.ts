import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavListFeedingService {
  constructor() {}

  favFilmsList: Array<string>;
  private favList = new Subject();
  cast = this.favList.asObservable();
  setFavList(data) {
    this.favList.next(data);
  }
}
