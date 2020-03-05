import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent implements OnInit {
  public selectedIndex = 0;
  public medium = [
    {
      title: 'Sound',
      url: '/send/sound',
      icon: 'home'
    },
    {
      title: 'Internet',
      url: '/send/internet',
      icon: 'paper-plane'
    },
    {
      title: 'QR Code',
      url: '/send/qr-code',
      icon: 'share-social'
    }
  ];

  constructor(private navCtrl: NavController, private popoverController: PopoverController,
              private nav: NavService) { }

  ngOnInit() {}

  async DismissClick() {
    await this.popoverController.dismiss();
      }

}
