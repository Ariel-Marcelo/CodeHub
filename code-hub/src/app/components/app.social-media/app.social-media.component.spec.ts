import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSocialMediaComponent } from './app.social-media.component';

describe('AppSocialMediaComponent', () => {
  let component: AppSocialMediaComponent;
  let fixture: ComponentFixture<AppSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSocialMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
