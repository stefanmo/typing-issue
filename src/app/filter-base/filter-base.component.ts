import {Component, Directive, Input} from '@angular/core';

@Directive()
export abstract class FilterBaseComponent<T> {
  @Input() filter?: T;
}
