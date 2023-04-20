import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PRODUCTS_PAGE_TITLE } from './constants/products-page.constant';

@Component({
  selector: 'bp-dist-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  /**
   * Creates an instance of ProductsPageComponent.
   *
   * @param {Title} title_
   * @memberof ProductsPageComponent
   */
  constructor(private title_: Title) { }

  /**
   * Initilze service calls and setup component
   *
   * @memberof ProductsPageComponent
   */
  ngOnInit(): void {
    this.title_.setTitle(PRODUCTS_PAGE_TITLE);
  }
}
