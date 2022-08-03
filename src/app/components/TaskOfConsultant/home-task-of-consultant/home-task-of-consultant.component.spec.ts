import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTaskOfConsultantComponent } from './home-task-of-consultant.component';

describe('HomeTaskOfConsultantComponent', () => {
  let component: HomeTaskOfConsultantComponent;
  let fixture: ComponentFixture<HomeTaskOfConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTaskOfConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTaskOfConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
