import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FOUR_ZERO_FOUR_PAGE_TITLE } from './constants/four-zero-four-page.constant';

@Component({
  selector: 'bp-dist-four-zero-four-page',
  templateUrl: './four-zero-four-page.component.html',
  styleUrls: ['./four-zero-four-page.component.scss']
})
export class FourZeroFourPageComponent implements OnInit {

  /**
   * Creates an instance of FourZeroFourPageComponent.
   *
   * @param {Title} title_
   * @memberof FourZeroFourPageComponent
   */
  constructor(private title_: Title) { }

  /**
   * Initilze service calls and setup component
   *
   * @memberof FourZeroFourPageComponent
   */
  ngOnInit(): void {
    this.title_.setTitle(FOUR_ZERO_FOUR_PAGE_TITLE);
  }
}
