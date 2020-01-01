import { Component, OnInit } from '@angular/core';
import {
  faMapMarker,
  faFax,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faMapMarker = faMapMarker;
  faFax = faFax;
  faPhone = faPhone;

  beian = {
    code: "33102302000027",
    authority: "浙公网安备"
  };

  constructor() { }

  ngOnInit() {
  }

}
