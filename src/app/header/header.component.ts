import { Component, OnInit } from "@angular/core";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import {
  faHome,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  logo = "assets/images/logo.png";
  faHome = faHome;
  faBookmark = faBookmark;
  favoriteCtrlD = "";

  mac = false;

  constructor(
    private translate: TranslateService
  ) {
    this.mac = navigator.userAgent.toLowerCase().indexOf("mac") !== - 1;
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (this.mac) {
      translate.get("FAVORITE-CTRL-D-MAC").subscribe((res: string) => {
        this.favoriteCtrlD = res;
      });
    } else {
      translate.get("FAVORITE-CTRL-D").subscribe((res: string) => {
        this.favoriteCtrlD = res;
      });
    }
    });
  }
  ngOnInit() {
  }

  addToFavorite(win: any, doc: any) {
    try {
      win.sidebar.addPanel(doc.title, win.location.href, "");
    } catch (e) {
      try {
        win.external.AddFavorite(location.href, doc.title);
      } catch (e1) {
        try {
          win.triggerBookmark.attr("rel", "sidebar").attr("title", doc.title).attr("href", win.location.href);
        } catch (e2) {

          alert(this.favoriteCtrlD);

          // alert("You can add this page to your bookmarks by pressing "
          //   + (navigator.userAgent.toLowerCase().indexOf("mac") !== - 1 ?
          //     "Command/Cmd" : "CTRL") + " + D on your keyboard.");
        }
      }
    }
    // If you have something in the `href` of your trigger
    return false;
  }

  addCurrent() {
    console.log("addCurrent");
    this.addToFavorite(window, document);
  }

}
