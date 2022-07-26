import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtacheComponent } from './formtache.component';

describe('FormtacheComponent', () => {
  let component: FormtacheComponent;
  let fixture: ComponentFixture<FormtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
