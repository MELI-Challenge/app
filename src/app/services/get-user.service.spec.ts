import { TestBed } from '@angular/core/testing';

import { GetUserService } from './get-user.service';

describe('SetUserService', () => {
  let service: GetUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
