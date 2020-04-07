import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterviewService } from 'src/app/interview/interview.service';
import { ActivatedRoute } from '@angular/router';
import { Interview } from 'src/app/interview/interview.model';

@Component({
  selector: 'app-interviews-edit',
  templateUrl: './interviews-edit.component.html',
  styleUrls: ['./interviews-edit.component.scss']
})
export class InterviewsEditComponent implements OnInit {

  interviewEditForm: FormGroup;
  interviewToEdit: Interview;

  constructor(private interviewService: InterviewService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const routeId = this.route.snapshot.params.id;
    this.interviewToEdit = this.interviewService.getInterview(routeId);

    this.interviewEditForm = new FormGroup({
      id: new FormControl(this.interviewToEdit.id),
      date: new FormControl(this.interviewToEdit.date),
      author: new FormControl(this.interviewToEdit.author, Validators.required),
      headline: new FormControl(this.interviewToEdit.headline, Validators.required),
      content: new FormControl(this.interviewToEdit.content, Validators.required),
      photo: new FormControl(this.interviewToEdit.photoUrl, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.interviewEditForm);
    this.interviewService.updateInterview(this.route.snapshot.params.id, this.interviewEditForm.value);
  }

}
