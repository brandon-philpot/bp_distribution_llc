import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ImportImageServiceInterface } from '../interfaces';
import { ImportImageService } from './import-image.service';

export const  TEST_SVG_RETURN_STRING: string = 'test svg string';

describe('ImportImageService', () => {
  let service: ImportImageService;
  let httpMock: HttpTestingController;

  // Setup spy references
  let spyGetSVG: jasmine.Spy<any>;

  // Test Data
  const svgName: string = 'bp_distrobution_logo_100x68_705';

  // Used to handle subscriptions
  const ngUnsubscribe$: Subject<void> = new Subject<void>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ImportImageService
      ]
    });

    service = TestBed.inject(ImportImageService);
    httpMock = TestBed.inject(HttpTestingController);

    // Add method spies
    spyGetSVG = spyOn(service, 'getSVG').and.callThrough();
  });

  afterAll(() => {
    ngUnsubscribe$.next();
    ngUnsubscribe$.complete();
  });

  const reset = () => {
    ngUnsubscribe$.next();

    spyGetSVG.calls.reset();
  };
  const after = () => {
    httpMock.verify();
  };

  it('should create ImportImageService', () => {
    expect(service).toBeTruthy();
  });

  describe('ImportImageService methods', () => {

    describe('getSVG()', () => {

      it('should call getSVG() and return known string', () => {
        reset();

        service.getSVG(svgName)
               .pipe(takeUntil(ngUnsubscribe$))
               .subscribe((response: string) => {
                 expect(response).toEqual(TEST_SVG_RETURN_STRING);
                 expect(service.getSVG).toHaveBeenCalled();
               });

        const xhrURL: string = `assets/images/svgs/${svgName}.svg`;
        const xhrRequest: TestRequest = httpMock.expectOne(xhrURL);

        xhrRequest.flush(TEST_SVG_RETURN_STRING);

        after();
      });
    });
  });
});

@Injectable()
export class ImportImageServiceSpy implements ImportImageServiceInterface {

  getSVG = jasmine.createSpy('getSVG').and.callFake(
    (svgName: string): Observable<string> => this.callFakeGetSVG(svgName)
  );

  callFakeGetSVG(svgName: string): Observable<string> {
    return of(TEST_SVG_RETURN_STRING);
  }
}