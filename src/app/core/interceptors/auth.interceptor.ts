import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupère le token d'authentification depuis le stockage local (localStorage, sessionStorage, etc.)
    const token = localStorage.getItem('authToken'); // Par exemple, depuis localStorage

    // Si un token existe, ajoute-le aux en-têtes de la requête
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Ou un autre type de token si nécessaire
        }
      });
    }

    // Continue avec la requête modifiée
    return next.handle(request);
  }
}
