import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from "../../providers/weather/weather";
import { Storage } from "@ionic/storage";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  loadeddiv()
  {
    this.ionstorage.get("location").then(
      (val) =>
      {
        if(val == null)
        {
          this.location = {city: "Kolkata", state: "WB"};
        }
        else
        {
          this.location = JSON.parse(val);
        }
        console.log(this.location);
        this.WeatherPro.get_weather(this.location.state, this.location.city).subscribe(
          weather => {
            console.log("weather");
            this.weather = weather.current_observation;
            console.log(this.weather);
          }
        );
      },
      (err) => {

      }
    );

    console.log("Ion will Enter CAll");
  }
  location:{ city:string, state:string }
  constructor(public navCtrl: NavController, private WeatherPro:WeatherProvider, private ionstorage: Storage){ }
  ionViewDidLoad()
  {
    this.loadeddiv();
  }
  ionWillEnter()
  {
    this.loadeddiv();
  }
}
