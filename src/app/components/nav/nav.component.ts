import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  sideMenuOpen: boolean = false;
  showAddPostForm: boolean= false;
  addPostForm!: FormGroup;
  username: string = 'holly'
  logged: boolean = false;

  toggleMenu =()=>{
    this.sideMenuOpen = !this.sideMenuOpen;
  }
  closeSideMenu() {
    this.sideMenuOpen = false;
  }
  showAddPostFormFunc = ()=>{
    this.showAddPostForm = !this.showAddPostForm;
  }
  hideAddPostFormFunc = ()=>{
    this.showAddPostForm =false;
  }

  addPost = ()=>{
    console.log(this.addPostForm.value)

  }





  ngOnInit():void {
    this.addPostForm = new FormGroup({
      content: new FormControl('', ),
      post_img: new FormControl('')
    })

    this.logged = false;

  }



}
