import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SurveysListComponent} from './features/survey/components/surveys-list/surveys-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SurveysListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITLens-frontend';
}
