import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatisticalComponent } from './list-statistical.component';

describe('ListStatisticalComponent', () => {
  let component: ListStatisticalComponent;
  let fixture: ComponentFixture<ListStatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
