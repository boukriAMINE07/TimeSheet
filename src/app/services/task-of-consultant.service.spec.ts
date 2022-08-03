import { TestBed } from '@angular/core/testing';

import { TaskOfConsultantService } from './task-of-consultant.service';

describe('TaskOfConsultantService', () => {
  let service: TaskOfConsultantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskOfConsultantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
