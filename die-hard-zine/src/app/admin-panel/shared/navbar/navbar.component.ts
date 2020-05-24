import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hamNavToggle = false;

  constructor() { }

  ngOnInit() {
  }

  toggleHam(event) {
    this.hamNavToggle = event;
  }

}
