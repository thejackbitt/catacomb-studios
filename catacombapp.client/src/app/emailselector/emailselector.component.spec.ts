import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailselectorComponent } from './emailselector.component';

describe('EmailselectorComponent', () => {
  let component: EmailselectorComponent;
  let fixture: ComponentFixture<EmailselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
