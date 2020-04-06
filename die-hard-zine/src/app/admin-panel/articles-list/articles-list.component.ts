import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from './../admin.service';
import { EventReport } from 'src/app/event-reports/event-report.model';
import { Patronage } from 'src/app/patronage/patronage.model';
import { Interview } from 'src/app/interview/interview.model';
import { News } from 'src/app/news/news.model';
import { Review } from 'src/app/reviews/reviews.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnDestroy {

  paramsSub: Subscription;
  articles: EventReport[] | Patronage[] | Interview[] | News[] | Review[];

  constructor(private route: ActivatedRoute,
              private adminService: AdminService) { }

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(
      (params: Params) => {
        this.articles = this.adminService.getArticle(params.name);
        console.log(this.articles);
      }
    );
  }

  onEdit(article) {
    console.log(article);
  }

  onDelete(id: number) {
    console.log(id);
    console.log(this.route.snapshot.params.name);
    const paramsName = this.route.snapshot.params.name;
    this.adminService.deleteArticle(id, paramsName);
    this.articles = this.adminService.getArticle(paramsName);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
