import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from './post.service';



import { AppRoutingModule  , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { OthersComponent } from './others/others.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { FooterComponent } from './footer/footer.component';
import { FriendsComponent } from './friends/friends.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    OthersComponent,
    AdvertisingComponent,
    FooterComponent,
    FriendsComponent,
    DetailPostComponent,
    routingComponents,
    MenuComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]

})
export class AppModule { }
