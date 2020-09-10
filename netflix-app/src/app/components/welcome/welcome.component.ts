import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { RetrieveUserService } from '../../services/User/retrieve-user.service';
import { AddAndGetMemberListService } from '../../services/Member/add-and-get-member-list.service';
import { DeleteMemberService } from '../../services/Member/delete-member.service';
import { Router } from '@angular/router';
import { UserMemberList } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [
    './welcome.component.sass',
    '../../global-style-sheets/forms.sass',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent implements OnInit {
  //We declare the global properties of this class.
  displayAddMember: boolean;
  memberList: Array<UserMemberList>;
  adminName: String;
  adminCharacter: string;
  memberCharacter: string;
  errorFeedback: string;

  //We declare the angular services we are gonna use.
  constructor(
    private welcomeService: RetrieveUserService,
    private addAndGetMemberListService: AddAndGetMemberListService,
    private deleteMemberService: DeleteMemberService,
    private router: Router
  ) {}

  //After the constructor is read, the ngOnInit is executed and it retrieves the info of the current admin so we can show his profiles.
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

  //This function is executed when the user selects one of the profiles, if the selected one is a member, an m:(memberSelected), otherwise, a:(adminSelected) will be added to the url so we navigate to this profile's films main page.
  sendProfileSelected(profileSelected: string): void {
    if (this.adminName === profileSelected)
      this.router.navigate([`home/a:${profileSelected}`]);
    else this.router.navigate([`home/m:${profileSelected}`]);
  }

  //This function is executed when the user decides to delete one of the profiles.
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

  //This function recieves the info of the new member the admin is adding and creates this new profile.
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
}
