import { ProductsPageModule } from './products-page.module';

describe('ProductsPageModule', () => {
  let productsPageModule: ProductsPageModule;

  beforeEach(() => {
    productsPageModule = new ProductsPageModule();
  });

  it('should create an instance of ProductsPageModule', () => {
    expect(productsPageModule).toBeTruthy();
  });
});
