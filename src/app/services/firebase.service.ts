import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  User: any;
  userid: any;
  selectedImage: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  mobileno: number;
  address: string;
  email: string; 

  filled: boolean = false;
  constructor(private firestore: AngularFirestore){

  }

  async SyncAll(){
    firebase.auth().onAuthStateChanged(user => {
      this.userid = user.uid
    })
    this.firestore.collection<any>( "Users").valueChanges().subscribe(data=>{
      console.log("fghjklkjh",data);
      // this.User
        data.filter(dat=>{
          if(dat.ID == this.userid){
            console.log("the right user logged in") 
            this.filled = true;
              this.firstname= dat.FirstName; 
              this.lastname= dat.LastName;
              this.age= dat.Age;
              this.gender= dat.Gender;
              this.mobileno= dat.MobileNo;
              this.address= dat.Address;
              this.email= dat.Email;
           }else{
             firebase.auth().onAuthStateChanged(user => {
               this.User = user
               this.userid = user.uid
             })
           }
        })
     
   });
  }

}