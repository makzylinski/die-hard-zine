import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  hamNavToggle = false;
  innerWidth: any;

  constructor() { }

  toggleHam(event) {
    this.hamNavToggle = event;
  }

}
