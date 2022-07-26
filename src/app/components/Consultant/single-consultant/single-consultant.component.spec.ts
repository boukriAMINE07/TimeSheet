import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleConsultantComponent } from './single-consultant.component';

describe('SingleConsultantComponent', () => {
  let component: SingleConsultantComponent;
  let fixture: ComponentFixture<SingleConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
