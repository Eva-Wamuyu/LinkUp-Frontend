import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterDetails, LoginDetails } from './interfaces';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private logged = false;
  private loggedUser = '';


  constructor(private http: HttpClient, private router: Router, private apiService: ApiServiceService) { }

  RegisterService(creds: RegisterDetails): Observable<any> {
    return this.apiService.post('user/auth/register', creds);
  }

  LoginService(creds: LoginDetails): Observable<any> {
    return this.apiService.post('user/auth/login', creds);
  }


  checkToken(callback: (loggedIn: boolean, username: string) => void) {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      this.apiService.post('user/auth/check', {}, { headers }).pipe(
        catchError((err: any) => {
          this.logged = false;
          this.loggedUser = '';
          return [];
        })
      ).subscribe(
        (res: any) => {
          if (res) {
            const username = res.user.username;
            this.setLogged(username);
            callback(this.logged, this.loggedUser);
          } else {
            this.logged = false;
            callback(this.logged,'');
          }
        }
      );
    } else {
      this.logged = false;
      callback(this.logged,'');
    }
  }

  setLogged = (username:string) => {
    this.loggedUser = username
    this.logged = true;
  }


  checkLogged = (): boolean => {
    return this.logged;
  }
  checkName = ():string =>{
    return this.loggedUser;
  }

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.logged = false;
    this.router.navigate(['/auth/login']);
  }

  credSet = ()=>{
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if(token && username){
      this.logged = true;
      return {
        islogged: this.logged,
        username
      }
    }
    return {
      islogged: this.logged,
      username: ''
    }

  }
}
