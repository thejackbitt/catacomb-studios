import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgorconfirmationComponent } from './forgorconfirmation.component';

describe('ForgorconfirmationComponent', () => {
  let component: ForgorconfirmationComponent;
  let fixture: ComponentFixture<ForgorconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgorconfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgorconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
