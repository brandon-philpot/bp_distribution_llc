import { ComponentFixture, TestBed } from '@angular/core/testing';

import { removeStylesFromDOM } from '../../../../unit-test-mock-data/functions/styles-function';
import { ProductsPageComponent } from './products-page.component';
import { ProductsPageModule } from './products-page.module';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  // Setup spy references
  let spyNGOnInit: jasmine.Spy<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductsPageModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageComponent);
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

  it('should create ProductsPageComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('ProductsPageComponent methods', () => {

    describe('ngOnInit()', () => {

      it('should call ngOnInit()', () => {
        reset();

        component.ngOnInit();

        expect(component.ngOnInit).toHaveBeenCalled();
      });
    });
  });
});