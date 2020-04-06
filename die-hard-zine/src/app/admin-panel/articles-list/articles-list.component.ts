import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnDestroy {

  paramsSub: Subscription;
  article;

  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(
      (params: Params) => {
        this.article = this.adminService.getArticle(params.name);
        console.log(this.article);
      }
    );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
