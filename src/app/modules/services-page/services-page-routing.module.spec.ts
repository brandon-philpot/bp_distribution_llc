import { ServicesPageRoutingModule } from './services-page-routing.module';

describe('ServicesPageRoutingModule', () => {
  let servicesPageRoutingModule: ServicesPageRoutingModule;

  beforeEach(() => {
    servicesPageRoutingModule = new ServicesPageRoutingModule();
  });

  it('should create an instance of ServicesPageRoutingModule', () => {
    expect(servicesPageRoutingModule).toBeTruthy();
  });
});
