import { Component, HostListener, OnInit } from '@angular/core';
import { posts } from 'src/dummy/posts';
import { Post } from 'src/services/interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}


  dummyPosts = posts;
  posts: Post[] = [];
  page = 0;
  pageSize = 5;
  loading = true;
  endOfList: boolean = false;

  @HostListener('document:scroll', ['$event'])
  // Smallscreens only as at now
  onScroll($event:Event): void {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const bodyHeight = document.body.offsetHeight;
    const distanceFromBottom = bodyHeight - (scrollY + windowHeight);

    if (distanceFromBottom < 100 && !this.loading) {
      this.loadPosts();
    }
  }

  loadPosts(): void {
    this.loading = true;
    setTimeout(() => {
      const newItems = this.dummyPosts.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize);
      this.posts = [...this.posts, ...newItems];
      this.page++;
      this.loading = false;

    }, 1000);  // Adding a delay to show loading in the case data is fetched from an API
  }

  ngOnInit(): void {
    this.loadPosts();
  }




}
