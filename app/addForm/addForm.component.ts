import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addForm',
  templateUrl: './addForm.component.html',
  styleUrls: ['./addForm.component.css']
})
export class AddFormComponent implements OnInit {
  pageTitle: string = 'Add new post';

   thePost: any ;
  theIndex: number = -1;
  theTitle: string = '';
  theContent: string = '';

  constructor(private postService:PostService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
     if(this.router.url!='/single') {
      this.route.params.subscribe( res => this.loadEditPost(res.id) );
     }
  }

  loadEditPost(index: any): void {
    this.pageTitle = 'Edit post';
    this.theIndex = index;
    this.thePost = this.postService.get(index);    
    this.theTitle = this.thePost.title;
    this.theContent = this.thePost.content;
  }

  savePost(): void {
    let t = this.theTitle.trim();
    let c = this.theContent.trim()
    if(t=='' || c=='') {      
      alert('missing data');
    }
    else {
      if(this.theIndex>=0) {
            
        this.thePost.title = t;
        this.thePost.content = c;        
      }
      else {
       
        this.theIndex = this.postService.add(t,c);
      }
      this.router.navigate(['/single',this.theIndex]);
    }
  }

}
