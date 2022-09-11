import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.less']
})
export class BlogPostComponent implements OnInit {
  post: Post | undefined;
  id!: string;
  constructor(
    private service: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getPost(this.id);
  }

  getPost(id: string): void {
    this.service.getAll()
    .subscribe(data => {
      this.post = data.find((item: Post) => item.id === id);
    });
  }
}
