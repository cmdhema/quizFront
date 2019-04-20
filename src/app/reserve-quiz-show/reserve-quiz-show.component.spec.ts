import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveQuizShowComponent } from './reserve-quiz-show.component';

describe('ReserveQuizShowComponent', () => {
  let component: ReserveQuizShowComponent;
  let fixture: ComponentFixture<ReserveQuizShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveQuizShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveQuizShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
