import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiversityDetailsComponent } from './uiversity-details.component';

describe('UiversityDetailsComponent', () => {
  let component: UiversityDetailsComponent;
  let fixture: ComponentFixture<UiversityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiversityDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiversityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
