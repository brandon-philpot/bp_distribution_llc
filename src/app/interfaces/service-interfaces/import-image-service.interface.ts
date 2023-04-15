import { Observable } from 'rxjs';

/**
 * Interface defines the Import Image Service
 *
 * @export
 * @interface ImportImageServiceInterface
 */
export interface ImportImageServiceInterface {
  getSVG(svgName: string): Observable<string>
}
