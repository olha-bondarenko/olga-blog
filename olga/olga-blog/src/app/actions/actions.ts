export class GetPosts {
    static readonly type = '[Blog] Get Posts';
    constructor() {}
}

export class GetPostsFailure {
    static readonly type = '[Blog] Get Posts Failure';
    constructor(public payload: string) {}
}
