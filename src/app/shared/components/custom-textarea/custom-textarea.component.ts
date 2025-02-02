// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// @Component({
//   selector: 'custom-textarea',
//   templateUrl: './custom-textarea.component.html',
// })
// export class CustomTextareaComponent {
//   @Input() formGroup!: FormGroup;
//   @Input() formControlName!: string;
//   @Input() placeholder!: string;
//   @Input() label!: string;
//   @Input() isRequired: boolean = false;
//   @Input() disabled: boolean = false;
//   @Output() valueChange = new EventEmitter<string>();

//   get errorMessage(): string {
//     const control = this.formGroup.get(this.formControlName);
//     if (control?.hasError('required')) {
//       return `${this.label} is required.`;
//     }
//     // Ajoutez ici d'autres messages d'erreur personnalisés si nécessaire
//     return '';
//   }

//   onChange(value: string): void {
//     this.valueChange.emit(value);
//   }
// }

// import { CommonModule } from '@angular/common';
// import { Component, Input } from '@angular/core';
// import {
//   AbstractControl,
//   ControlValueAccessor,
//   NG_VALIDATORS,
//   NG_VALUE_ACCESSOR,
//   ValidationErrors,
//   Validator,
// } from '@angular/forms';

// import { first } from 'rxjs';

// import { v4 as uuidv4 } from 'uuid';
// @Component({
//   selector: 'custom-textarea',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './custom-textarea.component.html',
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       multi: true,
//       useExisting: CustomTextareaComponent,
//     },
//     {
//       provide: NG_VALIDATORS,
//       multi: true,
//       useExisting: CustomTextareaComponent,
//     },
//   ],
// })
// export class CustomTextareaComponent
//   implements ControlValueAccessor, Validator {
//   public touched = false;
//   public innerDisabled = false;
//   public innerValue: string = '';
//   public currentInnerErrorMessage = '';
//   public isValid: boolean | null = null;
//   public innerName: string = uuidv4();

//   @Input()
//   public label?: string;

//   @Input()
//   public error?: string;

//   @Input('required')
//   public required: boolean = false;

//   @Input()
//   public placeholder: string = '';

//   @Input()
//   public set value(value: string) {
//     this.innerValue = value;
//   }

//   @Input()
//   set disabled(disabled: boolean) {
//     this.innerDisabled = disabled;
//   }

//   @Input()
//   public errorMessages?: Record<string, string>;

//   public onChange = (value: string) => { };

//   public onTouched = () => { };

//   public onValidate = () => { };

//   public updateValue(event: Event) {
//     this.markAsTouched();

//     if (!this.innerDisabled) {
//       const value: string = (event.target as HTMLInputElement)?.value;
//       this.innerValue = value;
//       this.onChange(value);
//     }
//   }

//   public handleBlur() {
//     this.markAsTouched();
//   }

//   public markAsTouched() {
//     if (!this.touched) {
//       this.onTouched();
//       this.touched = true;
//     }
//   }

//   public writeValue(value: string) {
//     this.innerValue = value;
//   }

//   public registerOnChange(fn: any) {
//     this.onChange = fn;
//   }

//   public registerOnTouched(fn: any) {
//     this.onTouched = fn;
//   }

//   public setDisabledState(disabled: boolean) {
//     this.innerDisabled = this.innerDisabled ?? disabled;
//   }

//   public validate(control: AbstractControl<any, any>): ValidationErrors | null {
//     control.statusChanges.pipe(first()).subscribe(() => {
//       this.currentInnerErrorMessage = '';

//       const errors = control.errors;

//       this.isValid = control.valid;

//       if (
//         this.errorMessages &&
//         control.invalid &&
//         (control.dirty || control.touched)
//       ) {
//         for (const key in errors) {
//           if (this.errorMessages[key]) {
//             this.currentInnerErrorMessage = this.errorMessages[key];
//             break;
//           }
//         }
//       }
//     });

//     return null;
//   }

//   public registerOnValidatorChange(fn: () => void) {
//     this.onValidate = fn;
//   }
// }
