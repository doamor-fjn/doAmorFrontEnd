import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterDPage } from '../pages/register-d/register-d';
import { RegisterIPage } from '../pages/register-i/register-i';
import { HomeIPage } from '../pages/home-i/home-i';
import { ProfileIPage } from '../pages/profile-i/profile-i';
import { IntroPage } from '../pages/intro/intro';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterDPage,
    RegisterIPage,
    HomeIPage,
    ProfileIPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterDPage,
    RegisterIPage,
    HomeIPage,
    ProfileIPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
