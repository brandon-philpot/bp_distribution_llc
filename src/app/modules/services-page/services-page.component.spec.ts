import { ComponentFixture, TestBed } from '@angular/core/testing';

import { removeStylesFromDOM } from '../../../../unit-test-mock-data/functions/styles-function';
import { ServicesPageComponent } from './services-page.component';
import { ServicesPageModule } from './services-page.module';

describe('ServicesPageComponent', () => {
  let component: ServicesPageComponent;
  let fixture: ComponentFixture<ServicesPageComponent>;

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

    fixture.detectChanges();
  });

  afterAll(() => {
    removeStylesFromDOM();
  });

  it('should create ServicesPageComponent', () => {
    expect(component).toBeTruthy();
  });
});
