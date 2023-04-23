import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    AboutPageRoutingModule
  ],
  declarations: [
    AboutPageComponent
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule { }
