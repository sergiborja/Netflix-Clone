import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RegisterUserService } from '../../services/register-user.service';
import * as bcrypt from 'bcryptjs';

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

  async onSubmit(event) {
    event.preventDefault();

    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let validation = re.test(String(email).toLowerCase());
      if (!validation) return false;
      const [, domain] = email.split('.');
      const posibleDomains = ['com', 'es', 'org', 'net', 'edu', 'mil'];
      for (var i = 0; i < posibleDomains.length; i++) {
        if (posibleDomains[i] !== domain) {
          validation = false;
        } else {
          validation = true;
          break;
        }
      }
      return validation;
    }

    let character: string = this.character;

    let { nick, email, password, passwordVerify } = event.target;

    nick = nick.value;
    email = email.value;
    password = password.value;
    passwordVerify = passwordVerify.value;
    let emailValidation: boolean = validateEmail(email);

    if (password === passwordVerify && emailValidation) {
      password = await bcrypt.hashSync(password, 10);

      this.registerUserService
        .postUser(nick, email, password, character)
        .then((response) => {
          if (response.error) this.errorFeedback = response.error;
          else this.router.navigate(['authenticate']);
        })
        .catch((error) => console.log(error));
    } else if (!emailValidation) {
      this.errorFeedback = 'Este email no existe';
    } else {
      this.errorFeedback = 'Las contraseñas introducidas no coinciden';
    }
  }
}
