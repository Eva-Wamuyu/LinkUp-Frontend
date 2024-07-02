import { TestBed } from '@angular/core/testing';

import { ToggleThemeService } from './toggle-theme.service';

describe('ToggleThemeService', () => {
  let service: ToggleThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
