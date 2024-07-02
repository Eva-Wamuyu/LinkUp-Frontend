import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['../home/home.component.css','../following/following.component.css']
})
export class FollowersComponent {
  message:string = 'followers';
  users: any[] = [];
  searchTerm: string = '';


  constructor(
    private apiservice: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.getFollowers();

  }

  getFollowers = () => {
    this.apiservice
      .fetchUserFollowers()
      .pipe(
        catchError(error => {
          if (error.status == 404) {
            this.users = [];
          } else {
            console.log('Error', error);
          }
          return of(null);
        })
      )
      .subscribe(res => {
        this.users = res.followers || [];
        // console.log(this.users)
      });
  };

  onSearchKeyUp(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

}
