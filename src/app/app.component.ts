import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Filter} from "./models";
import {FilterTextComponent} from "./filter-text/filter-text.component";
import {FilterDateComponent} from "./filter-date/filter-date.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  FilterTextComponent, FilterDateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'typing-issue';

  data?: Filter[] | null;
}
