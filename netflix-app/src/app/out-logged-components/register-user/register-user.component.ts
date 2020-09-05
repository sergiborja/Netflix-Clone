import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserService } from '../../services/register-user.service';
import * as bcrypt from 'bcryptjs';
import validateEmail from '../../utils/email-validation';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.sass'],
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

  //This function beloww is gonna be executed when the user completes the register form and submits. After validating the inputs, we call the function from the register service to post this new user.
  async onSubmit(event) {
    event.preventDefault();

    let character: string = this.character;

    let nick = event.target.nick.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let passwordVerify = event.target.passwordVerify.value;

    let emailValidation: boolean = validateEmail(email);

    //If the passwords match, we encrypt the password so it's not readable when we send it to the server.
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
