import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccNewComponent } from './acc-new.component';

describe('AccNewComponent', () => {
  let component: AccNewComponent;
  let fixture: ComponentFixture<AccNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
