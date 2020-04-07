import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  modalFired = false;
  inputId: number;

  constructor(private route: ActivatedRoute,
              private adminService: AdminService,
              private router: Router) { }

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
    const activeRoute = this.route.snapshot.params.name;
    this.router.navigate(['__admin/' + activeRoute + '-edit/' + article.id]);
  }

  onDelete(id: number) {
    console.log(id);
    this.inputId = id;
    this.modalFired = true;
  }

  onDeleteItemModal() {
    this.articles = this.adminService.getArticle(this.route.snapshot.params.name);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
