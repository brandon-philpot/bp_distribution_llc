import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FourZeroFourPageModule } from './modules/404-page/four-zero-four-page.module';
import { AboutPageModule } from './modules/about-page/about-page.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { ProductsPageModule } from './modules/products-page/products-page.module';
import { ServicesPageModule } from './modules/services-page/services-page.module';
import { ImportImageService } from './services/import-image.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    AboutPageModule,
    FourZeroFourPageModule,
    HomePageModule,
    ProductsPageModule,
    ServicesPageModule
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
