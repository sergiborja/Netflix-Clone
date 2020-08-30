import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { WelcomeService } from '../../services/welcome.service';
import { Router } from '@angular/router';
import { UserMemberList } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent implements OnInit {
  displayAddMember: boolean;
  memberList: Array<UserMemberList>;
  adminName: String;
  adminCharacter: string;
  memberCharacter: string;
  errorFeedback: string;

  constructor(private welcomeService: WelcomeService, private router: Router) {}

  sendProfileSelected(profileSelected: string): void {
    this.router.navigate([`home/${profileSelected}`]);
  }

  deleteMemberSelected(memberToDelete: string): void {
    this.welcomeService
      .deleteMember(sessionStorage.token, memberToDelete)
      .then(() => {
        let filteredArray = this.memberList.filter(
          (member) => member.nick !== memberToDelete
        );
        this.memberList = filteredArray;
        console.log(filteredArray);
      });
  }

  onSubmitName(event): void {
    event.preventDefault();
    let nick: string = event.target.nick.value;
    let character: string = this.memberCharacter;

    const token: string = sessionStorage.token;
    this.welcomeService
      .addAndGetMemberList(token, nick, character)
      .then(({ members, error }) => {
        if (error) this.errorFeedback = error.error;
        else {
          this.memberList = members;
          this.displayAddMember = false;
        }
      });
  }

  ngOnInit(): void {
    let token = sessionStorage.token;

    this.welcomeService.retrieveUser(token).then((user: any) => {
      if (user) {
        this.adminCharacter = user.character;
        this.memberList = user.members;
        this.adminName = user.nick;
        this.displayAddMember = false;
      }
    });
  }
}
