import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {ActivatedRoute , Router, ParamMap} from '@angular/router';
import { parse } from 'url';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  public posts= [];
  public postID:number;
  public postTitle:string;
  public postContent:string;

  theIndex: number;
  thePost:any = {
    title: '',
    content: ''
  }

  constructor(private postService:PostService ,
              private route:ActivatedRoute , 
              private router:Router) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    if(this.router.url!='/single') {
      this.route.params.subscribe( res => this.loadEditPost(res.id) );
     }
   
    this.route.paramMap.subscribe((params:ParamMap)=>{
       let id = parseInt(params.get('id'));
       this.postID = id;
        this.postTitle = this.posts[id]['title'];
       this.postContent = this.posts[id]['content'];
    });  
  }

  loadEditPost(index: any): void {
    this.theIndex = index;
    this.thePost = this.postService.get(index);    
    // this.theTitle = this.thePost.title;
    // this.theContent = this.thePost.content;
  }

 

  goPrevious(){
    let previousID = this.postID - 1;
    this.router.navigate(['single',previousID]);
  }

  goNext(){
    let nextID = this.postID + 1;
    this.router.navigate(['single',nextID]);
  }

  goToPosts(){
  let selectedID = this.postID ? this.postID : null;
  this.router.navigate(['./allPosts',{id:selectedID}]);
  }

  goEdit(): void {
    this.router.navigate(['addForm',this.postID,'edit']);
  }

  deletePost(): void {
    if(confirm('sure?')) {
      this.postService.delete(this.theIndex);
      this.router.navigate(['']);
      console.log(this.theIndex)
    }
  }

  

}