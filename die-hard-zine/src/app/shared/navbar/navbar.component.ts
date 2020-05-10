import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  hamVisible = false;
  subpages: Array<{name: string, path: string}> = [
    { name: 'Newsy', path: '/news' },
    { name: 'Recenzje', path: '/reviews' },
    { name: 'Relacje', path: '/event-reports' },
    { name: 'Patronaty', path: '/patronage' },
    { name: 'Wywiady', path: '/interview' },
    { name: 'O nas', path: '/about' },
    { name: 'Kontakt', path: '/contact' }
  ];

  constructor() { }

  toggleHamNav() {
    this.hamVisible = !this.hamVisible;
  }

}
