import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {

  page = 1;
  limit = 10;
  total = 10;
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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const page = parseInt(param.get("page"), 10);
      this.page = page > 1 ? page : 1;
    });
  }

}
