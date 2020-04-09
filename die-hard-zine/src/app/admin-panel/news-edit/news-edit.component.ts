import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news/news.service';
import { News } from 'src/app/news/news.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  newsForm: FormGroup;
  newsToEdit: News;

  constructor(private route: ActivatedRoute,
              private newsService: NewsService) { }

  ngOnInit() {
    const routeId = this.route.snapshot.params.id;
    this.newsToEdit = this.newsService.getSingleNews(routeId);

    this.newsForm = new FormGroup({
      id: new FormControl(this.newsToEdit.id),
      date: new FormControl(this.newsToEdit.date),
      author: new FormControl(this.newsToEdit.author, Validators.required),
      headline: new FormControl(this.newsToEdit.headline, Validators.required),
      content: new FormControl(this.newsToEdit.content, Validators.required),
      photo: new FormControl(this.newsToEdit.photoUrl, Validators.required),
    });
  }

  onSubmit() {
    this.newsService.updateNews(this.route.snapshot.params.id, this.newsForm.value);
  }

}
