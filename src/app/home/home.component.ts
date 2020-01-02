import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productions = [
    {
      image: "/assets/images/roadmap/1.jpg",
      title: "PRODUCTS-T1",
      intro: "PRODUCTS-T1-INTRO",
      state: "PRODUCTS-STATE-DONE"
    },
    {
      image: "/assets/images/roadmap/2.jpg",
      title: "PRODUCTS-T2",
      intro: "PRODUCTS-T2-INTRO",
      state: "PRODUCTS-STATE-PROGRESSING"
    },
    {
      image: "/assets/images/roadmap/3.jpg",
      title: "PRODUCTS-T3",
      intro: "PRODUCTS-T3-INTRO",
      state: "PRODUCTS-STATE-PLANNED"
    },
    {
      image: "/assets/images/roadmap/4.jpg",
      title: "PRODUCTS-T4",
      intro: "PRODUCTS-T4-INTRO",
      state: "PRODUCTS-STATE-PLANNED"
    },
    {
      image: "/assets/images/roadmap/5.jpg",
      title: "PRODUCTS-T4",
      intro: "PRODUCTS-T4-INTRO",
      state: "PRODUCTS-STATE-PLANNED"
    }
  ];

  news = [
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    }
  ];
  constructor(
  ) {
  }
}
