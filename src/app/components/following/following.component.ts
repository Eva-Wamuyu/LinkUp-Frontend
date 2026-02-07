import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { catchError, EMPTY, of } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FollowingUser } from 'src/app/services/interfaces';
// import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css',
   '../home/home.component.css']
})
export class FollowingComponent implements OnInit {
  message:string = 'following';
  users: FollowingUser[] = [];
  searchTerm: string = '';

  constructor(
    private apiservice: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.getFollowing();

  }

  getFollowing = () => {
    this.apiservice
      .fetchUserFollowing()
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
        this.users = res.following || [];
      });
  };

  onSearchKeyUp(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}





// let route_type = this.route.snapshot.paramMap.get('route_type') || '';

// switch (route_type) {
//   case 'following':
//     this.getFollowing();
//     this.message = 'following';
//     break;
//   case 'followers':
//     this.getFollowers();
//     this.message = 'followers';
//     break;
//   default:
//     this.router.navigate(['/404']);
//     break;
// }
// }

// getFollowers = () => {
// this.apiservice
//   .fetchUserFollowers()
//   .pipe(
//     catchError(error => {
//       if (error.status == 404) {
//         this.users = [];
//       } else {
//         console.log('Error', error);
//       }
//       return of(null);
//     })
//   )
//   .subscribe(res => {
//     this.users = res.followers || [];
//   });
// };

// getFollowing = () => {
// this.apiservice
//   .fetchUserFollowing()
//   .pipe(
//     catchError(error => {
//       if (error.status == 404) {
//         this.users = [];
//       } else {
//         console.log('Error', error);
//       }
//       return of(null);
//     })
//   )
//   .subscribe(res => {
//     this.users = res.following || [];
//   });
// };
