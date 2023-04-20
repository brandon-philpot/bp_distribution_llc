import { AboutPageModule } from './about-page.module';

describe('AboutPageModule', () => {
  let aboutPageModule: AboutPageModule;

  beforeEach(() => {
    aboutPageModule = new AboutPageModule();
  });

  it('should create an instance of AboutPageModule', () => {
    expect(aboutPageModule).toBeTruthy();
  });
});
