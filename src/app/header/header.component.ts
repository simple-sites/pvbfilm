import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = "assets/images/logo.png";
  faHome = faHome;
  faBookmark = faBookmark;
  constructor() { }

  ngOnInit() {
  }

}
