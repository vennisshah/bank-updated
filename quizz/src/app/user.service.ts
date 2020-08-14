import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url:string;

  constructor(private http:HttpClient) { 
  this.url="http://localhost:8080/registration"
    }
  public adduser(user:User){
    return this.http.post<User>(this.url,user);
  }
}
