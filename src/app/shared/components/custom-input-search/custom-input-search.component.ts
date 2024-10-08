import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input-search',
  templateUrl: './custom-input-search.component.html',
})
export class CustomSearchInputComponent {
  @Input() value?: string | undefined;


}
