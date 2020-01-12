import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HttpClient } from '@angular/common/http';

import {
  faWeixin,
  faQq,
  faWeibo,
  faFacebook,
  faTelegram,
  faYoutube,
  faTwitter,
  faTwitch,
  faAdobe,
  faGoogle,
  faGithub,
  faAmazon,
  faAlipay,
  faAndroid,
  faApple
} from "@fortawesome/free-brands-svg-icons";
import {
  faFax,
  faPhone,
  fas
} from "@fortawesome/free-solid-svg-icons";

declare var $: any;


@Component({
  selector: "app-floating-bar",
  templateUrl: "./floating-bar.component.html",
  styleUrls: ["./floating-bar.component.scss"]
})
export class FloatingBarComponent implements OnInit, AfterViewInit {

  faFax = faFax;
  faPhone = faPhone;
  faWeixin = faWeixin;
  faQq = faQq;
  faWeibo = faWeibo;

  stores;
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


  url = "assets/api/stores.json";


  constructor(
    private http: HttpClient,
    private library: FaIconLibrary
  ) {
    library.addIconPacks(fas, fab);
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

  ngOnInit() {
    this.http.get(this.url).subscribe((data: any) => {
      this.stores = data;
    });
  }

  

}
