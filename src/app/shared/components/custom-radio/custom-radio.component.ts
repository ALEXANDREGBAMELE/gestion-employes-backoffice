import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-radio',
  templateUrl: './custom-radio.component.html',
})
export class CustomRadioComponent implements OnInit {
  @Input() options: { label: string; value: any }[] = []; // Liste des options (valeur et label)
  @Input() control!: FormControl; // Contrôle du Reactive Form
  @Input() name: string = ''; // Nom du groupe radio
  @Input() disabled: boolean = false; // Désactiver le groupe
  @Input() radioClass: string = 'tw-border-gray-300 focus:tw-ring-blue-500'; // Classes pour les inputs radio
  @Input() labelClass: string = 'tw-text-gray-700'; // Classes pour les labels

  constructor() { }

  ngOnInit(): void {
    if (!this.control) {
      throw new Error('FormControl is required for custom-radio');
    }
  }
}
