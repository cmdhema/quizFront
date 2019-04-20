import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizShowListComponent } from './quiz-show-list.component';

describe('QuizShowListComponent', () => {
  let component: QuizShowListComponent;
  let fixture: ComponentFixture<QuizShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
