import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-authenticate-user',
  templateUrl: './authenticate-user.component.html',
  styleUrls: ['./authenticate-user.component.sass'],
})
export class AuthenticateUserComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private router: Router,
    private authService: AuthenticateService
  ) {}

  errorFeedback: string;

  onSubmit(event): void {
    event.preventDefault();
    let email: string = event.target.email.value;
    let password: string = event.target.password.value;
    this.authService.getToken(email, password).then(({ token, error }) => {
      if (token) {
        sessionStorage.token = token;
        this.router.navigate(['welcome']);
      } else {
        this.errorFeedback = error;
      }
    });
  }
}
