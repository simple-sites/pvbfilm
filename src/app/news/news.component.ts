import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit() {
  }

}
