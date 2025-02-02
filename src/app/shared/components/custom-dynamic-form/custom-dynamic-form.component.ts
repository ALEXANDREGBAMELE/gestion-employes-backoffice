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
  @Input() isRequired: boolean = false;
  @Input() disabled: boolean = false;
  @Input() formData: { [key: string]: any } = {};
  @Input() isViewDetails: boolean = false;
  @Input() isSubmitted: boolean = false;

  @Output() formGroupChange = new EventEmitter<FormGroup>();
  @Output() formValuesChange = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<string>();
  @Output() isModalOpen = new EventEmitter<boolean>()

  @Output() formSubmit = new EventEmitter<any>();

  private subscriptions: Subscription = new Subscription();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log("Voici la valeur de formData : ", this.formData);
    // Initialisation du FormGroup
    this.formGroup = this.formGroup || this.fb.group({});
    this.initializeForm();

    // Appliquer les valeurs initiales
    if (this.formData) {
      console.log("Voici la valeur de formData : ", this.formData);

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
    //INITIALISATION DU FORMULAIRE DYNAMIQUE
    const controls: any = {};
    this.formItems.forEach((item) => {
      controls[item.name] = [
        item.value || '',
        item.required ? Validators.required : null
      ];
    });
    this.formGroup = this.fb.group(controls);
  }

  // private patchFormValues(data: any): void {
  //   if (!data || typeof data !== 'object') {
  //     console.warn('Les données passées à patchFormValues ne sont pas valides :', data);
  //     return;
  //   }

  //   // Obtenir les noms des contrôles dans le FormGroup
  //   const formControls = Object.keys(this.formGroup.controls);

  //   // Préparer les données à appliquer
  //   const patchData: any = {};

  //   formControls.forEach((controlName) => {
  //     if (data.hasOwnProperty(controlName)) {
  //       const value = data[controlName];
  //       // Assurez-vous que la valeur n'est pas `null` ou `undefined`
  //       patchData[controlName] = value !== null && value !== undefined ? value : '';
  //     }
  //   });

  //   // Appliquer les données mises à jour au FormGroup
  //   this.formGroup.patchValue(patchData);
  // }

  private patchFormValues(data: { [key: string]: any }) {
    this.formGroup.patchValue(data);
  }


  // private patchFormValues(data: Record<string, any>): void {
  //   if (!data || typeof data !== 'object') {
  //     console.warn('Les données passées à patchFormValues ne sont pas valides :', data);
  //     return;
  //   }

  //   Object.keys(data).forEach((key) => {
  //     if (!this.formGroup.contains(key)) {
  //       // Ajouter dynamiquement un contrôle s'il n'existe pas
  //       this.formGroup.addControl(key, this.fb.control(data[key]));
  //     } else {
  //       // Mettre à jour le contrôle existant
  //       this.formGroup.get(key)?.setValue(data[key], { emitEvent: false });
  //     }
  //   });

  //   this.formGroup.updateValueAndValidity({ emitEvent: true });
  // }




  onChange(value: string): void {
    this.valueChange.emit(value);
  }

  onSubmit() {
    this.isSubmitted = true
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup);
      this.isSubmitted = false
    } else {
      console.error('Formulaire invalide');
      this.isSubmitted = false
    }
  }

  onCancel() {
    this.isModalOpen.emit(false)
  }
}
