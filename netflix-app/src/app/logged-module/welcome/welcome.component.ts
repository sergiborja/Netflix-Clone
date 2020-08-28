import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WelcomeService } from './welcome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent implements OnInit {
  @Input() displayAddMember: boolean;
  @Input() memberList: any;
  @Input() adminName: String;
  adminCharacter: string;
  memberCharacter: string;

  constructor(
    private http: HttpClient,
    private service: WelcomeService,
    private router: Router
  ) {}

  sendProfileSelected(profileSelected: string) {
    this.service.setProfileSelected(profileSelected);
    this.router.navigate([`home/${profileSelected}`]);
  }

  onSubmitName(event) {
    event.preventDefault();
    console.log(this.memberCharacter);
    let nick: string = event.target.nick.value;
    let character: string = this.memberCharacter;

    const token: string = sessionStorage.token;

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };

    this.http
      .patch(`http://localhost:3000/users`, { nick, character }, httpOptions)
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
          this.adminCharacter = user.character;
          this.memberList = user.members;
          this.adminName = user.nick;
          console.log(this.memberList);
        }
        this.displayAddMember = false;
      });
  }
}
