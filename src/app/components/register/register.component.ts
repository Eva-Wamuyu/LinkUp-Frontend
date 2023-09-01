import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  message: string = '';
  showmessage: boolean = false;
  className!: string;

  ngOnInit():void {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.email),
      username: new FormControl('', ),
      password: new FormControl('')
    })

  }

  registerUser = ()=>{
    this.message = "Registration Successfull! Welcome Wanderer!";
    console.log(this.registerForm.value)
    this.showmessage = true;
    this.className = "success"
  }

}
