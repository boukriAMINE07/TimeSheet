import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConsultantComponent } from './liste-consultant.component';

describe('ListeConsultantComponent', () => {
  let component: ListeConsultantComponent;
  let fixture: ComponentFixture<ListeConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
