import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { UtilityServiceService } from 'src/app/services/utility-service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
               private router: Router, private auth: AuthService,
               private formBuilder: FormBuilder, 
               private loadingCtrl: LoadingController ,private navCtrl:NavController,
               private menuCtrl: MenuController, private utility: UtilityServiceService,
               public faio: FingerprintAIO,
                private storage: Storage,
                 private fbservice: FirebaseService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.initializeForm();
  }

  initializeForm(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  submit(){
    this.navCtrl.navigateForward('home')
  }

  async login(value) {
      const loading = await this.loadingCtrl.create({
        message: 'Logging in, please wait...',
        spinner: 'bubbles'
      });
      await loading.present();
    
    this.auth.login(value)
    .then(res => {
      this.fbservice.SyncAll();
      this.errorMessage = "";
      this.navCtrl.navigateRoot('home');
      loading.dismiss();
      this.menuCtrl.enable(true);
    }, err => {
      loading.dismiss();
      this.utility.presentAlert("Error", err.message, "OK");
    })
  }

  usefinger(){
    this.faio.isAvailable()
      .then(result => {
      if(result === "finger" || result === "face"){
        //Fingerprint or Face Auth is available
        this.faio.show({
          // clientId: 'digita-c3e1e',
          // clientSecret: 'AIzaSyAkiZkM7bgdc0mmM-2r9v1ZTt_j8emYLsQ', //Only necessary for Android
          disableBackup: true, //Only for Android(optional)
          // localizedFallbackTitle: 'Use Pin', //Only for iOS
          // localizedReason: 'Please Authenticate' //Only for iOS
      })
      .then((result: any) => {
        this.storage.get("User").then(User=>{
          if(User){
            let value = {"email": User.user_email, "password": User.user_password}
            this.login(value);
          }
        })
        this.navCtrl.navigateRoot("home")
    })
    .catch((error: any) => {
      //Fingerprint/Face was not successfully verified
      this.utility.presentAlert("Error",error,"OK");
    });
    }
    else {
      //Fingerprint or Face Auth is not available
      this.utility.presentAlert("Error","Fingerprint/Face Auth is not available on this device!","OK");
      }
      })
  }

}
