import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCheckboxComponent),
      multi: true,
    },
  ],
})
export class CustomCheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() color: string = 'tw-text-blue-900';
  @Input() bgColor: string = 'tw-bg-white';
  @Input() borderColor: string = 'tw-border-gray-300';
  @Input() focusColor: string = 'focus:tw-ring-blue-900';
  @Input() labelColor: string = 'tw-text-gray-700';
  @Input() ringColor: string = 'tw-ring-gray-500';

  // @Input() formControlName!:string ;
  private onChange = (value: any) => { };
  private onTouched = () => { };

  toggleChecked() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onChange(this.checked);
      this.onTouched();
    }
  }

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  constructor() { }

  ngOnInit(): void { }
}
