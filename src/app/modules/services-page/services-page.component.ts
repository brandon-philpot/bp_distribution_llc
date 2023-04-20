import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SERVICES_PAGE_TITLE } from './constants/services-page.constant';

@Component({
  selector: 'bp-dist-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  /**
   * Creates an instance of ServicesPageComponent.
   *
   * @param {Title} title_
   * @memberof ServicesPageComponent
   */
  constructor(private title_: Title) { }

  /**
   * Initilze service calls and setup component
   *
   * @memberof ServicesPageComponent
   */
  ngOnInit(): void {
    this.title_.setTitle(SERVICES_PAGE_TITLE);
  }
}
