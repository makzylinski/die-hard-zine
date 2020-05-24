import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hamNav = false;
  constructor() { }

  ngOnInit() {
  }

  testuj(event) {
    this.hamNav = event;
  }

}
