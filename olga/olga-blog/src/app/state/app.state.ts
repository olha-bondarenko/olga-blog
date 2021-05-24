import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { GetPosts, GetPostsFailure } from '../actions/actions';
import { BlogService } from '../services/blog.service';
import { Post } from './model';
import { catchError, map, tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

export class PostStateModel {
    posts: Post[] | undefined

}

@State<PostStateModel>({
  name: 'posts',
  defaults: {
      posts: []
  }
})
@Injectable()
export class PostState {
    constructor(private service: BlogService, private store: Store) {}

    @Action(GetPosts)
    getPosts({ patchState, dispatch, getState, setState }: StateContext<PostStateModel>) {
        return this.service.getPostsList()
        .pipe(
            tap((response: any) => {
                patchState({ posts: response });
                dispatch([]);
        }),
            catchError((httpError) => {
            // this.messageService.error(httpError.error.message);
            return dispatch(new GetPostsFailure(httpError));
        })
        );

    }
}
