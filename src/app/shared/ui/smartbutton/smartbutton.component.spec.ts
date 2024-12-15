import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartbuttonComponent } from './smartbutton.component';

describe('SmartbuttonComponent', () => {
  let component: SmartbuttonComponent;
  let fixture: ComponentFixture<SmartbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
