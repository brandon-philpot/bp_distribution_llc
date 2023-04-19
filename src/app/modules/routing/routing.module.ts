import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BP_DIST_ROUTES } from './constants/routing.constant';

@NgModule({
  imports: [
    RouterModule.forRoot(BP_DIST_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
