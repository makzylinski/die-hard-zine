import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin-panel/admin.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { InterviewComponent } from './interview/interview/interview.component';
import { InterviewDetailComponent } from './interview/interview-detail/interview-detail.component';
import { EventReportsComponent } from './event-reports/event-reports/event-reports.component';
import { EventReportDetailComponent } from './event-reports/event-report-detail/event-report-detail.component';
import { ConcertCalendarComponent } from './concert-calendar/concert-calendar/concert-calendar.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ReviewsComponent } from './reviews/reviews/reviews.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { NewsComponent } from './news/news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { PageContentComponent } from './shared/page-content/page-content.component';
import { PatronageComponent } from './patronage/patronage/patronage.component';
import { PatronageDetailComponent } from './patronage/patronage-detail/patronage-detail.component';
import { SliderComponent } from './partials/slider/slider/slider.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactComponent,
    InterviewComponent,
    InterviewDetailComponent,
    EventReportsComponent,
    EventReportDetailComponent,
    ConcertCalendarComponent,
    PageNotFoundComponent,
    SidebarComponent,
    ReviewsComponent,
    ReviewDetailComponent,
    NewsComponent,
    NewsDetailComponent,
    PageContentComponent,
    PatronageComponent,
    PatronageDetailComponent,
    SliderComponent,
    RecentActivityComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
