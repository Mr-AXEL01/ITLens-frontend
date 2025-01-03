import {Component, OnInit} from '@angular/core';
import {SurveyEdition} from '../../survey-edition.model';
import {SurveyEditionService} from '../../survey-edition.service';
import {ActivatedRoute} from '@angular/router';
import {Chapter, EmbeddedChapter, Question} from '../../../chapter/chapter.model';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ChapterService} from '../../../chapter/chapter.service';
import {forkJoin} from "rxjs";

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

  constructor(
    private readonly surveyEditionService: SurveyEditionService,
    private readonly chapterService: ChapterService,
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
        this.prepareRootChapters(data.chapters);
      },
      error: (err) => console.error('Failed to load survey-edition ', err),
    });
  }

  private prepareRootChapters(embeddedChapters: EmbeddedChapter[]): void {
    const chapterRequests = embeddedChapters.map((embeddedChapter) =>
      this.chapterService.getById(embeddedChapter.id)
    );

    forkJoin(chapterRequests).subscribe({
      next: (fullChapters) => {
        this.rootChapters = fullChapters.filter(
          (chapter) => !chapter.parentChapter
        );
      },
      error: (err) => console.error('Failed to load chapters', err),
    });
  }

  selectChapter(chapter: Chapter): void {
    this.selectedChapter = chapter;
  }

  selectQuestion(question: Question): void {
    this.selectedQuestion = question;
  }
}
