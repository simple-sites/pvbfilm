import { Component, OnInit } from "@angular/core";
import { ConfigService } from '../config.service';
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
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.config.request("assets/api/beian", (data) => {
      this.beian = data;
    });
    this.config.request("assets/api/contact", (data) => {
      this.company = data;
    });
  }
}
