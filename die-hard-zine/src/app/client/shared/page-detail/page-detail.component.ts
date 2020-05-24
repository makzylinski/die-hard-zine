import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/client/news/news.model';
import { Review } from 'src/app/client/reviews/reviews.model';
import { Interview } from 'src/app/client/interview/interview.model';
import { EventReport } from 'src/app/client/event-reports/event-report.model';

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
