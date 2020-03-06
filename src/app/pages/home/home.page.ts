import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, LoadingController, AlertController, PopoverController, IonSlides } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SendComponent } from 'src/app/components/send/send.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  segment = 0;
  User: any = "User";

  constructor(private menuCtrl: MenuController,  private firestore: AngularFirestore,
     private fbservice: FirebaseService,
    private alert: AlertController, public loadingCtrl: LoadingController,
     public popoverController: PopoverController) { }

  async ngOnInit() {
    this.menuCtrl.enable(true);
    const loading = await this.loadingCtrl.create({
      message: '',
      spinner: 'bubbles'
    });
    await loading.present();

    if(!this.fbservice.firstname){
      this.User = this.fbservice.email
      console.log("sertyuiopoiuytr", this.User)
    }else{
      this.User = this.fbservice.firstname + " " + this.fbservice.lastname
    }

    loading.dismiss();
    console.log(this.fbservice.User)
    
  }

  async segmentChanged(){
    await this.slides.slideTo(this.segment);
  }
  
  async slideChanged(){
    this.segment = await this.slides.getActiveIndex();
  }

  async Send(ev: any) {
    const popover = await this.popoverController.create({
      component: SendComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
