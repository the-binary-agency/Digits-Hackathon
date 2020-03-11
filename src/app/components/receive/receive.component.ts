import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss'],
})
export class ReceiveComponent implements OnInit {
  public selectedIndex = 0;
  public medium = [
    {
      title: 'Sound',
      url: '/receive/sound',
      icon: 'home'
    },
    {
      title: 'Internet',
      url: '/receive/internet',
      icon: 'paper-plane'
    },
    {
      title: 'QR Code',
      url: '/receive/qr-code',
      icon: 'share-social'
    }
  ];
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    this.DismissClick();
  }

  async DismissClick() {
    await this.popoverController.dismiss();
      }
}
