import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  currentNewsDetail: News;

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentNewsDetail = this.newsService.getSingleNews(this.route.snapshot.params.id );
    console.log(this.currentNewsDetail);
  }

}
