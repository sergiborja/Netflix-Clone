import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent implements OnInit {
  @Input() displayAddMember: boolean;
  constructor(private http: HttpClient) {}

  onSubmitName(event) {
    event.preventDefault();
    let name: string = event.target.name.value;

    const token: string = sessionStorage.token;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };

    this.http
      .patch(`http://localhost:3000/users`, { name }, httpOptions)
      .toPromise()
      .catch((error) => console.log(error))
      .then(() => (this.displayAddMember = false));
  }

  ngOnInit() {}
}
