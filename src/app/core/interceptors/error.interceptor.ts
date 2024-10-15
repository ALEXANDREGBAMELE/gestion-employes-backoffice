import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorNotificationService } from '../services/error-notification.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private errorNotificationService: ErrorNotificationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Erreur côté client
          errorMessage = `Erreur: ${error.error.message}`;
          this.errorNotificationService.showError(errorMessage, 'Erreur Client');
        } else {
          // Erreur côté serveur
          errorMessage = `Code: ${error.status}\nMessage: ${error.message}`;
          this.errorNotificationService.showError(errorMessage, `Erreur Serveur ${error.status}`);
        }

        return throwError(() => error);
      })
    );
  }
}
