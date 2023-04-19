import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HOME_PAGE_TITLE } from './constants/home-page.constant';

@Component({
  selector: 'bp-dist-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  /**
   * Creates an instance of HomePageComponent.
   *
   * @param {Title} title_
   * @memberof HomePageComponent
   */
  constructor(private title_: Title) { }

  /**
   * Initilze service calls and setup component
   *
   * @memberof HomePageComponent
   */
  ngOnInit(): void {
    this.title_.setTitle(HOME_PAGE_TITLE);
  }
}
