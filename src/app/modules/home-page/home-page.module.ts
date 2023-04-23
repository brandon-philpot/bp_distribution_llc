import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
