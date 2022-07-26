import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsultantComponent } from './new-consultant.component';

describe('NewConsultantComponent', () => {
  let component: NewConsultantComponent;
  let fixture: ComponentFixture<NewConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
