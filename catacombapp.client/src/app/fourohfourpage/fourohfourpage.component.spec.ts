import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourohfourpageComponent } from './fourohfourpage.component';

describe('FourohfourpageComponent', () => {
  let component: FourohfourpageComponent;
  let fixture: ComponentFixture<FourohfourpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourohfourpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourohfourpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
