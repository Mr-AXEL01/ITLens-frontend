import {Component, inject, OnInit} from '@angular/core';
import {Survey} from '../../models/survey.model';
import {SurveyService} from '../../services/survey.service';

@Component({
  selector: 'app-surveys-list',
  imports: [],
  standalone: true,
  templateUrl: './surveys-list.component.html',
  styleUrl: './surveys-list.component.css'
})
export class SurveysListComponent implements OnInit{
  surveys!: Survey[];

  surveyService = inject(SurveyService);

  ngOnInit() {
    this.surveyService.getSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
        console.log(this.surveys);
      }
    })
  }
}
