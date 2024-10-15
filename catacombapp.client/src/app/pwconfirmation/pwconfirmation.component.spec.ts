import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwconfirmationComponent } from './pwconfirmation.component';

describe('PwconfirmationComponent', () => {
  let component: PwconfirmationComponent;
  let fixture: ComponentFixture<PwconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PwconfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PwconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
