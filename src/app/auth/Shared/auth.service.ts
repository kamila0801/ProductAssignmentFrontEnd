import { Injectable } from '@angular/core';
import {LoginUser} from "./login.user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenDto} from "./token.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: LoginUser): Observable<TokenDto> {
    return this.http.post<TokenDto>('lol', user);
  }

}
