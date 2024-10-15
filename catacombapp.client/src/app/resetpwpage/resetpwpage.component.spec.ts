import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpwpageComponent } from './resetpwpage.component';

describe('ResetpwpageComponent', () => {
  let component: ResetpwpageComponent;
  let fixture: ComponentFixture<ResetpwpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetpwpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetpwpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
