import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome/welcome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private service: WelcomeService) {}
  profileSelected: string;
  ngOnInit(): void {
    this.profileSelected = this.service.getProfileSelected();
  }
}
