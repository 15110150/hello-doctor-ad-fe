import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUseraccountComponent } from './list-useraccount.component';

describe('ListUseraccountComponent', () => {
  let component: ListUseraccountComponent;
  let fixture: ComponentFixture<ListUseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUseraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
