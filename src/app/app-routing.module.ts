import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowingComponent } from './components/following/following.component';
import { HomeComponent } from './components/home/home.component';
import { ConnectComponent } from './components/connect/connect.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostInformaionComponent } from './components/post-informaion/post-informaion.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'post/:post_id', component: PostInformaionComponent},
  {path: 'user/:username', component: UserInformationComponent},
  {path: 'people/:route_type', component: FollowingComponent},
  {path: 'users/connect', component: ConnectComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'settings/profile', component: ProfileComponent},
  {path: '**', component: NotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
