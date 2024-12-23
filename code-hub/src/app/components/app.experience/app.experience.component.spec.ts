import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExperienceComponent } from './app.experience.component';

describe('AppExperienceComponent', () => {
  let component: AppExperienceComponent;
  let fixture: ComponentFixture<AppExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
