import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronageDetailComponent } from './patronage-detail.component';

describe('PatronageDetailComponent', () => {
  let component: PatronageDetailComponent;
  let fixture: ComponentFixture<PatronageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
