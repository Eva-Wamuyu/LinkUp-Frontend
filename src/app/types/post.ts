import { Post, Comment } from "../services/interfaces";

export type FetchPostsResponse =  {
  status: 'ok';
  posts: Post[];            
}

export type  FetchPostResponse = {
    post: Post;
    comments: Comment[];
}

export type AddPostResponse = {
  message: string;
}