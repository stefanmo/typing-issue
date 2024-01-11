import {Component, Input} from '@angular/core';
import {FilterDate} from "../models";
import {FilterBaseComponent} from "../filter-base/filter-base.component";

@Component({
  selector: 'app-filter-date',
  standalone: true,
  imports: [],
  templateUrl: './filter-date.component.html',
  styleUrl: './filter-date.component.scss'
})
export class FilterDateComponent extends FilterBaseComponent<FilterDate> {
}
