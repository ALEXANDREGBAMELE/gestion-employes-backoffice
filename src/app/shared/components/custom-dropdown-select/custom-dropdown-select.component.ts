import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'custom-dropdown-select',
  templateUrl: './custom-dropdown-select.component.html',
  styleUrls: ['./custom-dropdown-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownSelectComponent),
      multi: true,
    },
  ],
})
export class CustomDropdownSelectComponent implements OnInit, ControlValueAccessor {
  @Input() items: { key: string; value: any }[] = []; 
  @Input() placeholder: string = 'Select an option'; 
  @Input() label: string = ''; 
  @Input() required: boolean = false; 
  @Input() disabled: boolean = false; 
  @Input() customClasses: string = ''; 

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>(); 

  isDropdownOpen = false; 
  selectedItem: any = null; 
  selectedKey: string = ''; 

  onTouched: () => void = () => {};
  onChangeFn: (value: any) => void = () => {};

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  // Ouvre ou ferme le dropdown
  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  // Sélectionne un élément (key, value) et émet l'événement de changement
  selectItem(item: { key: string; value: any }): void {
    this.selectedKey = item.key; 
    this.selectedItem = item.value; 
    console.log('Clé sélectionnée :', this.selectedKey); 
    this.isDropdownOpen = false; 
    this.onChange.emit(this.selectedKey); 
    this.onChangeFn(this.selectedKey); 
  }

  // Vérifie si un élément est sélectionné
  isSelected(value: any): boolean {
    return this.selectedItem === value;
  }

  // Gestion du clic en dehors du composant pour fermer le dropdown
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (
      this.isDropdownOpen &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.isDropdownOpen = false;
    }
  }

  // ControlValueAccessor - Écrit la valeur depuis le formulaire
  writeValue(value: any): void {
    const selected = this.items.find(item => item.key === value);
    if (selected) {
      this.selectedItem = selected.value;
      this.selectedKey = selected.key;
    } else {
      this.selectedItem = null;
      this.selectedKey = '';
    }
  }

  // ControlValueAccessor - Enregistre la fonction de changement
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  // ControlValueAccessor - Enregistre la fonction de "touch"
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // ControlValueAccessor - Désactive le composant
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
