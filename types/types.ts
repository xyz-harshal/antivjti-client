import mongoose from "mongoose"
export type credDataType = {
    email: string,
    password: string
}
export type loginErrorType = {
    email: boolean,
    password: boolean
}

export type tweetsMapDataType = {
    _id: string,
    userID: string,
    post: string,
    username: string,
    img:string,
    upvoteIds: [mongoose.Schema.Types.ObjectId],
    downvoteIds: [mongoose.Schema.Types.ObjectId]
};
export type tweetPostDataType = {
    userId: any,
    post: string,
    img:any
}
export type replyPostDataType = {
    userId: any,
    postId: any,
    reply: string,
    img:any,
    writterId: any
}