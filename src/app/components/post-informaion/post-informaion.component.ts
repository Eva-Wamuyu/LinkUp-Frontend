import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/dummy/posts';
import { Post,Comment } from 'src/services/interfaces';

@Component({
  selector: 'app-post-informaion',
  templateUrl: './post-informaion.component.html',
  styleUrls: ['./post-informaion.component.css',
            '../home/home.component.css']
})
export class PostInformaionComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }
  post_id!: string;
  showCommentForm: boolean[] = [];

  posts = posts;
  post?: Post;
  comments_list! :Comment[];

  ngOnInit(): void {
    
    this.post_id = this.route.snapshot.paramMap.get('post_id') || "";

    this.post = this.getPostDetails();
    this.comments_list = this.post?.comments_list || [];
    
  }

  getPostDetails(){

    return this.posts.find(post => post.post_id === this.post_id);
  }

  

  toggleReplyForm(index: number) {
    this.showCommentForm = this.showCommentForm.map((_value, i) => i === index);


  }


  cancelReplyForm(index:number) {
    this.showCommentForm[index] = false;

  }




}
