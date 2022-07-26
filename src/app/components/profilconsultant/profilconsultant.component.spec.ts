import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilconsultantComponent } from './profilconsultant.component';

describe('ProfilconsultantComponent', () => {
  let component: ProfilconsultantComponent;
  let fixture: ComponentFixture<ProfilconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
