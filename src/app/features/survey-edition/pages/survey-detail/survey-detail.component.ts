import {Component, OnInit} from '@angular/core';
import {SurveyEdition} from '../../survey-edition.model';
import {SurveyEditionService} from '../../survey-edition.service';
import {ActivatedRoute} from '@angular/router';
import {Chapter} from '../../../chapter/chapter.model';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ChapterService} from '../../../chapter/chapter.service';
import {forkJoin} from "rxjs";
import {Question, QuestionType} from '../../../question/question.model';
import {QuestionService} from '../../../question/question.service';

@Component({
  selector: 'app-survey-detail',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './survey-detail.component.html',
})
export class SurveyDetailComponent implements OnInit {
  surveyEdition!: SurveyEdition;
  surveyEditionId!: string;
  rootChapters: Chapter[] = [];
  selectedChapter?: Chapter;
  selectedQuestion?: Question;
  questions?: Question[] = [];
  isLoading = false;

  constructor(
    private readonly surveyEditionService: SurveyEditionService,
    private readonly chapterService: ChapterService,
    private readonly questionService: QuestionService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.surveyEditionId = this.route.snapshot.params["id"];
    this.loadSurveyEdition();
  }

  private loadSurveyEdition(): void {
    this.surveyEditionService.getById(this.surveyEditionId).subscribe({
      next: (data) => {
        this.surveyEdition = data;
        this.rootChapters = this.surveyEdition.chapters;
      },
      error: (err) => console.error('Failed to load survey edition', err),
    });
  }


  selectChapter(chapter: Chapter): void {
    this.selectedQuestion = undefined;
    this.isLoading = true;
    this.questionService.getByChapterId(chapter.id).subscribe({
      next: (data) => {
        this.questions = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch questions for chapter', err);
        this.questions = [];
        this.isLoading = false;
      },
    });
    this.selectedChapter = chapter;
  }


  selectQuestion(question: Question): void {
    this.selectedQuestion = question;
  }
}
