import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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


  ngOnInit():void {
    this.loginForm = new FormGroup({
      username: new FormControl('', ),
      password: new FormControl('')
    })

  }

  loginUser = ()=>{
    console.log(this.loginForm.value)
    this.message = "Logg In Error"
    this.className = "error"
    this.showmessage = true;

  }
}
