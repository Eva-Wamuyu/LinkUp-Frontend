import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post: any;
  @Input() useRouterLink: boolean = true;
  @Input()  showButton: boolean = true;

}
