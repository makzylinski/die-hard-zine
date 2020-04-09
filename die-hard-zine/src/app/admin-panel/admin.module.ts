import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { InterviewsEditComponent } from './interviews-edit/interviews-edit.component';
import { EventReportsEditComponent } from './event-reports-edit/event-reports-edit.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { ReviewsEditComponent } from './reviews-edit/reviews-edit.component';
import { PatronageEditComponent } from './patronage-edit/patronage-edit.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageContentComponent } from './shared/page-content/page-content.component';
import { NewArticleComponent } from './new-article/new-article.component';

@NgModule({
    declarations: [
        AdminPanelComponent,
        LoginComponent,
        SidebarComponent,
        InterviewsEditComponent,
        EventReportsEditComponent,
        NewsEditComponent,
        ReviewsEditComponent,
        PatronageEditComponent,
        ArticlesListComponent,
        ModalComponent,
        PageContentComponent,
        NewArticleComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        AdminPanelComponent,
        LoginComponent
    ]
})

export class AdminModule {}
