import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Survey} from '../../models/survey.model';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-survey-item',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './survey-item.component.html'
})
export class SurveyItemComponent {
  @Input() survey!: Survey;
  @Output() updateSurvey = new EventEmitter<Survey>();
  @Output() deleteSurvey = new EventEmitter<string>();

  onUpdate(): void {
    const updatedSurvey = { ...this.survey };
    this.updateSurvey.emit(updatedSurvey);
  }

  onDelete(): void {
    if (confirm(`Are you sure you want to delete the survey "${this.survey.title}"?`)) {
      this.deleteSurvey.emit(this.survey.id);
    }
  }
}
