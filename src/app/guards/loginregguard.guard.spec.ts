import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginregguardGuard } from './loginregguard.guard';

describe('loginregguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginregguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
