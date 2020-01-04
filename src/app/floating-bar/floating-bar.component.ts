import { Component, OnInit } from "@angular/core";

import {
  faWeixin,
  faQq,
  faWeibo
} from "@fortawesome/free-brands-svg-icons";
import {
  faFax,
  faPhone
} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: "app-floating-bar",
  templateUrl: "./floating-bar.component.html",
  styleUrls: ["./floating-bar.component.scss"]
})
export class FloatingBarComponent implements OnInit {

  faFax = faFax;
  faPhone = faPhone;
  faWeixin = faWeixin;
  faQq = faQq;
  faWeibo = faWeibo;

  alibabaIcon = "/assets/images/alibaba-512.png";
  tianmaoIcon = "/assets/images/tianmao.png";
  taobaoIcon = "/assets/images/taobao.jpg";
  amazonIcon = "/assets/images/amazon.png";

  tainyanchaIcon = "/assets/images/tianyancha.jpeg";
  tianyancha = "https://www.tianyancha.com/company/1320234911";

  constructor() { }

  ngOnInit() {
  }

}
