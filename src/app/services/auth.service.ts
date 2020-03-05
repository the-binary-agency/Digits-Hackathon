import { LoadingController, NavController } from '@ionic/angular';
import { UtilityServiceService } from './utility-service.service';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
              private firebaseService: FirebaseService,
              public afAuth: AngularFireAuth,
              private utility: UtilityServiceService,
              private loadCtrl: LoadingController,
              private navCtrl: NavController) {
  }

  public register(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }

  async login(value) {
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))

      })
    
  }

  public logout() {
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }


  // public update( info ) {
  //   if( info.email === null || info.name === null ) {
  //     return Observable.throw("Please fill all fields");
  //   } else {
  //     return Observable.create(observer => {
  //       observer.next(true);
  //       observer.complete();
  //     });
  //   }
  // }

  // public getUserInfo() : User {
  //   return this.currentUser;
  // }

 

  // public checkLogged() {
  //   return this.isLogged; 
  // }

}