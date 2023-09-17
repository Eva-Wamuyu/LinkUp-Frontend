import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message: string = '';
  showmessage: boolean = false;
  className!: string;

  constructor(private authService: AuthServiceService, private router: Router){}
  ngOnInit():void {
    this.loginForm = new FormGroup({
      emailOrUsername: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    })

  }

  errorMessages:any  = {
    404: 'Woops, seems You Do Not have An Account',
    403: 'Woops, Password is not correct',
    500: 'Internal Server Error',
  };

  loginUser = ()=>{
    if(this.loginForm.invalid){
      this.message = 'Please enter Both fields'
      this.showmessage = true;
      this.className = 'error';
      setTimeout(() => {
        this.message = ''
        this.showmessage = false;
        this.className = '';
      },3000)

    }
    else{

    this.authService.LoginService(this.loginForm.value).pipe(
      catchError((error: any) => {
        const errorMessage = this.errorMessages[error.status as keyof any] || 'An unexpected error occurred';
        this.message = errorMessage;
        this.className = 'error';
        this.showmessage = true;
        console.log("Error:", error);
        return []
      }))
    .subscribe(
      (res:any) =>{

        this.message = res.message;
        this.showmessage = true;
        if(res.status== 'ok'){
          this.className = 'success';
          localStorage.setItem('token',res.token)
          localStorage.setItem('username',res.user.username)

          this.authService.setLogged(res.user.username);

        setTimeout(() => {
          this.router.navigate(['home']);
        },1000);
      }
    });
  }
}
}
