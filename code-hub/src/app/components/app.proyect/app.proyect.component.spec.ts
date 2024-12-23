import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProyectComponent } from './app.proyect.component';

describe('AppProyectComponent', () => {
  let component: AppProyectComponent;
  let fixture: ComponentFixture<AppProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProyectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
