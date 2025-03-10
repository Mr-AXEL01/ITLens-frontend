import { Routes } from '@angular/router';
import {AdminLayoutComponent} from './core/layout/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "surveys",
        loadComponent: () =>
          import("./features/survey/pages/surveys-list/surveys-list.component")
            .then(c => c.SurveysListComponent)
      },
      {
        path: "survey_editions/:id",
        loadComponent: () =>
          import("./features/survey-edition/pages/survey-detail/survey-detail.component")
            .then(c => c.SurveyDetailComponent)
      },
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];
