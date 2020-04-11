import { Component, OnInit } from '@angular/core';
import { Interview } from '../interview.model';
import { InterviewService } from '../interview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  interviews: Interview[] = [];

  constructor(private interviewService: InterviewService,
              private router: Router) {}

  ngOnInit() {
    this.interviews = this.interviewService.interviews;
  }

  goToInterview(id: number) {
    console.log(id);
    this.router.navigate(['/interview/' + id]);
  }

}
