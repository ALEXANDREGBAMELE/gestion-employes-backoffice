import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ErrorNotificationService {

    constructor(private toastr: ToastrService) { }

    // Notification d'erreur générique
    showError(message: string, title: string = 'Erreur'): void {
        this.toastr.error(message, title, {
            timeOut: 5000, // Durée d'affichage
            closeButton: true, // Bouton de fermeture
            progressBar: true, // Barre de progression
        });
    }

    // Notification de succès
    showSuccess(message: string, title: string = 'Succès'): void {
        this.toastr.success(message, title, {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
        });
    }

    // Notification d'avertissement
    showWarning(message: string, title: string = 'Attention'): void {
        this.toastr.warning(message, title, {
            timeOut: 4000,
            closeButton: true,
            progressBar: true,
        });
    }

    // Notification d'information
    showInfo(message: string, title: string = 'Information'): void {
        this.toastr.info(message, title, {
            timeOut: 4000,
            closeButton: true,
            progressBar: true,
        });
    }
}
