import { FourZeroFourPageModule } from './four-zero-four-page.module';

describe('FourZeroFourPageModule', () => {
  let fourZeroFourPageModule: FourZeroFourPageModule;

  beforeEach(() => {
    fourZeroFourPageModule = new FourZeroFourPageModule();
  });

  it('should create an instance of FourZeroFourPageModule', () => {
    expect(fourZeroFourPageModule).toBeTruthy();
  });
});
