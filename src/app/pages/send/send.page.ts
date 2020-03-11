import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { PopoverController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import * as AudioNetwork from 'audio-network';
// import * as quiet from 'quietjs-bundle'

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
  public medium: string;

  constructor(private nav: NavService, private popoverController: PopoverController,
     private activatedRoute: ActivatedRoute, private loadingController: LoadingController,
     private alertController: AlertController) { }

  ngOnInit() {
    this.popoverController.dismiss();
    this.medium = this.activatedRoute.snapshot.paramMap.get('id');

    // quiet.addReadyCallback(() => {
    //   quiet.receiver({ profile: 'ultrasonic-experimental', onReceive: console.log });
    // });
  }

  async pay(){
        const loading = await this.loadingController.create({
            message: 'Sending Payment info over ' + this.medium + ' ...',
            duration: 2000,
            spinner: 'bubbles'
        });
        await loading.present();
        loading.onDidDismiss().then(async ()=>{
                    const alert = await this.alertController.create({
                        message: 'Transanction Complete',
                        buttons: ['OK']
                    });
                
                    await alert.present();
        })
  }

  


// InitQuiet(){
//     var TextTransmitter = (function() {
//         Quiet.init({
//             profilesPrefix: "/",
//             memoryInitializerPrefix: "/",
//             libfecPrefix: "/"
//         });
//         var btn;
//         var textbox;
//         var warningbox;
//         var transmit;
    
//         function onTransmitFinish() {
//             textbox.focus();
//             btn.addEventListener('click', onClick, false);
//             btn.disabled = false;
//             var originalText = btn.innerText;
//             btn.innerText = btn.getAttribute('data-quiet-sending-text');
//             btn.setAttribute('data-quiet-sending-text', originalText);
//         };
    
//         function onClick(e) {
//             e.target.removeEventListener(e.type, arguments.callee);
//             e.target.disabled = true;
//             var originalText = e.target.innerText;
//             e.target.innerText = e.target.getAttribute('data-quiet-sending-text');
//             e.target.setAttribute('data-quiet-sending-text', originalText);
//             var payload = textbox.value;
//             if (payload === "") {
//                 onTransmitFinish();
//                 return;
//             }
//             transmit.transmit(Quiet.str2ab(payload));
//         };
    
//         function onQuietReady() {
//             var profilename = document.querySelector('[data-quiet-profile-name]').getAttribute('data-quiet-profile-name');
//             transmit = Quiet.transmitter({profile: profilename, onFinish: onTransmitFinish});
//             btn.addEventListener('click', onClick, false);
//         };
    
//         function onQuietFail(reason) {
//             console.log("quiet failed to initialize: " + reason);
//             warningbox.classList.remove("hidden");
//             warningbox.textContent = "Sorry, it looks like there was a problem with this example (" + reason + ")";
//         };
    
//         function onDOMLoad() {
//             btn = document.querySelector('[data-quiet-send-button]');
//             textbox = document.querySelector('[data-quiet-text-input]');
//             warningbox = document.querySelector('[data-quiet-warning]');
//             Quiet.addReadyCallback(onQuietReady, onQuietFail);
//         };
    
//         document.addEventListener("DOMContentLoaded", onDOMLoad);
//     })();
    
// }

}
