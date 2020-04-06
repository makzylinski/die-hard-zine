import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  pages: {name: string, route: string}[] = [
    { name: 'Interviews', route: 'interviews' },
    { name: 'Event Reports', route: 'event-reports'},
    { name: 'News', route: 'news'},
    { name: 'Reviews', route: 'reviews'},
    { name: 'Patronage', route: 'patronage'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToSection(route: string) {
    console.log(route);
  }

}
