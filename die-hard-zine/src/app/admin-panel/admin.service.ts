import { Injectable } from '@angular/core';

import { InterviewService } from '../client/interview/interview.service';
import { NewsService } from '../client/news/news.service';
import { ReviewsService } from '../client/reviews/reviews.service';
import { EventReportService } from '../client/event-reports/event-report.service';
import { PatronageService } from '../client/patronage/patronage.service';
import { Interview } from '../client/interview/interview.model';
import { EventReport } from '../client/event-reports/event-report.model';
import { News } from '../client/news/news.model';
import { Review } from '../client/reviews/reviews.model';
import { Patronage } from '../client/patronage/patronage.model';

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

    addNewArticle(typeArt: string, newArt: {author: string, headline: string, content: string, photoUrl: string}) {
        console.log(typeArt, newArt);

        switch (typeArt) {
            case 'interviews':
                const newInterview = new Interview(
                this.interviewService.interviews.length,
                new Date(),
                newArt.author,
                newArt.headline,
                newArt.content,
                newArt.photoUrl
              );

                return this.interviewService.addNewInterview(newInterview);

            case 'event-reports':
                const newEventReport = new EventReport(
                this.eventReportsService.eventReports.length,
                new Date(),
                newArt.author,
                newArt.headline,
                newArt.content,
                newArt.photoUrl
              );
                return this.eventReportsService.addNewEventReport(newEventReport);

            case 'news':
                const newNews = new News(
                this.newsService.news.length,
                new Date(),
                newArt.author,
                newArt.headline,
                newArt.content,
                newArt.photoUrl
                );
                return this.newsService.addNewNews(newNews);

            case 'reviews':
                const newReview = new Review(
                this.reviewsService.reviews.length,
                new Date(),
                newArt.author,
                newArt.headline,
                newArt.content,
                newArt.photoUrl
                );
                return this.reviewsService.addNewReview(newReview);

                case 'patronage':
                const newPatronage = new Patronage(
                this.patronageService.patronages.length,
                new Date(),
                newArt.author,
                newArt.headline,
                newArt.content,
                newArt.photoUrl
                );
                return this.patronageService.addNewPatronage(newPatronage); 
        }
    }

}
