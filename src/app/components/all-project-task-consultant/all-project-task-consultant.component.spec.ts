import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectTaskConsultantComponent } from './all-project-task-consultant.component';

describe('AllProjectTaskConsultantComponent', () => {
  let component: AllProjectTaskConsultantComponent;
  let fixture: ComponentFixture<AllProjectTaskConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProjectTaskConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectTaskConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
