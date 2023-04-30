import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ServicesPageRoutingModule } from './services-page-routing.module';
import { ServicesPageComponent } from './services-page.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
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
