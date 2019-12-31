import { Component, OnInit } from '@angular/core';

import {
  faWeixin,
  faQq,
  faWeibo
} from '@fortawesome/free-brands-svg-icons';
import {
  faFax,
  faPhone
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-floating-bar',
  templateUrl: './floating-bar.component.html',
  styleUrls: ['./floating-bar.component.scss']
})
export class FloatingBarComponent implements OnInit {

  faFax = faFax;
  faPhone = faPhone;
  faWeixin = faWeixin;
  faQq = faQq;
  faWeibo = faWeibo;

  constructor() { }

  ngOnInit() {
  }

}
