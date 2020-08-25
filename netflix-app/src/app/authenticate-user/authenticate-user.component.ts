import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-authenticate-user',
  templateUrl: './authenticate-user.component.html',
  styleUrls: ['./authenticate-user.component.sass'],
})
export class AuthenticateUserComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private http: HttpClient, private router: Router) {}

  user: User;

  onSubmit(event) {
    debugger;
    event.preventDefault();
    let email: string = event.target.email.value;
    let password: string = event.target.password.value;

    this.http
      .post(
        `http://localhost:3000/user`,
        { email, password },
        { responseType: 'text' }
      )
      .toPromise()
      .catch((error) => console.log(error))
      .then((token) => {
        if (token) {
          sessionStorage.token = token;
          this.router.navigate(['welcome']);
        }
      });
  }
}
