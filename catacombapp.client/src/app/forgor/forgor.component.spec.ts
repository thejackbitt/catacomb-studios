import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgorComponent } from './forgor.component';

describe('ForgorComponent', () => {
  let component: ForgorComponent;
  let fixture: ComponentFixture<ForgorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
