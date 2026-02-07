import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FollowingUser } from 'src/app/services/interfaces';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['../home/home.component.css','../following/following.component.css']
})
export class FollowersComponent {
  message:string = 'followers';
  users: FollowingUser[] = [];
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
          return EMPTY;
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
