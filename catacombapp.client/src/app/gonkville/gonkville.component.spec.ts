import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GonkvilleComponent } from './gonkville.component';

describe('GonkvilleComponent', () => {
  let component: GonkvilleComponent;
  let fixture: ComponentFixture<GonkvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GonkvilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GonkvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
