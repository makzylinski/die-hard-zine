import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/news/news.model';
import { Review } from 'src/app/reviews/reviews.model';
import { Interview } from 'src/app/interview/interview.model';
import { EventReport } from 'src/app/event-reports/event-report.model';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {

  @Input() detail: News | Review | Interview | EventReport;

  constructor() { }

  ngOnInit() {
  }

}
