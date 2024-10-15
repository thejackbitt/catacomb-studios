import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgorconfirmationpageComponent } from './forgorconfirmationpage.component';

describe('ForgorconfirmationpageComponent', () => {
  let component: ForgorconfirmationpageComponent;
  let fixture: ComponentFixture<ForgorconfirmationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgorconfirmationpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgorconfirmationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
