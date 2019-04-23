import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeIPage } from './home-i';

@NgModule({
  declarations: [
    HomeIPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeIPage),
  ],
})
export class HomeIPageModule {}
