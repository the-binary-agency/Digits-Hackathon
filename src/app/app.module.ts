import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SendComponent } from './components/send/send.component';

@NgModule({
  declarations: [AppComponent, SendComponent],
  entryComponents: [SendComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    FormsModule,
    SplashScreen,
    AuthService,
    FingerprintAIO,
    SendComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
