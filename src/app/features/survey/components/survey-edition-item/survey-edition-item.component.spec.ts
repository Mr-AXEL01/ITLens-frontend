import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEditionItemComponent } from './survey-edition-item.component';

describe('SurveyEditionItemComponent', () => {
  let component: SurveyEditionItemComponent;
  let fixture: ComponentFixture<SurveyEditionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyEditionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyEditionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
