import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  url = "assets/api/news.json";

  page = 1;
  total = 10;
  columns = 5;
  news = [];

  hash = "#";

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const page = parseInt(param.get("page"), 10);
      this.page = page > 1 ? page : 1;

      this.http.get(this.url).subscribe((data: any) => {
        this.total = data.total;
        this.news = data.news;
      });
    });
  }
}
