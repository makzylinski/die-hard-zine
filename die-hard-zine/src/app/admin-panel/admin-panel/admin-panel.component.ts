import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      
    });
  }

  onLogin() {
    console.log('elo login')
  }

}
