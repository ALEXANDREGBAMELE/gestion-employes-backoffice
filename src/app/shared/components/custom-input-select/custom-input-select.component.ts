import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input-select',
  templateUrl: './custom-input-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputSelectComponent),
      multi: true
    }
  ]
})
export class CustomInputSelectComponent {
  @Input() options: any[] = []; // Liste des options à sélectionner
  @Input() placeholder: string = 'Select an option';
  @Input() labelKey: string = 'name'; // Clé d'affichage des options (peut être personnalisé)
  @Input() valueKey: string = 'id'; // Clé de valeur des options
  @Input() allowSearch: boolean = false; // Activer ou désactiver la recherche

  filteredOptions: any[] = [];
  searchTerm: string = '';
  selectedOption: any = null;

  isOpen: boolean = false;
  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.options;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  filterOptions() {
    this.filteredOptions = this.options.filter(option =>
      option[this.labelKey].toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.onChange(option[this.valueKey]);
    this.isOpen = false;
  }

  writeValue(value: any): void {
    if (value) {
      this.selectedOption = this.options.find(option => option[this.valueKey] === value);
    } else {
      this.selectedOption = null;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
