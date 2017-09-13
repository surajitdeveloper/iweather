import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;
  state:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ionstore: Storage) {
    this.ionstore.get("location").then(
      (val) => {
        if (val == null) {
          this.city = "Kolkata";
          this.state = "WB";
        }
        else {
          let sto = JSON.parse(val);
          this.city = sto.city;
          this.state = sto.state;
        }
      },
      (err) =>
      {

      });

  }
  FormSubmit()
  {
    let store = {city: this.city, state: this.state };
    this.ionstore.set("location",JSON.stringify(store));
    alert("Location saved Successfully");
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
