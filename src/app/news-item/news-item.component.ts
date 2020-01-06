import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.scss"]
})
export class NewsItemComponent implements OnInit {
  item = {
    id: 1,
    url: "http://localhost:4200/#intro",
    title: "pvb的应用有那些？",
    content: "aaa",
    author: "admin",
    date: "2013-5-29"
  };
  constructor() { }

  ngOnInit() {
  }

}
