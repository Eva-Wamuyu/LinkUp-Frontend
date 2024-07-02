import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Profile, UserDetails } from 'src/app/services/interfaces';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
  '../home/home.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private api: ApiServiceService) { }

  editUserInformationForm!: FormGroup;
  user: UserDetails = {
    username: "",
    joined_at: "",
    bio: "",
    profile_image:"",
    follows_user : false,
    user_id: "",
    follows: true,
    followed: true,
    followers: 0,
    posts: 0,
    following: 0
  };
  imagePreview: string | null = null;
  cloudinary!: string;
  message!:string;
  messageClass!: string;
  edituser!: Profile;

  ngOnInit(): void {
    this.getProfile();
    this.editUserInformationForm = new FormGroup({
      bio: new FormControl(''),
      profile_image: new FormControl(''),
    })



  }

  editUserInfoFunc = ()=>{

    const fileInput = document.getElementById('profile_image') as HTMLInputElement;
    // console.log(fileInput.files)
    if (fileInput?.files && fileInput.files.length > 0) {
      this.edituser = {
        bio: this.editUserInformationForm.value.bio,
        profile_image: this.cloudinary
      }

    } else {
       this.edituser = {
        bio: this.editUserInformationForm.value.bio,

      }
    }
    // console.log(this.edituser);

    this.api.editProfile(this.edituser).pipe(
      catchError((err:any)=>{
        this.message = err.error.message;
        this.messageClass ='error'

        return []
      }
    ))
    .subscribe(
      data=>{
        this.message = data.message;
        this.messageClass = 'success'

      }
    )
    this.editUserInformationForm.reset();
    this.getProfile();
    setTimeout(() => {
      this.messageClass = ''
      this.message = ''
    }, 2000);

  }

  getProfile = ()=>{
    this.api.getProfile().pipe(
      catchError((error: any) => {

        console.log(error)
        return [];
      })
    ).subscribe(
      res=>{
        this.user = res.user;
        this.editUserInformationForm.setValue({
          bio: this.user.bio,
          profile_image: ''
        });
      }
    )
  }

  uploadImageF(event: any) {
    console.log(event)
    const target = event.target! as HTMLInputElement
    const files = target.files;
    if (!files) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(files[0]);
    this.api.uploadImage(files[0]).subscribe(
      (cloudinaryUrl) => {

        this.cloudinary = cloudinaryUrl;

      },
      (error) => {
        console.log(error)
      }
    );
  }




}
