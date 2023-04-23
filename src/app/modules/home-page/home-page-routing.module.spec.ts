import { HomePageRoutingModule } from './home-page-routing.module';

describe('HomePageRoutingModule', () => {
  let homePageRoutingModule: HomePageRoutingModule;

  beforeEach(() => {
    homePageRoutingModule = new HomePageRoutingModule();
  });

  it('should create an instance of HomePageRoutingModule', () => {
    expect(homePageRoutingModule).toBeTruthy();
  });
});
