import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-search-input',
  templateUrl: './custom-search-input.component.html',
  styleUrls: ['./custom-search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSearchInputComponent),
      multi: true
    }
  ]
})
export class CustomSearchInputComponent implements ControlValueAccessor, OnInit {

  @Input() placeholder: string = 'Search...';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false; // Option pour l'input en pleine largeur
  @Input() customClasses: string = ''; // Classes CSS personnalisées
  @Input() formControlName: string = ''; // Si utilisé dans un formulaire réactif
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() formGroup: FormGroup = new FormGroup({});
  // OnChange & OnTouch callbacks pour ControlValueAccessor
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  // Méthode appelée lorsque la valeur change
  onSearchChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.onChange(this.value); // Appelle la méthode onChange pour informer Angular du changement de valeur
    this.valueChange.emit(this.value); // Émet l'événement valueChange vers le parent
  }

  // Implémentation de writeValue pour ControlValueAccessor
  writeValue(value: string): void {
    this.value = value || '';
  }

  // Enregistre une fonction de callback pour onChange
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Enregistre une fonction de callback pour onTouch
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Gérer l'état disabled de l'input
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
