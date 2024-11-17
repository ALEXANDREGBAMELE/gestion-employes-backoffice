import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'custom-textarea',
  templateUrl: './custom-textarea.component.html',
})
export class CustomTextareaComponent {
  @Input() formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() isRequired: boolean = false;
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<string>();

  get errorMessage(): string {
    const control = this.formGroup.get(this.formControlName);
    if (control?.hasError('required')) {
      return `${this.label} is required.`;
    }
    // Ajoutez ici d'autres messages d'erreur personnalisés si nécessaire
    return '';
  }

  onChange(value: string): void {
    this.valueChange.emit(value);
  }
}