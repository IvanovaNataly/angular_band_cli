//
//
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
//
// import { AppComponent } from './app.component';
// // import {TopHeaderComponent} from './components/topHeader.component';
import { MainContainerComponent } from './components/main.component';
import { SingerCardComponent } from './components/singerCard.component';
import { ImagePreviewComponent} from './components/imagePreview/imagePreview.component';

import UserService from './services/userService';
import BandService from './services/band.service';
import MusicStylesService from './services/musicStyles.service';
import FilterListPipe from './pipes/filterListPipe';
import LazyLoadDirective from './directives/lazyLoad.directive';

//
// @NgModule({
//   declarations: [
//     AppComponent,
//     // TopHeaderComponent,
//     MainContainerComponent,
//     SingerCardComponent,
//     ImagePreviewComponent,
//     /* */
//     FilterListPipe
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//   ],
//   providers: [
//     [UserService]
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingerProfileComponent } from './singer-profile/singer-profile.component';
import { MusicStyleComponent } from './music-style/music-style.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';


const routes = [
    {path: 'posts', component: PostsComponent},
    {path: 'followers/:id', component: GithubProfileComponent},
    {path: 'followers', component: GithubFollowersComponent},
    {path: 'singer', component: SingerProfileComponent},
    {path: 'profile', component: UserProfileComponent},
    {path: 'summary', component: UserSummaryComponent},
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
        NotFoundComponent,
        MainContainerComponent,
        SingerCardComponent,
        ImagePreviewComponent,

        /* */
        FilterListPipe,
        /* */
        LazyLoadDirective,
        SingerProfileComponent,
        MusicStyleComponent,
        UserProfileComponent,
        UserSummaryComponent
        ],
        imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [
        BandService,
        MusicStylesService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
