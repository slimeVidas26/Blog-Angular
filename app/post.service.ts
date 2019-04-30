import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: any = [
    {id :1 ,
      title :'A beautiful place for Thinkers and Dreamers' ,
      content :'Behaviour we improving at something to. Evil true high lady roof men had open. To projection considered it precaution an melancholy or. Wound young you thing worse along being ham. Dissimilar of favourable solicitude if sympathize middletons at. Himself he fertile chicken perhaps waiting if highest plenty secure had.' },
    
      {id :2 ,
      title :'A Weekend in London with my Best Friends' ,
      content :'Next it draw in draw much bred.To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance.' },
    
      {id :3 ,
      title :'My very Minimal Interior Workplace Design' ,
      content :'Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of.' },
    
      {id :4 ,
      title :'How to care about lovely spring plants?' ,
      content :'Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves. It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up.' },
    
      {id :5 ,
      title :'My creative stories about Morning Hours' ,
      content :'Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessing he it me to domestic.' }
      ];

  constructor() { }

  getAllPosts(): any{
    return this.posts;
  }

  get(index:number): any {
    return this.posts[index] ? this.posts[index] : [];    
  }

  add(title:string,content:string): number {
    this.posts.push({
      id:  this.posts.length+1,
      title: title,
      content: content
    });
    return this.posts.length-1;
  }


  delete(index:number): void {
    if(this.posts[index]) {
      this.posts.splice(this.posts.length-1,index);
    }
  }
}
