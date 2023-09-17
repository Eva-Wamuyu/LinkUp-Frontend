export const BASE_URL  = 'http://localhost:3000/'

export interface RegisterDetails{
  usernames: string
  email: string
  password: string
}

export interface LoginDetails{
  emailOrUsername: string
  password: string
}
export interface CreatePost{
  content:string,
  image_url?: string
}

export interface Post extends CreatePost{
  readonly post_id: string,
  readonly username: string,
  created_at: string,
  num_likes: number,
  num_comments: number,
  image_url_post: string,
  image_url_user: string,
  has_liked: boolean,
  comments?: Comment[]

}
export interface Comment{
  comment_id: number,
  content:string,
  created_at: string,
  edited_at?: string,
  username: string,
  has_liked: boolean,
  profile_image: string,
  level_1_comment_id?: string
  likes_count: number,
  subcomments?: Comment[]

}

export interface User{
  username: string
  joined_at: string,
  bio: string,
  profile_image: string,
  follows_user? : boolean,
  readonly user_id: string
}

export interface UserDetails extends User{
  follows?: boolean,
  followed?: boolean,
  followers?: number,
  posts?: number,
  following: number

}

export interface Profile{
  bio: string,
  profile_image?: string

}
export interface Mail{
  email: string
}

export interface Password{
  password: string
}
