import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeemailpageComponent } from './changeemailpage.component';

describe('ChangeemailpageComponent', () => {
  let component: ChangeemailpageComponent;
  let fixture: ComponentFixture<ChangeemailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeemailpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeemailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
