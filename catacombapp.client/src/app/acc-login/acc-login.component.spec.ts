import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccLoginComponent } from './acc-login.component';

describe('AccLoginComponent', () => {
  let component: AccLoginComponent;
  let fixture: ComponentFixture<AccLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
