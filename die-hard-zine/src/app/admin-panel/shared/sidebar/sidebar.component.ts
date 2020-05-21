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
    { name: 'Patronage', route: 'patronage'},
    { name: 'Add new article', route: 'new'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onRedirect(route) {
    console.log(route);
    this.router.navigate(['/__admin-home', route]);
  }

}
