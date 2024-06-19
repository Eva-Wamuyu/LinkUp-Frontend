import { Component, Input } from '@angular/core';
import { Post } from 'src/services/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post?: Post
  @Input() useRouterLink: boolean = true;
  @Input()  showButton: boolean = true;

  getneratePostUrl(postId: string|undefined): string {
    return `${window.location.origin}/post/${postId}`;
  }

}
