import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/state/model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.less']
})
export class BlogPostComponent implements OnInit {
  post!: Post;
  constructor(
    private service: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPostList(id);
  }

  getPostList(id: number): void {
    this.service.getPostsList()
    .subscribe(data => {
      this.post = data.find((item: Post) => item.id === id);
    });
  }
}
