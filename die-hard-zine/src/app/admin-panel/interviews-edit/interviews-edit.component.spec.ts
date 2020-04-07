import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsEditComponent } from './interviews-edit.component';

describe('InterviewsEditComponent', () => {
  let component: InterviewsEditComponent;
  let fixture: ComponentFixture<InterviewsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
