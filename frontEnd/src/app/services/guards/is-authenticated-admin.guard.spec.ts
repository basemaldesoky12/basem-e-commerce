import { TestBed } from '@angular/core/testing';

import { IsAuthenticatedAdminGuard } from './is-authenticated-admin.guard';

describe('IsAuthenticatedAdminGuard', () => {
  let guard: IsAuthenticatedAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAuthenticatedAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
