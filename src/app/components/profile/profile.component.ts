import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }

  username!: string;

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || "";
    console.log(this.username);
  }

}
