import { ProductsPageRoutingModule } from './products-page-routing.module';

describe('ProductsPageRoutingModule', () => {
  let productsPageRoutingModule: ProductsPageRoutingModule;

  beforeEach(() => {
    productsPageRoutingModule = new ProductsPageRoutingModule();
  });

  it('should create an instance of ProductsPageRoutingModule', () => {
    expect(productsPageRoutingModule).toBeTruthy();
  });
});
