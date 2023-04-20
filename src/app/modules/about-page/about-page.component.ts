import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ABOUT_PAGE_TITLE } from './constants/about-page.constant';

@Component({
  selector: 'bp-dist-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  /**
   * Creates an instance of AboutPageComponent.
   *
   * @param {Title} title_
   * @memberof AboutPageComponent
   */
  constructor(private title_: Title) { }

  /**
   * Initilze service calls and setup component
   *
   * @memberof AboutPageComponent
   */
  ngOnInit(): void {
    this.title_.setTitle(ABOUT_PAGE_TITLE);
  }
}
