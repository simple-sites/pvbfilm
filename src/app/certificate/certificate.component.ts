import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-certificate",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.scss"]
})
export class CertificateComponent implements OnInit {

  certificates = [
    {
      url: "/assets/images/zs1.jpg",
      title: "资质1",
    },
    {
      url: "/assets/images/zs2.jpg",
      title: "资质2",
    },
    {
      url: "/assets/images/zs4.jpg",
      title: "资质3",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
