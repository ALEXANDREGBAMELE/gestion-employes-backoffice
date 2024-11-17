import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) { }

    // GET request
    get<T>(url: string, params?: { [param: string]: string | number }, headers?: { [header: string]: string }): Observable<T> {
        const httpHeaders = new HttpHeaders(headers || {});
        const httpParams = new HttpParams({ fromObject: params || {} });

        return this.http.get<T>(url, { headers: httpHeaders, params: httpParams });
    }

    // POST request
    post<T>(url: string, body: any, headers?: { [header: string]: string }): Observable<T> {
        const httpHeaders = new HttpHeaders(headers || {});

        return this.http.post<T>(url, body, { headers: httpHeaders });
    }

    // PUT request
    put<T>(url: string, body: any, headers?: { [header: string]: string }): Observable<T> {
        const httpHeaders = new HttpHeaders(headers || {});

        return this.http.put<T>(url, body, { headers: httpHeaders });
    }

    // PATCH request
    patch<T>(url: string, body: any, headers?: { [header: string]: string }): Observable<T> {
        const httpHeaders = new HttpHeaders(headers || {});

        return this.http.patch<T>(url, body, { headers: httpHeaders });
    }

    // DELETE request
    delete<T>(
        url: string,
        id?: number,
        params?: { [param: string]: string | number },
        headers?: { [header: string]: string }
    ): Observable<T> {
        const httpHeaders = new HttpHeaders(headers || {});
        const httpParams = new HttpParams({ fromObject: params || {} });

        // Ajouter l'ID à l'URL si fourni
        const fullUrl = id ? `${url}/${id}` : url;

        return this.http.delete<T>(fullUrl, { headers: httpHeaders, params: httpParams });
    }

}
