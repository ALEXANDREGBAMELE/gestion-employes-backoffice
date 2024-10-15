import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() iconLeftClickable: boolean = false;
  @Input() iconRightClickable: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  value: string = '';
  onChange = (value: string) => { };
  onTouch = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Méthodes pour les icônes cliquables
  onIconLeftClick() {
    if (this.iconLeftClickable) {
      console.log('Icône gauche cliquée');
    }
  }

  onIconRightClick() {
    if (this.iconRightClickable) {
      console.log('Icône droite cliquée');
    }
  }

  // Ajouter une méthode pour traiter les changements
  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Spécifiez le type d'élément
    this.value = input.value; // Mettez à jour la valeur
    this.onChange(this.value); // Appelez la fonction onChange
  }
}
