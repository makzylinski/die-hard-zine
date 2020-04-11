import { Component, OnInit } from '@angular/core';
import { EventReportService } from '../event-report.service';
import { EventReport } from '../event-report.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-reports',
  templateUrl: './event-reports.component.html',
  styleUrls: ['./event-reports.component.scss']
})
export class EventReportsComponent implements OnInit {

  events: EventReport[] = [];

  constructor(private eventReportService: EventReportService,
              private router: Router) { }

  ngOnInit() {
    this.events = this.eventReportService.eventReports;
  }

  goToEvent(id: number) {
    this.router.navigate(['event-reports', id]);
  }

}
