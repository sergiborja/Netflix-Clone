import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HandleDataService {
  constructor(private http: HttpClient) {}

  postUser() {
    return this.http.post(`http://localhost:3000/users`, {
      name: 'Sergi',
      surname: 'Borja',
      email: 'sergiborja055@gmail.com',
      password: '123123123',
    });
  }
}
