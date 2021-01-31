import { TestBed } from '@angular/core/testing';

import { UnSavedAddGrpeCompetenceGuard } from './un-saved-add-grpe-competence.guard';

describe('UnSavedAddGrpeCompetenceGuard', () => {
  let guard: UnSavedAddGrpeCompetenceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnSavedAddGrpeCompetenceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
