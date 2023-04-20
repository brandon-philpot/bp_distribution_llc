import { ComponentFixture, TestBed } from '@angular/core/testing';

import { removeStylesFromDOM } from '../../../../unit-test-mock-data/functions/styles-function';
import { FourZeroFourPageComponent } from './four-zero-four-page.component';
import { FourZeroFourPageModule } from './four-zero-four-page.module';

describe('FourZeroFourPageComponent', () => {
  let component: FourZeroFourPageComponent;
  let fixture: ComponentFixture<FourZeroFourPageComponent>;

  // Setup spy references
  let spyNGOnInit: jasmine.Spy<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FourZeroFourPageModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourZeroFourPageComponent);
    component = fixture.componentInstance;

    // Add method spies
    spyNGOnInit = spyOn(component, 'ngOnInit').and.callThrough();

    fixture.detectChanges();
  });

  const reset = () => {
    spyNGOnInit.calls.reset();
  };

  afterAll(() => {
    removeStylesFromDOM();
  });

  it('should create FourZeroFourPageComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('FourZeroFourPageComponent methods', () => {

    describe('ngOnInit()', () => {

      it('should call ngOnInit()', () => {
        reset();

        component.ngOnInit();

        expect(component.ngOnInit).toHaveBeenCalled();
      });
    });
  });
});
