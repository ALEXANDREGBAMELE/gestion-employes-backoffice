import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent {
  @Input() value?: string | undefined;


}
