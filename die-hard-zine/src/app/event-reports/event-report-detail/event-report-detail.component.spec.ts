import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReportDetailComponent } from './event-report-detail.component';

describe('EventReportDetailComponent', () => {
  let component: EventReportDetailComponent;
  let fixture: ComponentFixture<EventReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
