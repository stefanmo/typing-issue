import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Filter } from './models';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterDateComponent } from './filter-date/filter-date.component';
import { DummyService } from './dummy.service';
import { ReqBoolComponent } from './req-bool/req-bool.component';
import {combineLatest, map, Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FilterTextComponent,
    FilterDateComponent,
    ReqBoolComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'typing-issue';

  data?: Filter[] | null;

  canDo$: Observable<boolean> = of(true);
  canDoSmthElse$: Observable<boolean> = of(false);

  canIt$ = combineLatest([
    this.canDo$,
    this.canDoSmthElse$,
  ]).pipe(
    map(([canRaiseException, canEvaluate]) => canRaiseException || canEvaluate),
  );

  constructor(private dummyService: DummyService) {}

  test() {
    if (this.data) {
      for (let filter of this.data) {
        if (filter.type === 'text') {
          console.log(filter);
        }
      }
    }
  }
}
