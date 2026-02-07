import { FollowingUser, User, UserDetails } from "../services/interfaces";

export type FetchUserProfileResponse = {
    //to check express for a response that is not an array
    user: UserDetails[];
}
export type ProfileResponse = {
    user : UserDetails;
}

export type FetchFollowingResponse = {
    following: FollowingUser[];
}
export type FetchFollowersResponse = {
    followers: FollowingUser[];
}
export type ConnectResponse = {
    users: User[];
}