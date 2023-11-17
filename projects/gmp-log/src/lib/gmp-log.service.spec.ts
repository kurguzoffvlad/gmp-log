import { TestBed } from '@angular/core/testing';

import { GmpLogService } from './gmp-log.service';

describe('GmpLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpLogService = TestBed.get(GmpLogService);
    expect(service).toBeTruthy();
  });
});
