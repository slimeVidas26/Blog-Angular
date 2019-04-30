import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  import { LoginComponent } from './login/login.component';
  import { AllPostsComponent } from './allPosts/allPosts.component';
    import { DetailPostComponent } from './detail-post/detail-post.component';

  import { AddFormComponent } from './addForm/addForm.component';
  import { PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'' , redirectTo :'/allPosts', pathMatch : 'full'},
  {path:'login' ,   component : LoginComponent },
  {path:'allPosts' , component:  AllPostsComponent},
  {path:'single/:id' , component:  DetailPostComponent},
  {path:'addForm' , component:  AddFormComponent},
  {path:'addForm/:id/edit' , component:  AddFormComponent},
  {path:'**' , component:  PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponents =[
    LoginComponent ,
     AllPostsComponent ,
     DetailPostComponent,
      AddFormComponent,
       PageNotFoundComponent
      ];
