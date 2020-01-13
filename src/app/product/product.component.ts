import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from '../config.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  url = "assets/api/product";

  page = 1;
  total = 10;
  columns = 5;
  hash = "#";

  products = [
  ];

  constructor(private route: ActivatedRoute, private config: ConfigService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const page = parseInt(param.get("page"), 10);
      this.page = page > 1 ? page : 1;

      this.config.request(this.url, (data: any) => {
        this.total = data.total;
        this.products = data.products;
      });
    });
  }

}
