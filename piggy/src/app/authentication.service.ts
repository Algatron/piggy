import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { Observable } from "rxjs";


@Injectable()
export class AuthenticationService {

    private readonly URI = 'http://localhost';

    constructor(private httpClient: HttpClient) {
    }

    register(user: User): Observable<Object> {
        return this.httpClient.post(this.URI, user);
    }

}