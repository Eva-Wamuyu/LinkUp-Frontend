import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routerGGuard } from './router-g.guard';

describe('routerGGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routerGGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
