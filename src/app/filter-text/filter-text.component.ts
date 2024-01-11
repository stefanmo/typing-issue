import {Component, Input} from '@angular/core';
import { FilterText} from "../models";
import {FilterBaseComponent} from "../filter-base/filter-base.component";

@Component({
  selector: 'app-filter-text',
  standalone: true,
  imports: [],
  templateUrl: './filter-text.component.html',
  styleUrl: './filter-text.component.scss'
})
export class FilterTextComponent extends FilterBaseComponent<FilterText> {
}
