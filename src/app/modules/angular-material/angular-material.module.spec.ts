import { AngularMaterialModule } from './angular-material.module';

describe('AngularMaterialModule', () => {
  let angularMaterialModule: AngularMaterialModule;

  beforeEach(() => {
    angularMaterialModule = new AngularMaterialModule();
  });

  it('should create an instance of AngularMaterialModule', () => {
    expect(angularMaterialModule).toBeTruthy();
  });
});
