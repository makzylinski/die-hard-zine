import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReportsComponent } from './event-reports.component';

describe('EventReportsComponent', () => {
  let component: EventReportsComponent;
  let fixture: ComponentFixture<EventReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
