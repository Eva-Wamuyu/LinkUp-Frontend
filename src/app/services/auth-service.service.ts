import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterDetails, LoginDetails, BASE_URL } from './interfaces';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //BASE_URL = environment.BASE_URL;
  BASE_URL = BASE_URL;
  private logged = false;
  private loggedUser = '';


  constructor(private http: HttpClient,private router: Router) { }

  RegisterService(creds: RegisterDetails): Observable<any> {
    return this.http.post(`${this.BASE_URL}user/auth/register`, creds);
  }

  LoginService(creds: LoginDetails): Observable<any> {
    return this.http.post(`${this.BASE_URL}user/auth/login`, creds);
  }


  checkToken(callback: (loggedIn: boolean,username:string) => void) {
    const token = localStorage.getItem('token');
    if (token) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      this.http.post(`${this.BASE_URL}user/auth/check`, {}, { headers }).pipe(
        catchError((err: any) => {
          this.logged = false;
          this.loggedUser = '';
          return [];
        })
      ).subscribe(
        (res:any) => {

          if (res) {
          let username = res.user.username;
            this.setLogged(username);
            callback(this.logged,this.loggedUser);
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
