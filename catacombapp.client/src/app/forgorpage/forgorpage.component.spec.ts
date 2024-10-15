import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgorpageComponent } from './forgorpage.component';

describe('ForgorpageComponent', () => {
  let component: ForgorpageComponent;
  let fixture: ComponentFixture<ForgorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgorpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
