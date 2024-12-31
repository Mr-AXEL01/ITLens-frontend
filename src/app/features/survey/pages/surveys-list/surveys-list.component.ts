import {Component, OnInit} from '@angular/core';
import {Survey} from '../../models/survey.model';
import {SurveyService} from '../../survey.service';
import {SurveyItemComponent} from '../../components/survey-item/survey-item.component';
import {NgForOf, NgIf} from '@angular/common';
import {ModalFormComponent} from '../../components/modal-form/modal-form.component';

@Component({
  selector: 'app-surveys-list',
  imports: [
    SurveyItemComponent,
    NgForOf,
    ModalFormComponent,
    NgIf,
  ],
  standalone: true,
  templateUrl: './surveys-list.component.html'
})
export class SurveysListComponent implements OnInit {
  surveys!: Survey[];
  showModal = false;
  modalTitle = '';
  modalData: any = {};
  isUpdate = false;

  constructor(private readonly surveyService: SurveyService) {
  }

  ngOnInit() {
    this.loadSurveys();
  }

  loadSurveys(): void {
    this.surveyService.getAll().subscribe(data => {
      this.surveys = data;
    });
  }

  openCreateModal(): void {
    this.modalTitle = 'Create Survey';
    this.modalData = { title: '', description: '', ownerId: '8f8ee80a-4b69-4439-abb2-3dc1ae863284' };
    this.isUpdate = false;
    this.showModal = true;
  }

  openUpdateModal(survey: Survey): void {
    this.modalTitle = 'Update Survey';
    this.modalData = { ...survey };
    this.isUpdate = true;
    this.showModal = true;
  }

  handleSave(data: any): void {
    if (this.isUpdate) {
      this.surveyService.update(data.id, data).subscribe(() => this.loadSurveys());
    } else {
      this.surveyService.create(data).subscribe(() => this.loadSurveys());
    }
    this.closeModal();
  }

  closeModal(): void {
    this.showModal = false;
    this.modalData = {};
  }

  handleDelete(surveyId: string): void {
    this.surveyService.delete(surveyId).subscribe(() => {
      this.surveys = this.surveys.filter(survey => survey.id !== surveyId);
    });
  }
}
