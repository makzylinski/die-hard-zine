import { Component, OnInit } from '@angular/core';
import { EventReport } from '../event-report.model';
import { EventReportService } from '../event-report.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-report-detail',
  templateUrl: './event-report-detail.component.html',
  styleUrls: ['./event-report-detail.component.scss']
})
export class EventReportDetailComponent implements OnInit {

  currentEventDetail: EventReport;

  constructor(private eventReportService: EventReportService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentEventDetail = this.eventReportService.getEventReport(this.route.snapshot.params.id);
  }

}
