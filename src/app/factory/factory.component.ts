import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-factory",
  templateUrl: "./factory.component.html",
  styleUrls: ["./factory.component.scss"]
})
export class FactoryComponent implements OnInit {
  factories = [
    {
      url: "/assets/images/f1.jpg",
      title: "资质1",
    },
    {
      url: "/assets/images/f2.jpg",
      title: "资质2",
    },
    {
      url: "/assets/images/f3.png",
      title: "资质3",
    },
    {
      url: "/assets/images/f4.jpg",
      title: "资质4",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
