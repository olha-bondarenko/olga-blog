import { Schema, model } from 'mongoose';

export interface Post {
    id: string;
    title: string;
    description: string;
    imageDescription: string;
    imageUrl: string;
    text: string;
    tag: string;
}

export const PostSchema = new Schema<Post>(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        imageUrl: {type: String, required: true},
        imageDescription: {type: String, required: true},
        text: {type: String, required: true},
        tag: {type: String, required: true}
    }, {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const PostModel = model<Post>('post', PostSchema)