import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GonkvillepageComponent } from './gonkvillepage.component';

describe('GonkvillepageComponent', () => {
  let component: GonkvillepageComponent;
  let fixture: ComponentFixture<GonkvillepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GonkvillepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GonkvillepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
