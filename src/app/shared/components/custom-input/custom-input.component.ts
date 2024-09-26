import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }]
})
export class CustomInputComponent {

// Propriétés d'entrée pour configurer l'input
@Input() placeholder: string = '';           // Placeholder de l'input
@Input() type: string = 'text';              // Type de l'input (text, password, email, etc.)
@Input() iconLeft: string | null = null;     // Icône à gauche
@Input() iconRight: string | null = null;    // Icône à droite
@Input() iconLeftClickable: boolean = false; // L'icône gauche est-elle cliquable ?
@Input() iconRightClickable: boolean = false;// L'icône droite est-elle cliquable ?
@Input() disabled: boolean = false;          // Input désactivé
@Input() required: boolean = false;          // Champ obligatoire

@Output() iconLeftClick = new EventEmitter<void>();  // Événement pour icône gauche
@Output() iconRightClick = new EventEmitter<void>(); // Événement pour icône droite

value: string = '';

// Méthodes pour gérer la valeur de l'input
onChange = (_: any) => {};
onTouch = () => {};

 // Gestion des événements de l'input
 writeValue(value: any): void {
  this.value = value;
}

registerOnChange(fn: any): void {
  this.onChange = fn;
}

registerOnTouched(fn: any): void {
  this.onTouch = fn;
}

setDisabledState(isDisabled: boolean): void {
  this.disabled = isDisabled;
}

// Gestion des clics sur les icônes
onIconLeftClick(): void {
  if (this.iconLeftClickable) {
    this.iconLeftClick.emit();
  }
}

onIconRightClick(): void {
  if (this.iconRightClickable) {
    this.iconRightClick.emit();
  }
}

}
