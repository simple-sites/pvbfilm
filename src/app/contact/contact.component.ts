import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  url = "assets/api/contact.json";
  contact;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      this.contact = data;
    });
  }

}
