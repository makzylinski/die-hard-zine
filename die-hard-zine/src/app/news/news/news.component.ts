import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.news = this.newsService.getNewsArray();
    console.log(this.newsService.getNewsArray());
  }

  goToNews(news) {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      }
    )
  }

}
