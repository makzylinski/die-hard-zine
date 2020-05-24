import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  test = [
    {
      photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/24059497_1652681861469158_1809129677945362082_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=q6qEwNyNFc4AX_SSNTn&_nc_ht=scontent-waw1-1.xx&oh=3c4350a5bc5156b1461b315ced363c41&oe=5ED797E5',
      name: 'Max Rabid',
      role: 'CEO',
      info: 'Lubie walić browary z Sobalą'
    },
    {
      photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/69933517_2356890191013849_4623806832748527616_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=MoXaQPL2bnYAX-KtKtH&_nc_ht=scontent-waw1-1.xx&oh=82b7f7833604a6cabb42bdabb4c3f74f&oe=5ED62BAB',
      name: 'Sobala Dessecrator',
      role: 'CEO',
      info: 'Lubie walić browaty z Maksem'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
