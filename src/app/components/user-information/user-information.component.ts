import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Post, UserDetails } from 'src/app/services/interfaces';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css',
                '../home/home.component.css',
                '../post-informaion/post-informaion.component.css']
})
export class UserInformationComponent implements OnInit {


  constructor(private route: ActivatedRoute,
    private apiservice: ApiServiceService,
    private router: Router,
    private auth: AuthServiceService) { }
  username!: string;
  viewpost: boolean = false;
  viewabout: boolean = true;
  viewcomments: boolean = false;
  logged_user:string = ''
  posts: Post[] = []
  userInfo? : UserDetails;
  message: string = ''
  className: string = ''
  logged: boolean = false;
  notfound: boolean = false;
  checkingOwnProfile: boolean = false
  comments: any[] = [];




  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || "";
    this.logged = this.auth.credSet().islogged;
    // console.log(this.auth.credSet().username)
    if(this.username == this.auth.credSet().username){
          this.viewpost = true;
          this.viewabout = false;
          this.checkingOwnProfile = true;
          this.showPosts()
          this.fetchComments();
        }
        else{
          this.getAbout();
        }
  }

  showPosts = ()=>{
    this.viewpost = true;
    this.viewabout = false;
    this.viewcomments = false;
    this.loadPosts()

  }
  showAbout = ()=>{
    this.viewpost = false;
    this.viewabout = true;
    this.viewcomments = false;
    this.getAbout()
  }

  getAbout = ()=>{
   this.apiservice.fetchUserDetails(this.username).pipe(
    catchError((error)=>{

      if(error.status == 404){
          this.notfound = true;
      }
      else{
            console.log("Error",error)
      }
      return of(null);
    })).subscribe((res)=>{
      this.userInfo = res.user[0];
    });
    }

    loadPosts = ()=>{
        this.apiservice.fetchUserPosts(this.username).pipe(
          catchError(error => {
            this.message = error.error.message;
            this.className = 'error';
            return [];
          })
          ).subscribe((data)=>{
        this.posts = data.posts;
      });
    }


    setMessage = (data: { message: string, className: string })=>{
      // this.message = data.message
      // this.className = data.className
      this.loadPosts()
   }

   followFunc = (user_id:string)=>{
    //  console.log(user_id)
     this.apiservice.followUserService(user_id).pipe(
      catchError((err:any)=>{
        this.className ='error'
        if(err.status==401 || err.status == 403){
          this.message = "Log In to Follow This User"
        }
        else{
        this.message = err.error.message
        }
        return []
      })

     ).subscribe(
      res => {
        this.message  = res.message
        this.className = "success"
        this.getAbout()
      }
     )
     this.clearError()
   }

   showComments = () => {
    this.viewpost = false;
    this.viewabout = false;
    this.fetchComments();
    this.viewcomments = true;

   }
   fetchComments = ()=>{
    this.apiservice.getUserComments(this.username).pipe(
      catchError((err:any) => {
        return [];
      }
    )).subscribe(res=>{

      this.comments = res.comments;
    })
   }


   editCommentForm!: FormGroup;
   edit: boolean[] = [];
   comment_to_delete: number = 0;

   toggleReplyForm(index: number) {
    this.edit = this.edit.map((_value, i) => i === index);
  }
   showForm(comment:any,i:number){
    this.edit[i] = !this.edit[i];
    this.edit = this.edit.map((_value, index) => index === i);
      this.editComment(comment.content);
   }

   editComment = (content:string)=>{
    this.editCommentForm = new FormGroup({
      content: new FormControl(content),
    })
   }
   sendEditedComment = (comment_id:number,i:number)=>{
    console.log(this.editCommentForm.value)
    this.apiservice.editComment(comment_id,this.editCommentForm.value).pipe(
      catchError((error:any)=>{
        this.message = error.message
        this.className = 'error'
        return []
      })

    ).subscribe(
      res=>{
        this.message = res.message
        this.className = 'success'
        this.edit[i] = false;
        this.fetchComments();

      }
    )
    this.clearError()


   }

   showDialog:boolean = false;
   handleSelection(confirmed: boolean) {
    if (confirmed) {
      this.apiservice.deleteComment(this.comment_to_delete).pipe(
        catchError((err:any)=>{
          this.message = err.message;
          this.className = 'error';
           return []
        })
        ).subscribe(
          res =>{
            this.message = res.message;
            this.className = 'success';
            this.showDialog = false;
            this.clearError();
            this.fetchComments();
          }


      )

    } else {

      this.showDialog = false;
    }
  }

  getPostsByUsername(username: string, all_posts:Post[]): Post[] {
    return all_posts.filter(post => post.username === username);
  }

  getUserDetails(username:string, dummy_users:UserDetails[]){
    this.userInfo = dummy_users.find(user=> user.username === username)
  }

  setDeleteComment = (comment_id:number)=>{
    this.comment_to_delete = comment_id;
    this.showDialog = true;
  }


   getRemainingCharacters(): number {
    const content = document.getElementById('content') as HTMLInputElement;
    return 280 - content.value.length;
  }





clearError = ()=>{
  setTimeout(() => {
    this.message  = ''
    this.className = ""
  }, 3000);
}


  }




