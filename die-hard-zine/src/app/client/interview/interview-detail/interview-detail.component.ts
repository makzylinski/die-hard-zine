import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../interview.service';
import { Interview } from '../interview.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.scss']
})
export class InterviewDetailComponent implements OnInit {
  currentInterviewDetail: Interview;

  constructor(private interviewService: InterviewService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentInterviewDetail = this.interviewService.getInterview(this.route.snapshot.params.id);
  }

}
