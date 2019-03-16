import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LandingPage } from './landing/landing.page';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingPage
      }
    ])
  ]
})
export class LandingModule { }
