import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['../login/login.component.css','./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  message: string = ''
  className:string = ''
  updatePasswordForm: FormGroup
  token:string = '';

  constructor(private fb: FormBuilder,private api:ApiServiceService,private router:Router,
    private route: ActivatedRoute) {

    this.updatePasswordForm = this.fb.group({
      password: ['', [Validators.required]]
    });
  }


resetPassword= ()=>{
  this.token = this.route.snapshot.paramMap.get('token') || "";
  if (this.updatePasswordForm.valid){
 console.log()
 this.api.updatePassword(this.token,this.updatePasswordForm.value.password).pipe(
   catchError((err:any)=>{
    this.message = err.error.message
    this.className = 'error'
    return []
   })
 ).subscribe(
   (  res: { message: string; }) =>{
    this.message = res.message
    this.className = 'success'

    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    },2000);
  }
 )
}
else{
  this.message = "Please enter the new password"
  this.className = 'error'
}
}





}

