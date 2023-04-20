import { ComponentFixture, TestBed } from '@angular/core/testing';

import { removeStylesFromDOM } from '../../../../unit-test-mock-data/functions/styles-function';
import { ServicesPageComponent } from './services-page.component';
import { ServicesPageModule } from './services-page.module';

describe('ServicesPageComponent', () => {
  let component: ServicesPageComponent;
  let fixture: ComponentFixture<ServicesPageComponent>;

  // Setup spy references
  let spyNGOnInit: jasmine.Spy<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ServicesPageModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPageComponent);
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

  it('should create ServicesPageComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('ServicesPageComponent methods', () => {

    describe('ngOnInit()', () => {

      it('should call ngOnInit()', () => {
        reset();

        component.ngOnInit();

        expect(component.ngOnInit).toHaveBeenCalled();
      });
    });
  });
});
