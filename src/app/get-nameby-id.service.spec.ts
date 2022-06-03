import { TestBed } from '@angular/core/testing';

import { GetNamebyIdService } from './get-nameby-id.service';

describe('GetNamebyIdService', () => {
  let service: GetNamebyIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNamebyIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
