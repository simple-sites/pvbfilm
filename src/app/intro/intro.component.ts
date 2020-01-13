import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  url = "assets/api/intro";
  intro;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.config.request(this.url, (data: any) => {
      console.log(data);
      this.intro = data;
    });
  }
}
