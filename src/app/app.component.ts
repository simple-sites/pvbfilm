import { Component } from "@angular/core";
declare var particlesJS: any;
declare var $: any;
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

import { Title } from "@angular/platform-browser";

import {
  faWindows,
  faLinux,
  faBitcoin,
  faMonero,
  faWeixin,
  faQq,
  faWeibo
} from "@fortawesome/free-brands-svg-icons";
import {
  faCloud,
  faDownload,
  faExternalLinkAlt,
  faHome,
  faBookmark,
  faMapMarker,
  faFax,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "vigcoin";
  supportedLanguages = ["en", "zh"];

  faWindows = faWindows;
  faLinux = faLinux;
  faCloud = faCloud;
  faDownload = faDownload;
  faMonero = faMonero;
  faBitcoin = faBitcoin;
  faHome = faHome;
  faBookmark = faBookmark;
  faMapMarker = faMapMarker;
  faFax = faFax;
  faPhone = faPhone;
  faExternalLinkAlt = faExternalLinkAlt;
  faWeixin = faWeixin;
  faQq = faQq;
  faWeibo = faWeibo;

  active = 0;

  beian = {
    code: "33102302000027",
    authority: "浙公网安备"
  };

  intro;
  about;
  logo = "/assets/images/logo.png";
  mail = {
    domain: "pvbfilm.com"
  };

  productions = [
    {
      image: "/assets/images/roadmap/1.jpg",
      title: "ROADMAP-T1",
      intro: "ROADMAP-T1-INTRO",
      state: "ROADMAP-STATE-DONE"
    },
    {
      image: "/assets/images/roadmap/2.jpg",
      title: "ROADMAP-T2",
      intro: "ROADMAP-T2-INTRO",
      state: "ROADMAP-STATE-PROGRESSING"
    },
    {
      image: "/assets/images/roadmap/3.jpg",
      title: "ROADMAP-T3",
      intro: "ROADMAP-T3-INTRO",
      state: "ROADMAP-STATE-PLANNED"
    },
    {
      image: "/assets/images/roadmap/4.jpg",
      title: "ROADMAP-T4",
      intro: "ROADMAP-T4-INTRO",
      state: "ROADMAP-STATE-PLANNED"
    },
    {
      image: "/assets/images/roadmap/5.jpg",
      title: "ROADMAP-T4",
      intro: "ROADMAP-T4-INTRO",
      state: "ROADMAP-STATE-PLANNED"
    }
  ];

  news = [
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    },
    {
      id: 1,
      url: "http://localhost:4200/#intro",
      title: "pvb的应用有那些？",
      date: "2013-5-29"
    }
  ];
  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get("TITLE").subscribe((res: string) => {
        titleService.setTitle(res);
      });
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
  }

  ngOnInit() {
    particlesJS.load("particles-js", "/assets/particles.json", function() {
      console.log("callback - particles.js config loaded");
    });
    $(".carousel").carousel({
      interval: 10000
    });
    $(".selectpicker").selectpicker();
    let locale = localStorage.getItem("locale");
    console.log("locale = ", locale);
    if (!locale) {
      locale = this.getLocaleString();
    }
    this.setLocale(locale);

    // this.titleService.setTitle(this.translate.get("TITLE 1"));

    $(".selectpicker").on("changed.bs.select", e => {
      console.log("change detected!");
      console.log(e.target.value);
      this.setLocale(e.target.value);
    });
  }
}
