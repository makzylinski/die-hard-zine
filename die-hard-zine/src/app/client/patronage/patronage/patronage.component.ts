import { Component, OnInit } from '@angular/core';
import { Patronage } from '../patronage.model';
import { PatronageService } from '../patronage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patronage',
  templateUrl: './patronage.component.html',
  styleUrls: ['./patronage.component.scss']
})
export class PatronageComponent implements OnInit {

  patronages: Patronage[] = [];

  constructor(private patronageService: PatronageService,
              private router: Router) { }

  ngOnInit() {
    this.patronages = this.patronageService.patronages;
  }

  goToPatronage(id: number) {
    this.router.navigate(['patronage', id]);
  }

}
