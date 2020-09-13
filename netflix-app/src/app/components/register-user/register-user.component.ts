import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserService } from '../../services/User/register-user.service';
// import bcryptjs from 'bcryptjs';
import validateEmail from '../../utils/email-validation';
import { hash } from '../../utils/password-encrypt';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: [
    './register-user.component.sass',
    '../../global-style-sheets/forms.sass',
    '../../global-style-sheets/landing-elements.sass',
  ],
})
export class RegisterUserComponent implements OnInit {
  //We declare the global properties of this class.
  character: string;
  errorFeedback: string;

  //We declare the angular services we are gonna use.
  constructor(
    private router: Router,
    private registerUserService: RegisterUserService
  ) {}

  ngOnInit(): void {}

  //This function below is gonna be executed when the user completes the register form and submits. After validating the inputs, we call the function from the register service to post this new user.
  async onSubmit(event) {
    event.preventDefault();

    let character: string = this.character;

    let nick: string = event.target.nick.value;
    let email: string = event.target.email.value;
    let password: string = event.target.password.value;
    let passwordVerify: string = event.target.passwordVerify.value;

    let emailValidation: boolean = validateEmail(email);

    if (password === passwordVerify && emailValidation) {
      password = hash(password);

      this.registerUserService
        .postUser(nick, email, password, character)
        .then((response) => {
          if (response.error) this.errorFeedback = response.error;
          else this.router.navigate(['authenticate']);
        });
    } else if (!emailValidation) {
      this.errorFeedback = 'Este email no existe';
    } else {
      this.errorFeedback = 'Las contraseñas introducidas no coinciden';
    }
  }
}
