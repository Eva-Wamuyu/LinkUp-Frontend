import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-informaion',
  templateUrl: './post-informaion.component.html',
  styleUrls: ['./post-informaion.component.css',
            '../home/home.component.css']
})
export class PostInformaionComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }
  post_id!: string;

  ngOnInit(): void {
    this.post_id = this.route.snapshot.paramMap.get('post_id') || "";
    console.log(this.post_id);
  }



  post: any = {"post_id":"30be3fc1-13ee-42ae-8711-62783aa22677",
  "username":"mohdirscoll0","likes":1,"comments":1,"date":"12/26/2022",
  "content":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "image_url":"http://dummyimage.com/122x100.png/5fa2dd/ffffff",
  "comments_list": [ {"post_id":"71bbd631-b1d9-42dd-9de9-c4c993cf6f74","username":"mgravesh","likes":18,"comments":18,"date":"6/7/2023","content":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
  {"post_id":"e3a0573c-b6e0-4b12-83c1-57bf091e9cd4","username":"rwoolandi","likes":19,"comments":19,"date":"2/18/2023","content":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."},
  {"post_id":"12496c91-5ec7-4142-a943-f66d0721248b","username":"gadranj","likes":20,"comments":20,"date":"7/2/2023","content":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.", "child_comments": [
  {"post_id":"71bbd631-b1d9-42dd-9de9-c4c993cf6f74","username":"mgravesh","likes":18,"comments":18,"date":"6/7/2023","content":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
  {"post_id":"e3a0573c-b6e0-4b12-83c1-57bf091e9cd4","username":"rwoolandi","likes":19,"comments":19,"date":"2/18/2023","content":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."},
  ]},
  {"post_id":"e3a0573c-b6e0-4b12-83c1-57bf091e9cd4","username":"rwoolandi","likes":19,"comments":19,"date":"2/18/2023","content":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."},]

  }
  comments_list: any= this.post.comments_list




}
