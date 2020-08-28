import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-fav-list-children',
  templateUrl: './fav-list-children.component.html',
  styleUrls: ['./fav-list-children.component.sass'],
})
export class FavListChildrenComponent implements OnInit {
  favList;
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.cast.subscribe((data) => (this.favList = data));
  }
}
