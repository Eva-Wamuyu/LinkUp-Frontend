import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './components/post/post.component';
import { FollowingComponent } from './components/following/following.component';
import { HomeComponent } from './components/home/home.component';
import { ConnectComponent } from './components/connect/connect.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostInformaionComponent } from './components/post-informaion/post-informaion.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './components/updatepassword/updatepassword.component';
import { FollowersComponent } from './components/followers/followers.component';
import { SearchPipe } from './directives&Pipes/search.pipe';
import { SortPipe } from './directives&Pipes/sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostComponent,
    FollowingComponent,
    HomeComponent,
    ConnectComponent,
    LoginComponent,
    RegisterComponent,
    PostInformaionComponent,
    UserInformationComponent,
    ProfileComponent,
    NotfoundComponent,
    ResetpasswordComponent,
    UpdatepasswordComponent,
    FollowersComponent,
    SearchPipe,
    SortPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
