import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BASE_URL, Mail, Post, Profile } from './interfaces';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }


  fetchPosts():Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}post`,options)
   }

   fetchPostDetails(post_id:string):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}post/${post_id}`,options)
   }

   fetchUserDetails(username:string):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}user/${username}`,options)
   }


   fetchUserFollowers():Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}follow/followers/users`,options)
   }

   fetchUserFollowing():Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}follow/following/users`,options)
   }

   fetchUsers():Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}user/all/connect`,options)
   }

   fetchUserPosts(username:string):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}post/user/${username}`,options)
   }



  addPost(post:any):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.post(`${BASE_URL}post`,post,options)
   }

  getProfile():Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}user/info/profile`,options)
  }

  editProfile(user_info:Profile):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.patch(`${BASE_URL}user/`,user_info,options)

  }


  addComment(post_id:string, commentBody:any):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.post(`${BASE_URL}post/${post_id}/comment`,commentBody,options)
  }

   addSubComment(comment_id:number, commentBody:any):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.post(`${BASE_URL}post/comment/${comment_id}`,commentBody,options)
   }

   getUserComments(username:string):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.get(`${BASE_URL}post/comment/user/${username}`,options)
   }

   editComment(comment_id:number, content:any):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.patch(`${BASE_URL}post/comment/${comment_id}`,content,options)
   }

   deleteComment(comment_id: number):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.delete(`${BASE_URL}post/comment/${comment_id}`,options)
   }

   likePostService(post_id:string):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.post(`${BASE_URL}like/post/${post_id}`,{body:""},options)
   }

   likeCommentService(comment_id:number):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.post(`${BASE_URL}like/comment/${comment_id}`,{body:""},options)
   }

   followUserService(user_id:string):Observable<any>{
    const options = { headers: this.getHeaders() };
    return this.http.post(`${BASE_URL}follow/${user_id}`,{body:""},options)
   }

   uploadImage(file: File): Observable<string> {
    const cloudname = environment.cloudname;
     console.log(file)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', environment.upload_preset);

    return this.http
      .post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, formData)
      .pipe(
        map((response: any) => {
          return response.secure_url;
        }),
        catchError((error) => {
          console.error('Error uploading image to Cloudinary:', error);
          throw error;
        })
      );
      }

      resetPassword(email:Mail): Observable<any>{
        let headers =  new HttpHeaders({
          'Content-Type': 'application/json',
        });
        let options = {headers}
        return this.http.post(`${BASE_URL}user/auth/reset`,{email},options)
      }

      updatePassword(token:string,password:string) : Observable<any>{
        let headers =  new HttpHeaders({
          'Content-Type': 'application/json',
        });
        let options = {headers}
        return this.http.post(`${BASE_URL}user/auth/reset/${token}`,{password},options)
      }



      deletePost(post_id:string): Observable<any>{
        const options = { headers: this.getHeaders() };
        return this.http.delete(`${BASE_URL}post/${post_id}/`,options)
      }




}


