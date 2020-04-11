import { Component, OnInit } from '@angular/core';
import { Review } from '../reviews.model';
import { ReviewsService } from '../reviews.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {

  currentReviewDetail: Review;

  constructor(private reviewsService: ReviewsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentReviewDetail = this.reviewsService.getSingleReview(this.route.snapshot.params.id);
  }

}
