import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiversityComponent } from './uiversity.component';

describe('UiversityComponent', () => {
  let component: UiversityComponent;
  let fixture: ComponentFixture<UiversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiversityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
