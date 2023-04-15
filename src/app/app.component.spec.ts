import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        AngularMaterialModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'bp-dist'`, () => {
    expect(component.title).toEqual('bp-dist');
  });

  it('should render title', () => {
    const compiled: HTMLElement = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.content span')?.textContent).toContain('bp-dist app is running!');
  });
});
