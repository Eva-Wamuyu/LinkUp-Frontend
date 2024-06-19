import { Component } from '@angular/core';
import { users } from 'src/dummy/users';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css','../home/home.component.css']
})
export class ConnectComponent {

  users = users;
  

 

}
