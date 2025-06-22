import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-input-search',
  templateUrl: './custom-input-search.component.html',
})
export class CustomSearchInputComponent {
  @Input() control!: FormControl;
  @Input() placeholder?: string | undefined;

  @Output() keyUp = new EventEmitter<string>();

  onKeyUp(event: KeyboardEvent) {
    this.keyUp.emit(this.control.value);

    console.log(event);

  }


}
