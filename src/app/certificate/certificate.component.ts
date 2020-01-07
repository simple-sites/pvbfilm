import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-certificate",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.scss"]
})
export class CertificateComponent implements OnInit {

  certificates = [
  ];
  url = "assets/api/certificate.json";

  page = 1;
  total = 10;
  columns = 5;
  hash = "#";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const page = parseInt(param.get("page"), 10);
      this.page = page > 1 ? page : 1;

      this.http.get(this.url).subscribe((data: any) => {
        this.total = data.total;
        this.certificates = data.certificates;
      });
    });
  }

}
