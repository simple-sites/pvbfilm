import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  hash = "#";
  public language = "zh";
  constructor(
    private http: HttpClient,
  ) { }

  request(url, cb, params = undefined) {
    this.http.get(url + "/" + this.language + ".json", {params}).subscribe(cb);
  }
}
