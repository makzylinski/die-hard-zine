import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news/news.component';
import { ReviewsComponent } from './reviews/reviews/reviews.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { InterviewComponent } from './interview/interview/interview.component';
import { InterviewDetailComponent } from './interview/interview-detail/interview-detail.component';
import { EventReportsComponent } from './event-reports/event-reports/event-reports.component';
import { EventReportDetailComponent } from './event-reports/event-report-detail/event-report-detail.component';
import { ConcertCalendarComponent } from './concert-calendar/concert-calendar/concert-calendar.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes = [
    { path: '', component: HomeComponent},
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    { path: 'reviews', component: ReviewsComponent, children: [
        { path: ':id', component: ReviewDetailComponent }
    ]},
    { path: 'interview', component: InterviewComponent, children: [
        { path: ':id', component: InterviewDetailComponent }
     ]},
    { path: 'event-reports', component: EventReportsComponent, children: [
        { path: ':id', component: EventReportDetailComponent}
    ]},
    { path: 'calendar', component: ConcertCalendarComponent },
    { path: 'about', component: AboutUsComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
