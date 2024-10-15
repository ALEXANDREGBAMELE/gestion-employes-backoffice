import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent {
  @Input() bgColor: 'blue' | 'gray' | 'transparent' = 'blue'; // Couleur du fond paramétrable
  @Input() size: 'small' | 'large' | 'full' = 'small'; // Taille paramétrable
  @Input() borderRadius: 'full' | 'rounded' = 'rounded'; // Bordures paramétrables
  @Input() isDisabled: boolean = false; // Gestion de l'état désactivé
  @Input() isSubmitted: boolean = false; // Bouton de soumission (facultatif)
  @Input() name: string = 'Boutton Name'

  // Génère les classes dynamiques en fonction des paramètres
  getButtonClasses(): string[] {
    let bgClass = '';
    let sizeClass = '';
    let borderRadiusClass = '';

    // Gestion de la couleur de fond
    switch (this.bgColor) {
      case 'blue':
        bgClass = 'bg-blue-500 hover:bg-blue-600 text-white';
        break;
      case 'gray':
        bgClass = 'bg-gray-300 hover:bg-gray-400 text-black';
        break;
      case 'transparent':
        bgClass = 'bg-transparent hover:bg-gray-200 text-black';
        break;
    }

    // Gestion de la taille
    switch (this.size) {
      case 'small':
        sizeClass = 'py-2 px-4 text-sm';
        break;
      case 'large':
        sizeClass = 'py-3 px-6 text-lg';
        break;
      case 'full':
        sizeClass = 'py-2 px-3 w-full text-md';
        break;
    }

    // Gestion des bordures
    switch (this.borderRadius) {
      case 'full':
        borderRadiusClass = 'rounded-full';
        break;
      case 'rounded':
        borderRadiusClass = 'rounded-md';
        break;
    }

    // Classe désactivée
    const disabledClass = this.isDisabled ? 'opacity-50 cursor-not-allowed' : '';

    return [bgClass, sizeClass, borderRadiusClass, disabledClass];
  }

  // Gestion du clic
  handleClick() {
    if (this.isDisabled) {
      return;
    }
    if (this.isSubmitted) {
      // Logique pour la soumission
    }
  }
}
