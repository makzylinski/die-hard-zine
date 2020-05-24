import { Component, OnInit } from '@angular/core';
import { Review } from '../reviews.model';
import { ReviewsService } from '../reviews.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] = [];

  constructor(public reviewService: ReviewsService,
              public router: Router) { }

  ngOnInit() {
    this.reviews = this.reviewService.reviews;
  }

  goToReview(id: number) {
    this.router.navigate(['/reviews', id]);
  }

}
