import { ServicesPageModule } from './services-page.module';

describe('ServicesPageModule', () => {
  let servicesPageModule: ServicesPageModule;

  beforeEach(() => {
    servicesPageModule = new ServicesPageModule();
  });

  it('should create an instance of ServicesPageModule', () => {
    expect(servicesPageModule).toBeTruthy();
  });
});
