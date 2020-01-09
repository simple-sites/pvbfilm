import { Component, AfterViewInit } from "@angular/core";

import {
  faWeixin,
  faQq,
  faWeibo
} from "@fortawesome/free-brands-svg-icons";
import {
  faFax,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

declare var $: any;


@Component({
  selector: "app-floating-bar",
  templateUrl: "./floating-bar.component.html",
  styleUrls: ["./floating-bar.component.scss"]
})
export class FloatingBarComponent implements AfterViewInit {

  faFax = faFax;
  faPhone = faPhone;
  faWeixin = faWeixin;
  faQq = faQq;
  faWeibo = faWeibo;

  shops = [
    {
      name: "阿里巴巴",
      icon: "assets/images/alibaba-512.png",
      url: "https://www.alibaba.com"
    },
    {
      name: "天猫商城",

      icon: "assets/images/tianmao.png",
      url: "https://www.tmall.com"
    }, {
      name: "淘宝商城",

      icon: "assets/images/taobao.jpg",
      url: "https://www.taobao.com"
    }, {
      name: "亚马逊",
      icon: "assets/images/amazon.png",
      url: "https://www.amazon.com"
    }
  ];

  tools = [
    {
      title: "QQ聊天",
      icon: faQq,
      class: "text-primary",
      tip: "<img src=\"assets/images/social/weixin.jpg\" />",
      url: ""
    },
    {
      title: "微信聊天",
      class: "text-success",
      icon: faWeixin,
      tip: "<img src=\"assets/images/social/weixin.jpg\" />",
      url: ""
    },
    {
      title: "微博关注",
      class: "text-danger",

      icon: faWeibo,
      tip: "<img src=\"assets/images/social/weixin.jpg\" />",
      url: "",
    },
    {
      title: "电话直拔",
      class: "text-second",

      icon: faPhone,
      tip: "+86 013582735228",
      url: "tel:+86 013582735228"
    },
    {
      title: "传真资料",
      class: "text-warning",

      icon: faFax,
      tip: "+86 013582735228",
      url: "fax:+86 013582735228"
    },
    {
      title: "天眼查",

      image: "assets/images/tianyancha.jpeg",
      url: "https://www.tianyancha.com/company/1320234911"
    }];

  tip = "<img src=\"assets/images/social/weixin.jpg\" />";
  tainyanchaIcon = "assets/images/tianyancha.jpeg";
  tianyancha = "https://www.tianyancha.com/company/1320234911";

  constructor() {

  }

  ngAfterViewInit() {
    console.log("inited");
    $("[data-toggle=\"tooltip\"]").tooltip({
      animated: "fade",
      placement: "left",
      html: true
    }
    );
  }

}
