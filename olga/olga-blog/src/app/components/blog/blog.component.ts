import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/state/model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  data: any;

  constructor(
    private service: BlogService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList(): void {
    this.service.getPostsList().subscribe(data => this.data = data);
  }

  getPost(data: Post): void {
    this.router.navigate(['blog', data.id]);
  }
}
