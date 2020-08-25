import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.sass'],
})
export class RegisterUserComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(event) {
    event.preventDefault();

    let { name, surname, email, password } = event.target;

    name = name.value;
    surname = surname.value;
    email = email.value;
    password = password.value;

    this.http
      .post(`http://localhost:3000/users`, {
        name,
        surname,
        email,
        password,
      })
      .toPromise()
      .catch((error) => console.log(error))
      .then((response) => {
        if (response) {
          this.router.navigate(['authenticate']);
        }
      });
  }
}
