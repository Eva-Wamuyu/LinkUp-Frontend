import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['../login/login.component.css','./resetpassword.component.css',
]
})
export class ResetpasswordComponent {
  message: string = ''
  className:string = ''
  resetPasswordForm: FormGroup


  constructor(private fb: FormBuilder,private api:ApiServiceService,private router:Router) {

    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resetPassword= ()=>{
    if (this.resetPasswordForm.valid){
   console.log()
   this.api.resetPassword(this.resetPasswordForm.value.email).pipe(
     catchError((err:any)=>{
      this.message = err.error.message
      this.className = 'error'
      return []
     })
   ).subscribe(
    res =>{
      this.message = res.message
      this.className = 'success'

      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      },2000);
    }
   )
  }
  else{
    this.message = "Please enter An email address"
    this.className = 'error'
  }





  }



}
