import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiversityListComponent } from './uiversity-list.component';

describe('UiversityListComponent', () => {
  let component: UiversityListComponent;
  let fixture: ComponentFixture<UiversityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiversityListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiversityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
