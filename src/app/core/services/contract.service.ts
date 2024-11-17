import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contract } from "src/app/shared/models/contract";


@Injectable({
    providedIn: "root",
})
export class ContractService {
    private http = inject(HttpClient);
    readonly url: string = "http://localhost:3000/contracts";



    getAll(sort?: any): Observable<Contract[]> {
        return this.http.get<Contract[]>(this.url,);
    }

    create(contract: Contract): Observable<Contract> {
        return this.http.post<Contract>(this.url, contract);
    }

    update(contract: Contract): Observable<Contract> {
        return this.http.put<Contract>(`${this.url}/${contract.id}`, contract);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}