import { TestBed } from '@angular/core/testing';

import { ComponentsLinkerService } from './components-linker.service';

describe('ComponentsLinkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentsLinkerService = TestBed.get(ComponentsLinkerService);
    expect(service).toBeTruthy();
  });
});
