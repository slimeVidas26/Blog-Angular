
 import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {Router , ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-allPosts',
  templateUrl: './allPosts.component.html',
  styleUrls: ['./allPosts.component.css']
})
export class AllPostsComponent implements OnInit {
  
 public posts = [];
 public selectedID
  

  constructor(private postService:PostService ,
               private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedID = id;
      
   });
  }

   onSelect(post){
     this.router.navigate(['/single',post.id-1]);
   }

   isSelected(post){
     return post.id=== this.selectedID;
   }

  

}






