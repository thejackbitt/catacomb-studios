import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileselectorComponent } from './profileselector.component';

describe('ProfileselectorComponent', () => {
  let component: ProfileselectorComponent;
  let fixture: ComponentFixture<ProfileselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
