import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.scss"]
})
export class NewsItemComponent implements OnInit {
  id = "";
  item;

  hash = "#";
  page = 1;

  url = "assets/api/item.json";


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.page = parseInt(param.get("page"), 10);
      this.id = param.get("id");
      this.http.get(this.url + "?id=" + this.id).subscribe((data: any) => {
        this.item = data;
      });
    });
  }

}
