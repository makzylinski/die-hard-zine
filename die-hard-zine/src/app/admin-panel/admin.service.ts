import { Injectable } from '@angular/core';

import { InterviewService } from '../interview/interview.service';
import { NewsService } from '../news/news.service';
import { ReviewsService } from '../reviews/reviews.service';
import { EventReportService } from '../event-reports/event-report.service';
import { PatronageService } from '../patronage/patronage.service';

@Injectable({providedIn: 'root'})

export class AdminService {

    constructor(private interviewService: InterviewService,
                private newsService: NewsService,
                private reviewsService: ReviewsService,
                private eventReportsService: EventReportService,
                private patronageService: PatronageService) {}

    getArticle(article: string) {
        switch (article) {
            case 'interviews':
                return this.interviewService.interviews.slice();

            case 'news':
                return this.newsService.news.slice();

            case 'reviews':
                return this.reviewsService.reviews.slice();

            case 'event-reports':
                return this.eventReportsService.eventReports.slice();

            case 'patronage':
                return this.patronageService.patronages.slice();

            default:
                return;
        }
    }

    deleteArticle(id: number, articleSection: string) {
        console.log(id + articleSection);
        switch (articleSection) {
            case 'interviews':
                return this.interviewService.deleteInterview(id);

            case 'news':
                return this.newsService.deleteNews(id);

            case 'reviews':
                return this.reviewsService.deleteReview(id);

            case 'event-reports':
                return this.eventReportsService.deleteReport(id);

            case 'patronage':
                return this.patronageService.deletePatronage(id);

            default:
                return;
        }
    }

}
