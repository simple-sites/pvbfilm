import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productions = [
    {
      image: "assets/images/roadmap/1.jpg",
      title: "PRODUCTS-T1",
      intro: "PRODUCTS-T1-INTRO",
      state: "PRODUCTS-STATE-DONE"
    },
    {
      image: "assets/images/roadmap/2.jpg",
      title: "PRODUCTS-T2",
      intro: "PRODUCTS-T2-INTRO",
      state: "PRODUCTS-STATE-PROGRESSING"
    },
    {
      image: "assets/images/roadmap/3.jpg",
      title: "PRODUCTS-T3",
      intro: "PRODUCTS-T3-INTRO",
      state: "PRODUCTS-STATE-PLANNED"
    },
    {
      image: "assets/images/roadmap/4.jpg",
      title: "PRODUCTS-T4",
      intro: "PRODUCTS-T4-INTRO",
      state: "PRODUCTS-STATE-PLANNED"
    },
    {
      image: "assets/images/roadmap/5.jpg",
      title: "PRODUCTS-T4",
      intro: "PRODUCTS-T4-INTRO",
      state: "PRODUCTS-STATE-PLANNED"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
