import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTaskOfConsultantComponent } from './single-task-of-consultant.component';

describe('SingleTaskOfConsultantComponent', () => {
  let component: SingleTaskOfConsultantComponent;
  let fixture: ComponentFixture<SingleTaskOfConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTaskOfConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTaskOfConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
