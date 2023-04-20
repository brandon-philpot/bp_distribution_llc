import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ImportImageService } from '../../services/import-image.service';

@Component({
  selector: 'bp-dist-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // SVG company logo name passed to service so svg can be retrieved
  readonly SVG_NAME: string = 'bp_distribution_logo_100x68_705';
  // SVG company logo passed through dom bypass sanitizer so error is not thrown
  svgBPDistributionLogo: SafeHtml;

  /**
   * Creates an instance of HeaderComponent.
   *
   * @param {DomSanitizer} domSanitizer_
   * @param {ImportImageService} importImageService_
   * @memberof HeaderComponent
   */
  constructor(private domSanitizer_: DomSanitizer,
              private importImageService_: ImportImageService) {
    this.svgBPDistributionLogo = '';
  }

  /**
   * Initilze service calls and setup component
   *
   * @memberof HeaderComponent
   */
  ngOnInit(): void {
    this.serviceGetSVG_();
  }

  /**
   * Used for making call to import image service and retrieving the company logo
   *
   * @private
   * @memberof HeaderComponent
   */
  private serviceGetSVG_(): void {
    this.importImageService_.getSVG(this.SVG_NAME)
                            .subscribe((response: string) => {
                              this.svgBPDistributionLogo = this.domSanitizer_.bypassSecurityTrustHtml(response);
                            });
  }
}
