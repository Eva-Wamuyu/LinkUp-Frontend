import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User } from 'src/app/services/interfaces';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css','../home/home.component.css']
})
export class ConnectComponent implements OnInit{
  constructor(private api: ApiServiceService,private auth:AuthServiceService){}
  users!: User[];
  searchTerm: string = '';
  letter: string  = this.auth.credSet().username.substring(0, 1);





  ngOnInit(): void {
    this.fetchUsers();


  }

  fetchUsers = ()=>{
    this.api.fetchUsers().pipe(
      catchError((error: any) => {
        console.log(error.error.message)
        return [];
      })
    ).subscribe((res)=>{
      this.users = res.users;
      // console.log(this.users)

    })
  }

  onSearchKeyUp(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }



}
