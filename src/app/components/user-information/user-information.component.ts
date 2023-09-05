import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  posts!: any[]

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || "";
    console.log(this.logged_user);
    if(this.username == this.logged_user){
      this.viewpost = true;
      this.viewabout = false;
    }
    
    this.posts = [{"post_id":"86c84ab9-6e59-46a9-a93b-e6cd52a0a4bc","username":this.username,"likes":1,"comments":1,"date":"4/26/2023","content":"In congue. Etiam justo. Etiam pretium iaculis justo.","image_url":"http://dummyimage.com/147x100.png/cc0000/ffffff"},
    {"post_id":"be142245-b1bf-45b5-845c-42b42af05ffa","username":this.username,"likes":2,"comments":2,"date":"3/10/2023","content":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","image_url":"http://dummyimage.com/112x100.png/cc0000/ffffff"},
    {"post_id":"de616ece-e0a0-4d74-9d1a-41538fd6bb2d","username":this.username,"likes":3,"comments":3,"date":"4/14/2023","content":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","image_url":"http://dummyimage.com/183x100.png/dddddd/000000"},
    {"post_id":"e770d6d0-0dba-45e7-8ba4-b5ca5d1f39c5","username":this.username,"likes":4,"comments":4,"date":"6/27/2023","content":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","image_url":"http://dummyimage.com/193x100.png/cc0000/ffffff"},
    {"post_id":"6fbe2d41-a399-4e12-b186-2a5a673949ec","username":this.username,"likes":5,"comments":5,"date":"3/18/2023","content":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","image_url":"http://dummyimage.com/139x100.png/dddddd/000000"},
    {"post_id":"0f188836-d18a-4f2c-b3ae-348363ab46d5","username":this.username,"likes":6,"comments":6,"date":"8/13/2023","content":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","image_url":"http://dummyimage.com/155x100.png/ff4444/ffffff"},
    {"post_id":"3d9b20e0-5ee2-41a6-8d24-82f3a275198f","username":this.username,"likes":7,"comments":7,"date":"1/31/2023","content":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","image_url":"http://dummyimage.com/175x100.png/cc0000/ffffff"},
    {"post_id":"9cda2e82-c0aa-4c4e-a50f-154f43a5f8c7","username":this.username,"likes":8,"comments":8,"date":"6/14/2023","content":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","image_url":"http://dummyimage.com/238x100.png/5fa2dd/ffffff"},
    {"post_id":"45647a25-2dd2-49c1-a7c3-742425cf9689","username":this.username,"likes":9,"comments":9,"date":"5/30/2023","content":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","image_url":"http://dummyimage.com/165x100.png/ff4444/ffffff"},
    {"post_id":"ee23d73d-8402-4a48-9566-b0a2923a3983","username":this.username,"likes":10,"comments":10,"date":"7/15/2023","content":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","image_url":"http://dummyimage.com/103x100.png/dddddd/000000"},
    {"post_id":"5bb55a91-36bd-46a8-aa37-bd2ae6acdb2f","username":this.username,"likes":11,"comments":11,"date":"8/22/2023","content":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","image_url":"http://dummyimage.com/118x100.png/dddddd/000000"},]
  }

  showPosts = ()=>{
    this.viewpost = true;
    this.viewabout = false;

  }
  showAbout = ()=>{
    this.viewpost = false;
    this.viewabout = true;
  }


  // posts: any[] = [];

}
