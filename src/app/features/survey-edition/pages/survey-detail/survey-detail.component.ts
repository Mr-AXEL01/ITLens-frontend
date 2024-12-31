import {Component, OnInit} from '@angular/core';
import {SurveyEdition} from '../../survey-edition.model';
import {SurveyEditionService} from '../../survey-edition.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-survey-detail',
  standalone: true,
  imports: [],
  templateUrl: './survey-detail.component.html',
})
export class SurveyDetailComponent implements OnInit {
  surveyEdition!: SurveyEdition;
  surveyEditionId!: string;

  constructor(
    private readonly surveyEditionService: SurveyEditionService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.surveyEditionId = this.route.snapshot.params["id"];
    this.loadSurveyEdition();
  }

  private loadSurveyEdition(): void {
    this.surveyEditionService.getById(this.surveyEditionId).subscribe({
      next: (data) => this.surveyEdition = data,
      error: (err) => console.error("Failed to load survey-edition ", err)
    });
  }

}
