import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RegisterUserService } from '../../services/register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.sass'],
})
export class RegisterUserComponent implements OnInit {
  character: string;
  errorFeedback: string;

  constructor(
    private router: Router,
    private registerUserService: RegisterUserService
  ) {}

  ngOnInit(): void {}

  onSubmit(event) {
    event.preventDefault();

    let character: string = this.character;

    let { nick, email, password, passwordVerify } = event.target;

    nick = nick.value;
    email = email.value;
    password = password.value;
    passwordVerify = passwordVerify.value;

    if (password === passwordVerify) {
      this.registerUserService
        .postUser(nick, email, password, character)
        .then((response) => {
          console.log(response);
          if (response.error) this.errorFeedback = response.error;
          else this.router.navigate(['authenticate']);
        })
        .catch((error) => console.log(error));
    } else {
      this.errorFeedback = 'Las contraseñas introducidas no coinciden';
    }
  }
}
