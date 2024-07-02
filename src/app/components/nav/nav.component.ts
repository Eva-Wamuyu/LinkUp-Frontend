import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { UserDetails } from 'src/app/services/interfaces';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { catchError } from 'rxjs';
import { ToggleThemeService } from 'src/app/services/toggle-theme.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  constructor(private api: ApiServiceService,private http: HttpClient,private auth:AuthServiceService,
    private theme:ToggleThemeService){}
  sideMenuOpen: boolean = false;
  showAddPostForm: boolean= false;
  addPostForm!: FormGroup;
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
  logged!: boolean;
  @Input() showPostForm: boolean = true;
  message: string = '';
  imagePreview: string | null = null;
  messageclass!: string;
  mode:string = ''
  loading: string = ''



  toggleMenu =()=>{
    this.sideMenuOpen = !this.sideMenuOpen;
  }
  closeSideMenu() {
    this.sideMenuOpen = false;
  }
  showAddPostFormFunc = ()=>{
    this.showAddPostForm = !this.showAddPostForm;
  }
  hideAddPostFormFunc = ()=>{
    this.showAddPostForm =false;
  }






  ngOnInit():void {

    this.mode = this.theme.setTheme()

    this.addPostForm = new FormGroup({
      content: new FormControl('', Validators.required),
      image_url: new FormControl('')
    })
    if (this.showPostForm === undefined) {
      this.showPostForm = true;
    }


    this.auth.checkToken((loggedIn: boolean,user:string) => {
      if (loggedIn) {
        this.logged = true;
        // this.setCurrentUserEvent.emit({islogged:loggedIn,username:user});
        this.getProfile();
      }
    });
   }

  getProfile = ()=>{
     this.api.getProfile().subscribe(
      (res)=>{
          this.user = res.user;
          // console.log(this.user);
      }
     )

  }
  form: boolean = false;




  cloudinary!: string;

  uploadImage(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (!files){
      // console.log("in the if")
      this.loading = ""
      this.form = true;
      return;
    }
    this.loading = "holu'p uploading ..."
    const cloudname = environment.cloudname;
    this.form = false;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', environment.upload_preset);
    formData.append('cloud_name',cloudname);

    this.http.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, formData).subscribe(
      (response: any) => {
        if (response.secure_url) {
          this.form = false;
          this.loading = "Uploaded"
          this.cloudinary = response.secure_url;
          // console.log(this.cloudinary)

        }

      },
      (error) => {
        console.error('Error uploading image to Cloudinary:', error);
      }
    );


      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(files[0]);
  }

  addPostFunc() {
    const content = this.addPostForm.value.content;
    const image_url = this.cloudinary || null;
    console.log(image_url)
    const post = {
      content,
      image_url,
    };

    this.api.addPost(post).pipe(
      catchError((error:any) => {
        this.message = error.error.message || 'An error occurred';
        this.messageclass = 'error';
        return []
      })

    ).subscribe(
      (data) => {
        this.messageclass = 'success';
        this.message = data.message;
        this.imagePreview = '';
        this.addPostForm.reset();
      }
    );
    setTimeout(() => {
      this.messageclass = '';
      this.message = '';
      this.showAddPostForm = false;
      this.loading = ""
    }, 2000);
  }




  getRemainingCharacters(): number {
    const content = document.getElementById('content') as HTMLInputElement;
    return 350 - content.value.length;
  }

  removeImage(): void {
    const img = document.getElementById('image_url') as HTMLInputElement
    img.value = ''
    this.imagePreview = '';
    this.cloudinary = '';
  }


  logout =()=>{
    this.auth.logout();
    this.logged = false;
    this.message = "Logged Out";
    this.messageclass = 'success'

  }

  setTheme = ()=>{

    this.mode = this.theme.toggleTheme();
    console.log(this.mode)

  }


}
