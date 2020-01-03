import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  faMapMarker,
  faFax,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {

  faMapMarker = faMapMarker;
  faFax = faFax;
  faPhone = faPhone;

  beian;
  company;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get("/assets/api/beian.json").subscribe((data) => {
      this.beian = data;
    });
    this.http.get("/assets/api/contact.json").subscribe((data) => {
      this.company = data;
    });
  }
}
