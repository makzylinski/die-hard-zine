import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Patronage } from 'src/app/client/patronage/patronage.model';
import { ActivatedRoute } from '@angular/router';
import { PatronageService } from 'src/app/client/patronage/patronage.service';

@Component({
  selector: 'app-patronage-edit',
  templateUrl: './patronage-edit.component.html',
  styleUrls: ['./patronage-edit.component.scss']
})
export class PatronageEditComponent implements OnInit {

  patronageForm: FormGroup;
  patronageToEdit: Patronage;

  constructor(private route: ActivatedRoute,
              private patronageService: PatronageService) { }

  ngOnInit() {
    const routeId = this.route.snapshot.params.id;
    this.patronageToEdit = this.patronageService.getSinglePatronage(routeId);

    this.patronageForm = new FormGroup({
      id: new FormControl(this.patronageToEdit.id),
      date: new FormControl(this.patronageToEdit.date),
      author: new FormControl(this.patronageToEdit.author, Validators.required),
      headline: new FormControl(this.patronageToEdit.headline, Validators.required),
      content: new FormControl(this.patronageToEdit.content, Validators.required),
      photo: new FormControl(this.patronageToEdit.photoUrl, Validators.required),
    });
  }

  onSubmit() {
    this.patronageService.updatePatronage(this.route.snapshot.params.id, this.patronageForm.value);
  }

}
