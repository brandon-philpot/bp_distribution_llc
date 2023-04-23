import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SERVICES_PAGE_ROUTE } from './constants/services-page-routing.constant';

@NgModule({
  imports: [
    RouterModule.forChild(SERVICES_PAGE_ROUTE)
  ]
})
export class ServicesPageRoutingModule { }
