import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-modal',
  templateUrl: './custom-modal.component.html',
})
export class CustomModalComponent {

  @Input() isOpen: boolean = false; // Contrôle l'ouverture du modal
  @Input() header: string = ''; // Titre du modal
  @Input() footerButtons: Array<{ label: string, action: () => void }> = []; // Boutons personnalisés pour le pied de page
  @Output() close = new EventEmitter<void>(); // Événement pour fermer le modal

  // Méthode pour fermer le modal
  onClose() {
    this.close.emit();
  }

}
