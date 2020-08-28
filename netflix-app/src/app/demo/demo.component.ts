import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass'],
})
export class DEMOComponent implements OnInit {
  filmSelected: String;
  constructor(private router: Router) {}

  ngOnInit() {
    [, this.filmSelected] = this.router.url.split('/demo/');
  }
}
