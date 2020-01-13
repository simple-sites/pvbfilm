import { Component, OnInit, AfterViewInit } from "@angular/core";

import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

import { Title } from "@angular/platform-browser";
import { Router, NavigationStart } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

declare var particlesJS: any;
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
  supportedLanguages = ["en", "zh"];

  active = 0;

  // Company info
  name = "NAV-NAME";
  intro;
  url = "home";
  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private router: Router,
    private http: HttpClient,
    public config: ConfigService
  ) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get("TITLE").subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
    router.events.subscribe(event => {
      // console.log(event);
      if (event instanceof NavigationStart) {
        let tab = event.url.substr(1);
        tab = tab.split("/")[0];
        if (tab) {
          this.url = tab;
        }
      }
    });
  }
  getLocaleString() {
    let locale = navigator.language;
    if (this.supportedLanguages.indexOf(locale) !== -1) {
      return locale;
    }
    locale = locale.split("-")[0];
    if (this.supportedLanguages.indexOf(locale) !== -1) {
      return locale;
    }
    return "en";
  }

  setLocale(locale: string) {
    this.translate.setDefaultLang(locale);
    this.translate.use(locale);
    $("select").val(locale);
    $(".selectpicker").selectpicker("refresh");
    localStorage.setItem("locale", locale);
    this.config.language = locale;
  }

  ngAfterViewInit() {
    particlesJS.load("particles-js", "assets/particles.json", () => {
      // console.log("callback - particles.js config loaded");
    });
    $(".carousel").carousel({
      interval: 10000
    });
    $(".selectpicker").selectpicker();
    $(".selectpicker").on("changed.bs.select", e => {
      console.log("change detected!");
      console.log(e.target.value);
      this.setLocale(e.target.value);
    });
  }

  ngOnInit() {
    let locale = localStorage.getItem("locale");
    if (!locale) {
      locale = this.getLocaleString();
    }
    this.setLocale(locale);
    this.config.request("assets/api/intro", (data) => {
      this.intro = data;
    });
  }
}
