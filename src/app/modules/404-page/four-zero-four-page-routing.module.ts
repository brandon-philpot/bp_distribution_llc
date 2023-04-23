import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FOUR_ZERO_FOUR_PAGE_ROUTE } from './constants/four-zero-four-page-routing.constant';

@NgModule({
  imports: [
    RouterModule.forChild(FOUR_ZERO_FOUR_PAGE_ROUTE)
  ]
})
export class FourZeroFourPageRoutingModule { }
