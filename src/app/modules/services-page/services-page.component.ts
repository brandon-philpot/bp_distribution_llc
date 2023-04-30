import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBoxesStacked as fasBoxesStacked,
  faBuildingCircleArrowRight as fasBuildingCircleArrowRight,
  faTruckFast as fasTruckFast,
  faWarehouse as fasWarehouse
} from '@fortawesome/free-solid-svg-icons';

import { SERVICES, SERVICES_PAGE_TITLE } from './constants';
import { ServiceInterface } from './interfaces';

@Component({
  selector: 'bp-dist-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent {
  services: ServiceInterface[];

  /**
   * Creates an instance of ServicesPageComponent.
   *
   * @param {Title} title
   * @memberof ServicesPageComponent
   */
  constructor(title: Title,
              faIconLibrary: FaIconLibrary) {
    title.setTitle(SERVICES_PAGE_TITLE);
    faIconLibrary.addIcons(fasBoxesStacked, fasBuildingCircleArrowRight, fasTruckFast, fasWarehouse);
    this.services = SERVICES
  }
}
