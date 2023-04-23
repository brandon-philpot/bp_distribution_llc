import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FourZeroFourPageRoutingModule } from './four-zero-four-page-routing.module';
import { FourZeroFourPageComponent } from './four-zero-four-page.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FourZeroFourPageRoutingModule
  ],
  declarations: [
    FourZeroFourPageComponent
  ],
  exports: [
    FourZeroFourPageComponent
  ]
})
export class FourZeroFourPageModule { }
