import { TestBed } from '@angular/core/testing';

import { UsersHttpRequestService } from './users-http-request.service';

describe('UsersHttpRequestService', () => {
  let service: UsersHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
