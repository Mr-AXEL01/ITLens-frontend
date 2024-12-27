import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEditionListComponent } from './survey-edition-list.component';

describe('SurveyEditionListComponent', () => {
  let component: SurveyEditionListComponent;
  let fixture: ComponentFixture<SurveyEditionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyEditionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyEditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
