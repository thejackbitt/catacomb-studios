import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeemailComponent } from './changeemail.component';

describe('ChangeemailComponent', () => {
  let component: ChangeemailComponent;
  let fixture: ComponentFixture<ChangeemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeemailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
