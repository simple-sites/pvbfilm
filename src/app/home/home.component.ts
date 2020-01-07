import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  products = [];
  news = [];
  newsUrl = "assets/api/news.json";
  productUrl = "assets/api/product.json";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.newsUrl).subscribe((data: any) => {
      this.news = data.news;
    });

    this.http.get(this.productUrl).subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
