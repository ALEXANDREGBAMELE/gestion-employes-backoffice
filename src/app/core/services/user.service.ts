import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/shared/models/user";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private http = inject(HttpClient);
    readonly url: string = "http://localhost:3000/users";



    getAll(sort: any): Observable<User[]> {
        return this.http.get<User[]>(this.url,);
    }

    create(user: User): Observable<User> {
        return this.http.post<User>(this.url, user);
    }

    update(user: User): Observable<User> {
        return this.http.put<User>(`${this.url}/${user.id}`, user);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}