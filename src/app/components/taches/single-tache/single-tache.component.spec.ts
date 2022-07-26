import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTacheComponent } from './single-tache.component';

describe('SingleTacheComponent', () => {
  let component: SingleTacheComponent;
  let fixture: ComponentFixture<SingleTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
