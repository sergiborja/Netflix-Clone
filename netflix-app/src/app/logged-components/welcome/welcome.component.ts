import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { RetrieveUserService } from '../../services/retrieve-user.service';
import { AddAndGetMemberListService } from '../../services/add-and-get-member-list.service';
import { DeleteMemberService } from '../../services/delete-member.service';
import { Router } from '@angular/router';
import { UserMemberList } from 'src/app/utils/interfaces';

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

  constructor(
    private welcomeService: RetrieveUserService,
    private addAndGetMemberListService: AddAndGetMemberListService,
    private deleteMemberService: DeleteMemberService,
    private router: Router
  ) {}

  sendProfileSelected(profileSelected: string): void {
    this.router.navigate([`home/${profileSelected}`]);
  }

  deleteMemberSelected(memberToDelete: string): void {
    this.deleteMemberService
      .deleteMember(sessionStorage.token, memberToDelete)
      .then(() => {
        let filteredArray = this.memberList.filter(
          (member) => member.nick !== memberToDelete
        );
        this.memberList = filteredArray;
      });
  }

  onSubmitName(event): void {
    event.preventDefault();
    let nick: string = event.target.nick.value;
    let character: string = this.memberCharacter;

    const token: string = sessionStorage.token;
    this.addAndGetMemberListService
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
