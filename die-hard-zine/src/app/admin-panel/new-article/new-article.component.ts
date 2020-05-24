import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  newForm: FormGroup;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.newForm = new FormGroup({
      articleType: new FormControl(null, Validators.required),
      id: new FormControl(null),
      date: new FormControl(null),
      author: new FormControl(null, Validators.required),
      headline: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const articleType = this.newForm.value.articleType;
    const newArticle = {
      author: this.newForm.value.author,
      headline: this.newForm.value.headline,
      content: this.newForm.value.content,
      photoUrl: this.newForm.value.photo
    };
    this.adminService.addNewArticle(articleType, newArticle);

  }
}
