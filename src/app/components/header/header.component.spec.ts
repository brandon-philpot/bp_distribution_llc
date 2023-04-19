import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { removeStylesFromDOM } from '../../../../unit-test-mock-data/functions/styles-function';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { MockServicesModule } from './../../modules/mock-services/mock-services.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  // Setup spy references
  let spyNGOnInit: jasmine.Spy<any>;
  let spyServiceGetSVG: jasmine.Spy<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModule,
        MockServicesModule
      ],
      declarations: [
        HeaderComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    // Add method spies
    spyNGOnInit = spyOn(component, 'ngOnInit').and.callThrough();
    spyServiceGetSVG = spyOn<any>(component, 'serviceGetSVG_').and.callThrough();

    fixture.detectChanges();
  });

  const reset = () => {
    spyNGOnInit.calls.reset();
    spyServiceGetSVG.calls.reset();
  };

  afterAll(() => {
    removeStylesFromDOM();
  });

  it('should create HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('HeaderComponent methods', () => {

    describe('ngOnInit()', () => {

      it('should call ngOnInit()', () => {
        reset();

        component.ngOnInit();

        expect(component.ngOnInit).toHaveBeenCalled();
      });

      it('should call serviceGetSVG_() from ngOnInit()', () => {
        reset();

        component.ngOnInit();

        expect(component['serviceGetSVG_']).toHaveBeenCalled();
      });
    });

    describe('private serviceGetSVG_()', () => {

      it('should call serviceGetSVG_()', () => {
        reset();

        component['serviceGetSVG_']();

        expect(component['serviceGetSVG_']).toHaveBeenCalled();
      });

      it('should call importImageService_.getSVG() from serviceGetSVG_()', () => {
        reset();

        component['serviceGetSVG_']();

        expect(component['importImageService_'].getSVG).toHaveBeenCalled();
      });

      it('should call importImageService_.getSVG() and set svgBPDistributionLogo with SafeHtml', () => {
        reset();

        component.svgBPDistributionLogo = '';
        component['serviceGetSVG_']();

        expect(component.svgBPDistributionLogo).not.toEqual('');
      });
    });
  });
});
