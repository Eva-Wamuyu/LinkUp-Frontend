import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, User, UserDetails } from 'src/services/interfaces';
import { posts } from 'src/dummy/posts';
import { users } from 'src/dummy/users';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css',
                '../home/home.component.css']
})
export class UserInformationComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }
  username!: string;
  viewpost: boolean = false;
  viewabout: boolean = true;
  logged_user:string = 'holly'
  posts!: Post[];
  all_posts: Post[] = posts;
  dummy_users: UserDetails[] = users;
  userInfo?: UserDetails;

  

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || "";
   
    
    if(this.username == this.logged_user){
      this.viewpost = true;
      this.viewabout = false;
    }
    this.posts = this.getPostsByUsername(this.username,this.all_posts);
    this.getUserDetails(this.username, this.dummy_users);
    console.log(this.dummy_users)
    console.log(this.userInfo)
    
  }

  showPosts = ()=>{
    this.viewpost = true;
    this.viewabout = false;

  }
  showAbout = ()=>{
    this.viewpost = false;
    this.viewabout = true;
  }

  getPostsByUsername(username: string, all_posts:Post[]): Post[] {
    return all_posts.filter(post => post.username === username);
  }

  getUserDetails(username:string, dummy_users:UserDetails[]){
    this.userInfo = dummy_users.find(user=> user.username === username)
  }

  // posts: any[] = [];

}
