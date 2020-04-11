import { Component, OnInit } from '@angular/core';
import { Patronage } from '../patronage.model';
import { PatronageService } from '../patronage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patronage-detail',
  templateUrl: './patronage-detail.component.html',
  styleUrls: ['./patronage-detail.component.scss']
})
export class PatronageDetailComponent implements OnInit {

  currentPatronageDetail: Patronage;

  constructor(private patronageService: PatronageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPatronageDetail = this.patronageService.getSinglePatronage(this.route.snapshot.params.id);
  }

}
