import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ImportImageServiceInterface } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImportImageService implements ImportImageServiceInterface {

  /**
   * Creates an instance of ImportImageService.
   *
   * @param {HttpClient} httpClient_
   * @memberof ImportImageService
   */
  constructor(private httpClient_: HttpClient) { }

  /**
   * Used for retrieving svg image as observable string
   *
   * @param {string} svgName
   * @returns {Observable<string>}
   * @memberof ImportImageService
   */
  getSVG(svgName: string): Observable<string> {
    return this.httpClient_.get(`assets/images/svgs/${svgName}.svg`, { responseType: 'text' });
  }
}
