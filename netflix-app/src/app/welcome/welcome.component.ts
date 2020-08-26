import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WelcomeService } from './welcome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent implements OnInit {
  @Input() displayAddMember: boolean;
  @Input() memberList: any;
  @Input() adminName: String;

  constructor(
    private http: HttpClient,
    private service: WelcomeService,
    private router: Router
  ) {}

  sendProfileSelected(profileSelected: string) {
    this.service.setProfileSelected(profileSelected);
    this.router.navigate(['home']);
  }

  onSubmitName(event) {
    event.preventDefault();
    let nick: string = event.target.nick.value;

    const token: string = sessionStorage.token;

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };

    this.http
      .patch(`http://localhost:3000/users`, { nick }, httpOptions)
      .toPromise()
      .catch((error) => console.log(error))
      .then(() => {
        this.http
          .get(`http://localhost:3000/users`, httpOptions)
          .toPromise()
          .then((user: any) => {
            user
              ? (this.memberList = user.members)
              : console.log('USER NOT FOUND');
            console.log(this.memberList);
            this.displayAddMember = false;
          })
          .catch((error) => console.log(error));
      });
  }

  ngOnInit(): void {
    let token = sessionStorage.token;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    this.http
      .get(`http://localhost:3000/users`, httpOptions)
      .toPromise()
      .then((user: any) => {
        if (user) {
          console.log(user);
          this.memberList = user.members;
          this.adminName = user.nick;
        }
        this.displayAddMember = false;
      });
  }
}
