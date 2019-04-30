import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  title = "Others posts";
  posts: any[] = [];

  constructor(private postService:PostService, private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

}
