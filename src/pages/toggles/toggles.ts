import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


@Component({
  selector: 'page-toggle',
  templateUrl: 'toggles.html'
})

export class TogglePage {
  items: Array<{label: string, icon: string, toggled: boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bluetoothSerial: BluetoothSerial) {

    this.items = [{
      label: 'Wifi',
      icon: 'wifi',
      toggled: false
    },
    {
      label: 'Bluetooth',
      icon: 'bluetooth',
      toggled: false
    },
    {
      label: 'GPS',
      icon: 'gps',
      toggled: false
    }];

  }

  itemToggled(event, item) {
    console.log('toggle')
    if (item.label === 'Bluetooth')
      console.log('hello')
      // TODO: Will it still ask if I get permission?
      this.bluetoothSerial.enable()
  }

}
