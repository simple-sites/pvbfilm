import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from '../config.service';

@Component({
  selector: "app-factory",
  templateUrl: "./factory.component.html",
  styleUrls: ["./factory.component.scss"]
})
export class FactoryComponent implements OnInit {
  factories = [
    {
      url: "assets/images/f1.jpg",
      title: "资质1",
    },
    {
      url: "assets/images/f2.jpg",
      title: "资质2",
    },
    {
      url: "assets/images/f3.png",
      title: "资质3",
    },
    {
      url: "assets/images/f4.jpg",
      title: "资质4",
    }
  ];
  url = "assets/api/factory";

  page = 1;
  total = 10;
  columns = 5;
  hash = "#";

  constructor(private route: ActivatedRoute, private config: ConfigService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const page = parseInt(param.get("page"), 10);
      this.page = page > 1 ? page : 1;

      this.config.request(this.url, (data: any) => {
        this.total = data.total;
        this.factories = data.factories;
      });
    });
  }

}
