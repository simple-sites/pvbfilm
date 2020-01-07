import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  url = "assets/api/product.json";

  page = 1;
  total = 10;
  columns = 5;
  hash = "#";

  products = [
  ];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const page = parseInt(param.get("page"), 10);
      this.page = page > 1 ? page : 1;

      this.http.get(this.url).subscribe((data: any) => {
        this.total = data.total;
        this.products = data.products;
      });
    });
  }

}
