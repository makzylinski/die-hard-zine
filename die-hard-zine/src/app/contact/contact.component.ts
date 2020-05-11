import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      message: new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);

    this.http.post('http://localhost:3000/api/posts', this.contactForm.getRawValue())
    .subscribe(resp => {
      console.log(resp);
    })
  }

  onFetch() {
    this.http.get('http://localhost:3000/api/posts')
    .subscribe(resp => {
      console.log(resp);
    })
  }

}
