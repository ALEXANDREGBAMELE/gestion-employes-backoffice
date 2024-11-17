import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IFormItem } from '../../models/crud/formItem';

@Component({
  selector: 'custom-dynamic-form',
  templateUrl: './custom-dynamic-form.component.html',
})
export class CustomDynamicFormComponent implements OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;
  @Input() formItems: IFormItem[] = [];
  @Input() formControlName: string = ''; // Valeur par défaut pour éviter undefined
  @Input() label: string = '';
  @Input() isRequired: boolean = false;
  @Input() disabled: boolean = false;
  @Input() formData: { [key: string]: any } = {}; // Type explicite
  @Input() isViewDetails: boolean = false;

  @Output() formGroupChange = new EventEmitter<FormGroup>();
  @Output() formValuesChange = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<string>();

  private subscriptions: Subscription = new Subscription();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialisation du FormGroup
    this.formGroup = this.formGroup || this.fb.group({});
    this.initializeForm();

    // Appliquer les valeurs initiales
    if (this.formData) {
      this.patchFormValues(this.formData);
    }

    // Écouter les changements du formulaire
    this.subscriptions.add(
      this.formGroup.valueChanges.subscribe((values) => {
        this.formValuesChange.emit(values);
      })
    );
  }

  ngOnDestroy(): void {
    // Nettoyer les abonnements pour éviter les fuites de mémoire
    this.subscriptions.unsubscribe();
  }

  private initializeForm(): void {
    if (!this.formItems || this.formItems.length === 0) {
      console.warn('Aucun élément de formulaire trouvé dans formItems.');
      return;
    }

    this.formItems.forEach((item) => {
      console.log("Voici item de formItems : ", item);
      console.log("Voici item de formControlName : ", item.formControlName);

      if (!item.formControlName) {
        console.error('formControlName manquant pour un élément :', item);
        return;
      }

      const control = this.fb.control(
        item.value || '',
        item.required ? Validators.required : null
      );

      this.formGroup.addControl(item.formControlName, control);
      console.log("Voici le nouveau formGroup : ", this.formGroup.value);

    });
  }

  private patchFormValues(data: { [key: string]: any }): void {
    this.formGroup.patchValue(data);
  }

  get errorMessage(): string {
    const control = this.formGroup.get(this.formControlName);
    if (control?.hasError('required')) {
      return `${this.label} is required.`;
    }
    return '';
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log('Formulaire soumis avec succès :', this.formGroup.value);
    } else {
      console.error('Le formulaire est invalide :', this.formGroup.value);
    }
  }

  onChange(value: string): void {
    console.log('Valeur changée :', value);
    this.valueChange.emit(value);
  }
}
