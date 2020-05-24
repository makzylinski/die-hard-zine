import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  pages: {name: string, route: string}[] = [
    { name: 'Wywiady', route: 'interviews' },
    { name: 'Relacje', route: 'event-reports'},
    { name: 'News', route: 'news'},
    { name: 'Recenzje', route: 'reviews'},
    { name: 'Patronaty', route: 'patronage'},
    { name: 'Dodaj nowy artykuł', route: 'new'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  @Output() toggleNav = new EventEmitter<boolean>();

  onRedirect(route) {
    this.router.navigate(['/__admin-home', route]);
    this.toggleNav.emit(false);
  }

}
