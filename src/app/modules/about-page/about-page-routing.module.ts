import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ABOUT_PAGE_ROUTE } from './constants/about-page-routing.constant';

@NgModule({
  imports: [
    RouterModule.forChild(ABOUT_PAGE_ROUTE)
  ]
})
export class AboutPageRoutingModule { }
