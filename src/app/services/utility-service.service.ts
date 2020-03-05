import { Injectable } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor(private actSheetCtrl: ActionSheetController,private alert:AlertController) { }

  async openActionSheet(){
      const actionSheet = await this.actSheetCtrl.create({
        header: 'Albums',
        mode: "ios",
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }]
      });
    
      await actionSheet.present();
  }
  

async presentAlert(header: string, message: string, buttons: string) {
  const alert = await this.alert.create({
    header: header,
    message: message,
    buttons: [buttons]
  });

  await alert.present();
}

async showAlertwithHandler(title, text, handler: any = {}) {
    let alert = await this.alert.create({
      header: title,
      message: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            handler
          }
        }
      ]
    });

    return await alert.present();
  }

}
