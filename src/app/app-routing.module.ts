import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/sensibilisation/post-details/post-details.component';
import { PostsListComponent } from './components/sensibilisation/posts-list/posts-list.component';

const routes: Routes = [
  { 'path': '', component: HomeComponent },
  {
      path: 'sensibilisation', children: [
        { path: '', component: PostsListComponent },
        { path: 'details', component: PostDetailsComponent },
      ],
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
