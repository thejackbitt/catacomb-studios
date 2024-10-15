import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwconfirmationpageComponent } from './pwconfirmationpage.component';

describe('PwconfirmationpageComponent', () => {
  let component: PwconfirmationpageComponent;
  let fixture: ComponentFixture<PwconfirmationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PwconfirmationpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PwconfirmationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
