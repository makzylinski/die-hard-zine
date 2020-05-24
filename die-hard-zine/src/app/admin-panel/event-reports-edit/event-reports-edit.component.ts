import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventReportService } from 'src/app/client/event-reports/event-report.service';
import { EventReport } from 'src/app/client/event-reports/event-report.model';

@Component({
  selector: 'app-event-reports-edit',
  templateUrl: './event-reports-edit.component.html',
  styleUrls: ['./event-reports-edit.component.scss']
})
export class EventReportsEditComponent implements OnInit {

  eventReportForm: FormGroup;
  eventReportToEdit: EventReport;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventReportService: EventReportService) { }

  ngOnInit() {
    const routeId = this.route.snapshot.params.id;
    this.eventReportToEdit = this.eventReportService.getEventReport(routeId);

    this.eventReportForm = new FormGroup({
      id: new FormControl(this.eventReportToEdit.id),
      date: new FormControl(this.eventReportToEdit.date),
      author: new FormControl(this.eventReportToEdit.author, Validators.required),
      headline: new FormControl(this.eventReportToEdit.headline, Validators.required),
      content: new FormControl(this.eventReportToEdit.content, Validators.required),
      photo: new FormControl(this.eventReportToEdit.photoUrl, Validators.required),
    });
  }

  onSubmit() {
    this.eventReportService.updateEventReport(this.route.snapshot.params.id, this.eventReportForm.value);
  }

}
