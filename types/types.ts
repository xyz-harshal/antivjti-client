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
    replies: string[]
    img: string,
    upvoteIds: [mongoose.Schema.Types.ObjectId],
    downvoteIds: [mongoose.Schema.Types.ObjectId]
};
export type postEventDataType = {
    userId: any,
    post: string,
    img: any
}
export type replyPostDataType = {
    userId: any,
    postId: any,
    reply: string,
    img: any,
    writterId: any
}
export interface readEventPropType {
    username: string | undefined;
    img: string | undefined,
    post: string | undefined;
    replies: number | undefined,
    _id: string;
    hier: boolean | undefined;
    upvoteIds: [mongoose.Schema.Types.ObjectId] | undefined;
    downvoteIds: [mongoose.Schema.Types.ObjectId] | undefined;
    isReply: boolean;
}
export type replyDataType = {
    _id: any | undefined;
    userId: string | undefined;
    postId: string | undefined;
    reply: string | undefined;
    replies: number
    img: string,
    writterId: string | undefined;
    writterName: string | undefined;
    upvoteIds: [mongoose.Schema.Types.ObjectId];
    downvoteIds: [mongoose.Schema.Types.ObjectId];
}
export type specificEventDataType = {
    _id: string | any,
    userID: string,
    post: string,
    replies: string[],
    img: any,
    username: string,
    upvoteIds: [mongoose.Schema.Types.ObjectId];
    downvoteIds: [mongoose.Schema.Types.ObjectId];
};