import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'die-hard-zine';
  currRoute = null;

  constructor(private router: Router) {}

  checkRouteName() {
    console.log(this.router.url);
    this.currRoute = this.router.url;
  }
}
