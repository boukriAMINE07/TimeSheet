import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskOfConsultantComponent } from './new-task-of-consultant.component';

describe('NewTaskOfConsultantComponent', () => {
  let component: NewTaskOfConsultantComponent;
  let fixture: ComponentFixture<NewTaskOfConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskOfConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskOfConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
