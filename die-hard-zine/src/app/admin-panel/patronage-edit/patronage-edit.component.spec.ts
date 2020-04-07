import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronageEditComponent } from './patronage-edit.component';

describe('PatronageEditComponent', () => {
  let component: PatronageEditComponent;
  let fixture: ComponentFixture<PatronageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
