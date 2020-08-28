import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  private favList = new BehaviorSubject<any>('');
  cast = this.favList.asObservable();
  setTry(data) {
    this.favList.next(data);
  }
}
