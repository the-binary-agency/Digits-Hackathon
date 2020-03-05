import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
  public medium: string;

  constructor(private nav: NavService, private popoverController: PopoverController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.popoverController.dismiss();
    this.medium = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
