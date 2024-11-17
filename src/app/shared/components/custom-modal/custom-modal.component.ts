import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-modal',
  templateUrl: './custom-modal.component.html',
})
export class CustomModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string = 'Default Title';
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() size: 'small' | 'large' | 'extra-large' = 'large'; // Taille par défaut

  close() {
    this.closeModal.emit();
  }

  get modalClass(): string {
    switch (this.size) {
      case 'small':
        return 'tw-w-10/12 sm:tw-w-4/12 md:tw-w-3/12 lg:tw-w-2/12'; // Small pour grands écrans
      case 'large':
        return 'tw-w-10/12 sm:tw-w-8/12 md:tw-w-6/12 lg:tw-w-5/12'; // Large pour grands écrans
      case 'extra-large':
        return 'tw-w-10/12 sm:tw-w-10/12 md:tw-w-8/12 lg:tw-w-6/12'; // Extra-large pour grands écrans
      default:
        return 'tw-w-10/12 sm:tw-w-8/12 md:tw-w-6/12'; // Valeur par défaut
    }
  }

}
