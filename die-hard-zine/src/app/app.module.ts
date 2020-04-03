import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NewsComponent,
    ReviewsComponent,
    NewsDetailComponent,
    ReviewDetailComponent,
    AboutUsComponent,
    ContactComponent,
    InterviewComponent,
    InterviewDetailComponent,
    EventReportsComponent,
    EventReportDetailComponent,
    ConcertCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
