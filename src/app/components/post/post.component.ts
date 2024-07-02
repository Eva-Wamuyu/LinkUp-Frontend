import { Component, EventEmitter, Input, Output } from '@angular/core';
import { catchError } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Post } from 'src/app/services/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private api: ApiServiceService){}
  @Input() post?: Post;
  @Input() canModify:boolean = false;
  @Input() useRouterLink: boolean = true;
  @Input()  showButton: boolean = true;
  @Output() messageShow = new EventEmitter<{message: string,className:string}>();
  showDialog = false;
  post_to_delete: string='';
  message:string='';



  handleSelection(confirmed: boolean) {
    if (confirmed) {
      this.api.deletePost(this.post_to_delete).pipe(
        catchError((err:any)=>{
           return []
        })
        ).subscribe(
          res =>{
            this.messageShow.emit({message:res.message,className:'success'})

            this.showDialog = false;
          }
      )
      this.deletePost('k');
    } else {
      // User canceled the action
      this.showDialog = false;
    }
  }

  deletePost = (post_id:string)=>{
    this.post_to_delete = post_id;
    this.showDialog = true;
  }






  likeFunc=(post_id:string)=>{
    this.api.likePostService(post_id).pipe(
      catchError((error: any) => {
        if(error.status == 401 || error.status == 403){
          this.messageShow.emit({message:'Login To up vote this',className:'error'})
        }
        else{
        const errorMessage = error.error.message || 'An unexpected error occurred';
        this.messageShow.emit({message:errorMessage,className:'error'})
        }
        return [];
      })

    ).subscribe(
      res =>{
        this.messageShow.emit({message:res.message,className:'success'})
      }
    )
    setTimeout(() => {
      this.messageShow.emit({message:'',className:''})
    }, 2000);
  }






  getneratePostUrl(postId: string|undefined): string {
    return `${window.location.origin}/post/${postId}`;
  }

}
