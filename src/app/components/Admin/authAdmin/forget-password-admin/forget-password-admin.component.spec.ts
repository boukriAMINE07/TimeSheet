import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordAdminComponent } from './forget-password-admin.component';

describe('ForgetPasswordAdminComponent', () => {
  let component: ForgetPasswordAdminComponent;
  let fixture: ComponentFixture<ForgetPasswordAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
