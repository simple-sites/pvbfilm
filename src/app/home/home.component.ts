import { Component, OnInit } from "@angular/core";
import { ConfigService } from '../config.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  products = [];
  news = [];
  newsUrl = "assets/api/news";
  productUrl = "assets/api/product";
  hash = "#";
  page = 1;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.config.request(this.newsUrl, (data: any) => {
      this.news = data.news;
    });

    this.config.request(this.productUrl, (data: any) => {
      this.products = data.products;
    });
  }
}
