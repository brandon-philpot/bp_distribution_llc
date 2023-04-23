import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ServicesPageRoutingModule } from './services-page-routing.module';
import { ServicesPageComponent } from './services-page.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    ServicesPageRoutingModule
  ],
  declarations: [
    ServicesPageComponent
  ],
  exports: [
    ServicesPageComponent
  ]
})
export class ServicesPageModule { }
