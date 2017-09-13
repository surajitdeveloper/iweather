import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherProvider {
  api_key = "99dfe35fcb7de1ee";
  url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = "http://api.wunderground.com/api/"+this.api_key+"/conditions/q/";
  }
  get_weather(state,city)
  {
    return this.http.get(this.url+state+"/"+city+".json")
      .map(res => res.json());
  }
}
