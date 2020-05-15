import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../news/news.service';
import { ReviewsService } from '../reviews/reviews.service';
import { InterviewService } from '../interview/interview.service';

import { News } from '../news/news.model';
import { Review } from '../reviews/reviews.model';
import { Interview } from '../interview/interview.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: News[] = [];
  reviews: Review[] = [];
  interviews: Interview[] = []; // just for testing gonna change when api ready

  constructor(
    private newsService: NewsService,
    private reviewsService: ReviewsService,
    private interviewService: InterviewService,
    private router: Router) { }

  ngOnInit() {
    this.news = this.newsService.getNewsArray();
    this.reviews = this.reviewsService.getAllReviews();
    this.interviews = this.interviewService.getAllInterviews();
  }

}
