import {
  Component,
  AfterViewInit,
  OnInit,
  AfterViewChecked
} from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { HttpClient } from "@angular/common/http";
import { fas } from "@fortawesome/free-solid-svg-icons";

declare var $: any;

@Component({
  selector: "app-floating-bar",
  templateUrl: "./floating-bar.component.html",
  styleUrls: ["./floating-bar.component.scss"]
})
export class FloatingBarComponent implements OnInit, AfterViewChecked {
  stores;
  socials;
  url = "assets/api/stores.json";
  urlSocials = "assets/api/socials.json";

  constructor(private http: HttpClient, private library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

  ngAfterViewChecked() {
    console.log("inited");
    this.tooltip();
  }

  tooltip() {
    console.log("tooltip");
    $('[data-toggle="tooltip"]').tooltip({
      animated: "fade",
      placement: "left",
      html: true
    });
  }

  ngOnInit() {
    this.http.get(this.url).subscribe((data: any) => {
      this.stores = data;
    });

    this.http.get(this.urlSocials).subscribe((data: any) => {
      this.socials = data;
    });
  }
}
