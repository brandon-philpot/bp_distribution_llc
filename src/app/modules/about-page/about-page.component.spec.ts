import { ComponentFixture, TestBed } from '@angular/core/testing';

import { removeStylesFromDOM } from '../../../../unit-test-mock-data/functions/styles-function';
import { AboutPageComponent } from './about-page.component';
import { AboutPageModule } from './about-page.module';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  // Setup spy references
  let spyNGOnInit: jasmine.Spy<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutPageModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
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

  it('should create AboutPageComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('AboutPageComponent methods', () => {

    describe('ngOnInit()', () => {

      it('should call ngOnInit()', () => {
        reset();

        component.ngOnInit();

        expect(component.ngOnInit).toHaveBeenCalled();
      });
    });
  });
});
