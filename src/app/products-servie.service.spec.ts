import { TestBed } from '@angular/core/testing';

import { ProductsServieService } from './products-servie.service';

describe('ProductsServieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsServieService = TestBed.get(ProductsServieService);
    expect(service).toBeTruthy();
  });
});
