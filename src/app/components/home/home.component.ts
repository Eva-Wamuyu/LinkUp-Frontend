import { Component, HostListener, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { posts } from 'src/dummy/posts';
import { Post } from 'src/services/interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private apiservice: ApiServiceService,private auth:AuthServiceService){}
  activeTab: string = 'loadPosts';
  message: string = ''
  className: string = ''
  logged:boolean = false;
  logged_user: string = '';
  selectedOption: string = 'home';

  posts: Post[] = [];

  ngOnInit(): void {
    this.logged = this.auth.credSet().islogged;

    this.loadPosts();
  }
  loadFollowingPosts = ()=>{
     this.posts = [];
     this.activeTab = 'loadFollowingPosts';
  }

  loadPosts = ()=>{
    this.activeTab = 'loadPosts'
    this.apiservice.fetchPosts().subscribe((data)=>{
      this.posts = data.posts
    });
  }

  setMessage = (data: { message: string, className: string })=>{
    //  this.message = data.message
    //  this.className = data.className
     if(this.activeTab == 'loadPosts'){
      this.loadPosts()
     }
     else{
      this.loadFollowingPosts()
     }
  }

  renderPosts = ()=>{

  }

  canModify(post:Post):boolean{
    return post.username == this.auth.checkName()
  }
  shuffledPosts(array: any[]): any[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

}


