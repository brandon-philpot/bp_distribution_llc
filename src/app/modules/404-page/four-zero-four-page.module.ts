import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FourZeroFourPageComponent } from './four-zero-four-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  declarations: [
    FourZeroFourPageComponent
  ],
  exports: [
    FourZeroFourPageComponent
  ]
})
export class FourZeroFourPageModule { }
