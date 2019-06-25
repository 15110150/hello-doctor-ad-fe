import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStatisticalComponent } from './course-statistical.component';

describe('CourseStatisticalComponent', () => {
  let component: CourseStatisticalComponent;
  let fixture: ComponentFixture<CourseStatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
