import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductsPageComponent } from './products-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  declarations: [
    ProductsPageComponent
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class ProductsPageModule { }
