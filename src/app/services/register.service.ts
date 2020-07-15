import { User } from './../models/user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly registrationUrl = 'http://localhost:8080/api/register'

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post(this.registrationUrl, user, {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }





}
