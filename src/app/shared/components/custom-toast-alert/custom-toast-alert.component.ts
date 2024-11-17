import { Component, Input, OnInit } from '@angular/core';
//import { ToastService } from '../../../core/services/toast.service'
@Component({
  selector: 'custom-toast-alert',
  templateUrl: './custom-toast-alert.component.html',
})
export class CustomToastAlertComponent implements OnInit {
  @Input() message: string = '';
  @Input() type: 'error' | 'success' | 'info' = 'info';
  @Input() isVisible: boolean = false;
  @Input() autoClose: boolean = true;
  @Input() duration: number = 3000;


  private autoCloseTimeout: any;
  private isPaused: boolean = false;

  toastState = { isActive: false, message: '', type: 'info' };

  constructor(
    // private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.startAutoCloseTimer();
  }

  /** Fermer manuellement le toast */
  closeToast(): void {
    this.isVisible = false;
    this.clearAutoCloseTimer();
  }

  /** Démarrer le compte à rebours de fermeture automatique */
  private startAutoCloseTimer(): void {
    this.clearAutoCloseTimer();
    this.autoCloseTimeout = setTimeout(() => {
      if (!this.isPaused) {
        this.isVisible = false;
      }
    }, 3000); // 5 secondes
  }

  /** Stopper le décompte */
  pauseAutoClose(): void {
    this.isPaused = true;
    this.clearAutoCloseTimer();
  }

  /** Reprendre le décompte */
  resumeAutoClose(): void {
    this.isPaused = false;
    this.startAutoCloseTimer();
  }

  /** Effacer le timer */
  private clearAutoCloseTimer(): void {
    if (this.autoCloseTimeout) {
      clearTimeout(this.autoCloseTimeout);
      this.autoCloseTimeout = null;
    }
  }

  ngOnDestroy(): void {
    this.clearAutoCloseTimer();
  }
}
