import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  tags = [
    {key: 'all', value: 'All'},
    {key: 'engineering', value: 'Engeneering'},
    {key: 'books', value: 'Books'}];
  posts$!: Observable<Post[]>;
  constructor(private service: PostsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['tag'] ? this.getAll(params['tag']) : this.getAll();
    })
  }

  getAll(tag?: string): void {
    if (!tag || tag === 'all') this.posts$ = this.service.getAll();
    else {
      this.service.getAll().subscribe(data=> {
        let resp = data.filter(post => post.tag === tag);
        this.posts$ = of(resp);
      })
    }
  }

  getPost(data: Post): void {
    this.router.navigate(['blog', data.id]);
  }

}
