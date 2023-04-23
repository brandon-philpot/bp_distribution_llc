import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HOME_PAGE_ROUTE } from './constants/home-page-routing.constant';

@NgModule({
  imports: [
    RouterModule.forChild(HOME_PAGE_ROUTE)
  ]
})
export class HomePageRoutingModule { }
