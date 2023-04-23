import { AboutPageRoutingModule } from './about-page-routing.module';

describe('AboutPageRoutingModule', () => {
  let aboutPageRoutingModule: AboutPageRoutingModule;

  beforeEach(() => {
    aboutPageRoutingModule = new AboutPageRoutingModule();
  });

  it('should create an instance of AboutPageRoutingModule', () => {
    expect(aboutPageRoutingModule).toBeTruthy();
  });
});
