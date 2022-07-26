import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometachesComponent } from './hometaches.component';

describe('HometachesComponent', () => {
  let component: HometachesComponent;
  let fixture: ComponentFixture<HometachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HometachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HometachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
