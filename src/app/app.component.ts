import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { LoginPage } from '../pages/login/login';
//import { RegisterDPage } from '../pages/register-d/register-d';
//import { RegisterIPage } from '../pages/register-i/register-i';
//import { HomeIPage } from '../pages/home-i/home-i';
import { ProfileIPage } from '../pages/profile-i/profile-i';
//import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ProfileIPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

