import { AppModule } from './app.module';

describe('AppModule', () => {
  let appModule: AppModule;

  beforeEach(() => {
    appModule = new AppModule();
  });

  it('should create an instance of AppModule', () => {
    expect(appModule).toBeTruthy();
  });
});
