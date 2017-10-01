import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'followers/:id', component: GithubProfileComponent},
  {path: 'followers', component: GithubFollowersComponent},
  // {path: 'followers/:userName', component: GithubProfileComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    PostsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
