import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CreatePost, Mail, Post, Profile } from './interfaces';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddPostResponse, FetchPostResponse, FetchPostsResponse } from '../types/post';
import { ConnectResponse, FetchFollowersResponse, FetchFollowingResponse, FetchUserProfileResponse, ProfileResponse } from '../types/user';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }
  private createHttpOptions(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token') || '';
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }


  public get<T>(endpoint: string, options?: { headers: HttpHeaders }): Observable<T> {
    const url = `${environment.BASE_URL}${endpoint}`;
    return this.http.get<T>(url, options || this.createHttpOptions());
  }

  public post<TResponse, TBody>(endpoint: string, body: TBody, options?: { headers: HttpHeaders }): Observable<TResponse> {
    const url = `${environment.BASE_URL}${endpoint}`;
    return this.http.post<TResponse>(url, body, options || this.createHttpOptions());
  }

  public patch<TResponse, TBody>(endpoint: string, body: TBody, options?: { headers: HttpHeaders }): Observable<TResponse> {
    const url = `${environment.BASE_URL}${endpoint}`;
    return this.http.patch<TResponse>(url, body, options || this.createHttpOptions());
  }

  public delete<T>(endpoint: string, options?: { headers: HttpHeaders }): Observable<T> {
    const url = `${environment.BASE_URL}${endpoint}`;
    return this.http.delete<T>(url, options || this.createHttpOptions());
  }

  fetchPosts(): Observable<FetchPostsResponse> {
    return this.get('post');
  }

  fetchPostDetails(post_id: string): Observable<FetchPostResponse> {
    return this.get(`post/${post_id}`);
  }

  fetchUserDetails(username: string): Observable<FetchUserProfileResponse> {
    return this.get(`user/${username}`);
  }

  fetchUserFollowers(): Observable<FetchFollowersResponse> {
    return this.get('follow/followers/users');
  }

  fetchUserFollowing(): Observable<FetchFollowingResponse> {
    return this.get('follow/following/users');
  }

  fetchUsers(): Observable<ConnectResponse> {
    return this.get('user/all/connect');
  }

  fetchUserPosts(username: string): Observable<FetchPostsResponse> {
    return this.get(`post/user/${username}`);
  }

  addPost(post: CreatePost): Observable<AddPostResponse> {
    return this.post('post', post);
  }

  getProfile(): Observable<ProfileResponse> {
    return this.get('user/info/profile');
  }

  editProfile(user_info: Profile): Observable<{message: string}> {
    return this.patch('user/', user_info);
  }

  addComment(post_id: string, commentBody: {content: string}): Observable<{message: string}> {
    return this.post(`post/${post_id}/comment`, commentBody);
  }

  addSubComment(comment_id: number, commentBody: {content: string}): Observable<{message: string}> {
    return this.post(`post/comment/${comment_id}`, commentBody);
  }

  getUserComments(username: string): Observable<{comments: Comment[]}> {
    return this.get(`post/comment/user/${username}`);
  }

  editComment(comment_id: number, content: string): Observable<{message: string}> {
    return this.patch(`post/comment/${comment_id}`, content);
  }

  deleteComment(comment_id: number): Observable<{message: string}> {
    return this.delete(`post/comment/${comment_id}`);
  }

  likePostService(post_id: string): Observable<{message: string}> {
    return this.post(`like/post/${post_id}`, { body: "" });
  }

  likeCommentService(comment_id: number): Observable<{message: string}> {
    return this.post(`like/comment/${comment_id}`, { body: "" });
  }

  followUserService(user_id: string): Observable<{message: string}> {
    return this.post(`follow/${user_id}`, { body: "" });
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

  resetPassword(email: Mail): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {headers};
    return this.http.post(`${environment.BASE_URL}user/auth/reset`, { email }, options);
  }

  updatePassword(token: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post(`${environment.BASE_URL}user/auth/reset/${token}`, { password }, options);
  }

  deletePost(post_id: string): Observable<{message: string}> {
    return this.delete(`post/${post_id}/`);
  }
}


