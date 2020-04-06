import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReportsEditComponent } from './event-reports-edit.component';

describe('EventReportsEditComponent', () => {
  let component: EventReportsEditComponent;
  let fixture: ComponentFixture<EventReportsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventReportsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReportsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
