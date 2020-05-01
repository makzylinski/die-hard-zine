import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  hamVisible = false;

  constructor() { }

  toggleHamNav() {
    this.hamVisible = !this.hamVisible;
  }

}
