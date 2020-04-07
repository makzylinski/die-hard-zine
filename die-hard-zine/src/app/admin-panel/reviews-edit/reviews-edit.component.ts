import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/reviews/reviews.service';
import { Review } from 'src/app/reviews/reviews.model';

@Component({
  selector: 'app-reviews-edit',
  templateUrl: './reviews-edit.component.html',
  styleUrls: ['./reviews-edit.component.scss']
})
export class ReviewsEditComponent implements OnInit {

  reviewsForm: FormGroup;
  reviewToEdit: Review;

  constructor(private route: ActivatedRoute,
              private reviewsService: ReviewsService) { }

  ngOnInit() {
    const routeId = this.route.snapshot.params.id;
    this.reviewToEdit = this.reviewsService.getSingleReview(routeId);

    this.reviewsForm = new FormGroup({
      id: new FormControl(this.reviewToEdit.id),
      date: new FormControl(this.reviewToEdit.date),
      author: new FormControl(this.reviewToEdit.author, Validators.required),
      headline: new FormControl(this.reviewToEdit.headline, Validators.required),
      content: new FormControl(this.reviewToEdit.content, Validators.required),
      photo: new FormControl(this.reviewToEdit.photoUrl, Validators.required),
    });
  }

  onSubmit() {
    this.reviewsService.updateReview(this.route.snapshot.params.id, this.reviewsForm.value);
  }

}
