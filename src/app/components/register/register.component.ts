import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'],
  styles: [`
    .form{
      height: 95vh;
    }
  `]
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private authService: AuthServiceService){}
  registerForm!: FormGroup;
  message: string = '';
  showmessage: boolean = false;
  className!: string;


  ngOnInit():void {
    this.createRegisterForm();


  }


  createRegisterForm(){
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email,Validators.required]),
      username: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  registerUser = ()=>{
    if (this.registerForm.invalid) {
      this.message = 'Please enter both fields';
      this.showmessage = true;
      this.className = 'error';
    } else {
      this.authService.RegisterService(this.registerForm.value)
        .pipe(
          catchError((error: any) => {
            const errorMessage = error.error.message || 'An unexpected error occurred';
            this.message = errorMessage;
            this.className = 'error';
            this.showmessage = true;
            // console.log('Error:', error);
            return [];
          })
        )
        .subscribe((res: any) => {
        // console.log(res);
        this.message = res.message;
          this.showmessage = true;
          if (res.status == 'ok') {
            this.className = 'success';
            localStorage.setItem('token', res.token);
            localStorage.setItem('username', res.user.username);
            this.authService.setLogged(res.user.username);

            setTimeout(() => {
              this.router.navigate(['home']);
            }, 2000);
          }
        });
      }
  }

}
