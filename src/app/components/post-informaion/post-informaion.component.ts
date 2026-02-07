import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Post,Comment } from 'src/app/services/interfaces';


@Component({
  selector: 'app-post-informaion',
  templateUrl: './post-informaion.component.html',
  styleUrls: ['./post-informaion.component.css',
            '../home/home.component.css']
})
export class PostInformaionComponent implements OnInit{

  constructor(private route: ActivatedRoute, private apiservice: ApiServiceService,
  private auth: AuthServiceService) { }
  post_id!: string;
  showCommentForm: boolean[] = [];
  post: Post | null = null;
  comments: Comment[] = [];
  addComment!: FormGroup
  addSubCommentForm!: FormGroup
  message: string = "";
  className: string = "";
  logged: boolean = false;
  err:boolean = false;
  loading = false;



  toggleReplyForm(index: number) {
    this.showCommentForm = this.showCommentForm.map((_value, i) => i === index);
  }

  cancelReplyForm(index:number) {
    this.showCommentForm[index] = false;
  }

  ngOnInit(): void {
    this.logged = this.auth.credSet().islogged;
    this.getDetails();
    this.addComment = new FormGroup({
      content: new FormControl('', Validators.required),

    })
    this.addSubCommentForm = new FormGroup({
      content: new FormControl('', Validators.required),

    })

  }


  getDetails = ()=>{
    this.loading = true;
    this.post_id = this.route.snapshot.paramMap.get('post_id') || "";
    this.apiservice.fetchPostDetails(this.post_id).pipe(
      catchError((err:Error)=>{

        this.err = true;
        this.loading = false;
        return []
      })
    )
    .subscribe(
      (res) =>{
            this.post = res.post;
            this.comments = res.comments;

            if (res.comments) {
              this.comments = res.comments.map((comment:any) => comment.comment);
            }
            this.loading = false;
        this.showCommentForm = Array(this.comments.length).fill(false);
      }
    )
  }


  submitComment = (post_id: string) => {
    this.apiservice.addComment(post_id, this.addComment.value)
      .pipe(
        catchError((err: any) => {
          this.message = 'Error Occurred: ' + err.message;
          this.className = 'error';
          this.addComment.reset();
          setTimeout(() => {
            this.message = '';

          }, 2000);
          return [];
        })
      )
      .subscribe(data => {
        this.className = 'success';
        this.message = data.message;
        this.addComment.reset();
        setTimeout(() => {
          this.message = '';
        }, 2000);

        this.getDetails();
      });
  }



  submitSubComment = (comment_id: number) => {
    this.apiservice.addSubComment(comment_id, this.addSubCommentForm.value).pipe(
      catchError(error => {
        this.message = error.error.message;
        this.className = 'error';
        this.addSubCommentForm.reset();
        setTimeout(() => {
          this.message = '';
        }, 2000);
        return [];
      })
    ).subscribe(data => {
      this.message = data.message;
      this.className = 'success';
      this.addSubCommentForm.reset();
      setTimeout(() => {
        this.message = '';
      }, 3000);
      this.getDetails()
    });
  }

  setMessage = (data: { message: string, className: string })=>{
    this.message = data.message
    this.className = data.className
    this.getDetails()
  }

  likeFunc=(comment_id:number)=>{
    this.apiservice.likeCommentService(comment_id).pipe(
      catchError((error: any) => {
        if(error.status == 401 || error.status == 403){
          this.message = 'Login To Vote This Up'
          this.className = 'error'
      }
      else{
       this.message = error.error.message || 'An unexpected error occurred';
       this.className = 'error'
      }

        return [];

      })

    ).subscribe(
      res =>{
        this.getDetails()
      }
    )
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }

  getRemainingCharacters(): number {
    const content = document.getElementById('content') as HTMLInputElement;
    return 280 - content.value.length;
  }






















}
