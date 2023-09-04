import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
  '../home/home.component.css']
})
export class ProfileComponent implements OnInit{

  constructor() { }

  editUserInformationForm!: FormGroup;
  username!: string;

  ngOnInit(): void {
    this.editUserInformationForm = new FormGroup({
      user_bio: new FormControl("Intitial Bio"),
      profile_url: new FormControl(''),
    })



  }

  editUserInfoFunc = ()=>{

  }

}
