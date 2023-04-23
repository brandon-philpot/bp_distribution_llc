import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PRODUCTS_PAGE_ROUTE } from './constants/products-page-routing.constant';

@NgModule({
  imports: [
    RouterModule.forChild(PRODUCTS_PAGE_ROUTE)
  ]
})
export class ProductsPageRoutingModule { }
