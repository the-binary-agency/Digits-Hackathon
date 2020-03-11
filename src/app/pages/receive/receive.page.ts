import { Component, OnInit } from '@angular/core';
import { PopoverController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.page.html',
  styleUrls: ['./receive.page.scss'],
})
export class ReceivePage implements OnInit {
    public medium: string;

  constructor(private popoverController: PopoverController, private loadingController: LoadingController, 
                        private alertController: AlertController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.popoverController.dismiss();
    this.medium = this.activatedRoute.snapshot.paramMap.get('id');
  }


  async receive(){
    const loading = await this.loadingController.create({
        message: 'Receive Payment info over ' + this.medium + ' ...',
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

//   InitReceive(){
//     var TextReceiver = (function() {
//       Quiet.init({
//           profilesPrefix: "/",
//           memoryInitializerPrefix: "/",
//           libfecPrefix: "/"
//       });
//       var target;
//       var content = new ArrayBuffer(0);
//       var warningbox;
  
//       function onReceive(recvPayload) {
//           content = Quiet.mergeab(content, recvPayload);
//           target.textContent = Quiet.ab2str(content);
//           warningbox.classList.add("hidden");
//       };
  
//       function onReceiverCreateFail(reason) {
//           console.log("failed to create quiet receiver: " + reason);
//           warningbox.classList.remove("hidden");
//           warningbox.textContent = "Sorry, it looks like this example is not supported by your browser. Please give permission to use the microphone or try again in Google Chrome or Microsoft Edge."
//       };
  
//       function onReceiveFail(num_fails) {
//           warningbox.classList.remove("hidden");
//           warningbox.textContent = "We didn't quite get that. It looks like you tried to transmit something. You may need to move the transmitter closer to the receiver and set the volume to 50%."
//       };
  
//       function onQuietReady() {
//           var profilename = document.querySelector('[data-quiet-profile-name]').getAttribute('data-quiet-profile-name');
//           Quiet.receiver({profile: profilename,
//                onReceive: onReceive,
//                onCreateFail: onReceiverCreateFail,
//                onReceiveFail: onReceiveFail
//           });
//       };
  
//       function onQuietFail(reason) {
//           console.log("quiet failed to initialize: " + reason);
//           warningbox.classList.remove("hidden");
//           warningbox.textContent = "Sorry, it looks like there was a problem with this example (" + reason + ")";
//       };
  
//       function onDOMLoad() {
//           target = document.querySelector('[data-quiet-receive-text-target]');
//           warningbox = document.querySelector('[data-quiet-warning]');
//           Quiet.addReadyCallback(onQuietReady, onQuietFail);
//       };
  
//       document.addEventListener("DOMContentLoaded", onDOMLoad);
//   })();
  
//   }
}
