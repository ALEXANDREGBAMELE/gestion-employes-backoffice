// <!-- <custom-button label="Valider" [color]="'transparent'" [borderColor]="'tw-border-orange-500'"></custom-button> -->

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent implements OnInit {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() isSubmitted: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth: boolean = false;
  @Input() customClasses: string = '';
  @Input() color: 'orange' | 'black' | 'gray' | 'transparent' = 'orange';
  @Input() borderColor: string = 'border-black';
  @Input() borderRadius: string = 'full'
  constructor() { }

  ngOnInit(): void { }

  // Méthode pour obtenir la classe de taille
  getSizePadding(size: string, isPaddingY: boolean = false): string {
    switch (size) {
      case 'small':
        return isPaddingY ? '1' : '3';
      case 'large':
        return isPaddingY ? '3' : '5';
      default:
        return isPaddingY ? '2' : '4';
    }
  }

  // getButtonClasses(): string[] {
  //   return [
  //     'tw-inline-flex',
  //     'tw-items-center',
  //     'tw-justify-center',
  //     'tw-font-medium',
  //     'tw-rounded',
  //     'tw-transition',
  //     'tw-ease-in-out',
  //     'tw-duration-150',
  //     `tw-px-${this.getSizePadding(this.size)}`,
  //     `tw-py-${this.getSizePadding(this.size, true)}`,
  //     'tw-bg-[#FF3C00]',
  //     'tw-text-white',
  //     this.fullWidth ? 'tw-w-full' : '',
  //     (this.disabled || this.loading) ? 'tw-opacity-50 tw-cursor-not-allowed' : '',
  //     this.customClasses
  //   ]; }

  getButtonClasses(): string {
    const baseClasses = [
      'tw-py-2',
      'tw-px-4',
      'tw-rounded',
      'tw-font-medium',
      'tw-transition',
      'tw-ease-in-out',
      'tw-duration-150',
      'tw-inline-flex',
      'tw-items-center',
      'tw-justify-center',
      `tw-px-${this.getSizePadding(this.size)}`,
      `tw-py-${this.getSizePadding(this.size, true)}`,
      this.fullWidth ? 'tw-w-full' : '',
      this.disabled || this.isSubmitted
        ? 'tw-opacity-60 tw-cursor-not-allowed'
        : '',
      this.customClasses,
    ];

    const colorClasses = {
      orange:
        'bg-blue-900 tw-text-white  hover:tw-bg-blue-800 hover:tw-border-orange-600',
      black:
        'tw-bg-black tw-text-white tw-border tw-border-black hover:tw-bg-gray-900 hover:tw-border-gray-900',
      gray: 'tw-bg-gray-300 tw-text-black tw-border tw-border-gray-300 hover:tw-bg-gray-400 hover:tw-border-gray-400',
      transparent:
        'tw-bg-transparent tw-text-black tw-border tw-border-black hover:tw-bg-gray-100 hover:tw-border-gray-100',
    };

    return [
      ...baseClasses,
      colorClasses[this.color],
      this.borderColor,
      this.customClasses,
      this.borderRadius
    ].join(' ');
  }
}
