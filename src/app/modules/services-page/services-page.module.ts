import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ServicesPageComponent } from './services-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  declarations: [
    ServicesPageComponent
  ],
  exports: [
    ServicesPageComponent
  ]
})
export class ServicesPageModule { }
