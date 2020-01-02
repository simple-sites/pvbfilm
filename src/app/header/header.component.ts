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
  faHome = faHome;
  faBookmark = faBookmark;
  constructor() { }

  ngOnInit() {
  }

}
