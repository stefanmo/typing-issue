import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-req-bool',
  standalone: true,
  imports: [],
  templateUrl: './req-bool.component.html',
  styleUrl: './req-bool.component.scss'
})
export class ReqBoolComponent {
  @Input() canIt: boolean | null = null;
}
