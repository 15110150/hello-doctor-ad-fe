import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStatisticalComponent } from './student-statistical.component';

describe('StudentStatisticalComponent', () => {
  let component: StudentStatisticalComponent;
  let fixture: ComponentFixture<StudentStatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentStatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
