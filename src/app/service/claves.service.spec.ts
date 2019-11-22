import { TestBed } from '@angular/core/testing';

import { ClavesService } from './claves.service';

describe('ClavesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClavesService = TestBed.get(ClavesService);
    expect(service).toBeTruthy();
  });
});
