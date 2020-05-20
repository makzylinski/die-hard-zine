import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { PatronageEditComponent } from './patronage-edit/patronage-edit.component';
import { ReviewsEditComponent } from './reviews-edit/reviews-edit.component';
import { InterviewsEditComponent } from './interviews-edit/interviews-edit.component';
import { EventReportsEditComponent } from './event-reports-edit/event-reports-edit.component';
import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
    { path: '__admin', component: AdminPanelComponent},
    { path: '__admin-home', component: HomeComponent, children: [
        { path: 'new', component: NewArticleComponent},
        { path: ':name', component: ArticlesListComponent },
        { path: 'news-edit/:id', component: NewsEditComponent },
        { path: 'patronage-edit/:id', component: PatronageEditComponent },
        { path: 'reviews-edit/:id', component: ReviewsEditComponent },
        { path: 'interviews-edit/:id', component: InterviewsEditComponent },
        { path: 'event-reports-edit/:id', component: EventReportsEditComponent },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}
