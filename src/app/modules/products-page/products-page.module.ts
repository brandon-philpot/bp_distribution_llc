import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    ProductsPageRoutingModule
  ],
  declarations: [
    ProductsPageComponent
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class ProductsPageModule { }
