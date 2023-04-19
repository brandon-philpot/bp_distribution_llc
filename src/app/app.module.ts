import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { RoutingModule } from './modules/routing/routing.module';
import { ImportImageService } from './services/import-image.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [
    ImportImageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
