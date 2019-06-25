import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStatisticalComponent } from './class-statistical.component';

describe('ClassStatisticalComponent', () => {
  let component: ClassStatisticalComponent;
  let fixture: ComponentFixture<ClassStatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassStatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
