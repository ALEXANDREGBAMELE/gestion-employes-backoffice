// src/core/services/auth.service.ts
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface AuthResponse {
  token: string;
  expiresIn: number; // Durée de validité du token
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = 'https://your-api-url.com/api'; // Remplacez par l'URL de votre API
  private token: string | null = null;
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient, private router: Router) { }

  // Méthode pour se connecter
  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/login`, { username, password }).pipe(
      tap((response) => {
        this.handleAuthentication(response.token, response.expiresIn);
      }),
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  // Méthode pour s'inscrire
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, { username, password }).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour récupérer le mot de passe
  recoverPassword(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/recover-password`, { email }).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour valider le token
  validateToken(token: string): Observable<any> {
    return this.http.post(`${this.API_URL}/validate-token`, { token }).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour se déconnecter
  logout(): void {
    this.token = null;
    localStorage.removeItem('token'); // Supprimer le token du local storage
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }

  // Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Obtenir le token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Observable pour surveiller l'état de connexion
  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  // Gérer l'authentification
  private handleAuthentication(token: string, expiresIn: number): void {
    this.token = token;
    localStorage.setItem('token', token); // Stocker le token dans le local storage
    this.isLoggedInSubject.next(true);
    // Vous pouvez également stocker l'heure d'expiration ici si nécessaire
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue!';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code d'erreur: ${error.status}, Message: ${error.message}`;
    }
    // Vous pouvez également afficher un message d'erreur ici
    return throwError(errorMessage);
  }
}
