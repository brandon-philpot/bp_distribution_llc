import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';

import { ImportImageService } from '../../services/import-image.service';
import { ImportImageServiceSpy } from '../../services/import-image.service.spec';

@NgModule({
  imports: [
    HttpClientTestingModule
  ],
  providers: [
    { provide: ImportImageService, useClass: ImportImageServiceSpy }
  ]
})
export class MockServicesModule { }
