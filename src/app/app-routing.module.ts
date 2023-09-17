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
import { routerGGuard } from './guards/router-g.guard';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './components/updatepassword/updatepassword.component';
import { loginregguardGuard } from './guards/loginregguard.guard';
import { FollowersComponent } from './components/followers/followers.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'post/:post_id', component: PostInformaionComponent},
  {path: 'user/:username', component: UserInformationComponent},
  // {path: 'people/:route_type', component: FollowingComponent,canActivate:[routerGGuard]},
  {path: 'people/following', component: FollowingComponent,canActivate:[routerGGuard]},
  {path: 'people/followers', component: FollowersComponent,canActivate:[routerGGuard]},
  {path: 'users/connect', component: ConnectComponent,canActivate:[routerGGuard]},
  {path: 'auth/login', component: LoginComponent,canActivate:[loginregguardGuard]},
  {path: 'auth/register', component: RegisterComponent,canActivate:[loginregguardGuard]},
  {path: 'settings/profile', component: ProfileComponent,canActivate:[routerGGuard]},
  {path: 'auth/reset/password',component: ResetpasswordComponent},
  {path: 'auth/reset/password/:token',component: UpdatepasswordComponent},
  {path: '**', component: NotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
