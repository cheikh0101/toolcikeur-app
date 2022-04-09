import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccompagnementComponent } from './components/accompagnement/accompagnement.component';
import { ConnexionComponent } from './components/user/connexion/connexion.component';
import { FormationDetailsComponent } from './components/formation/formation-details/formation-details.component';
import { FormationListComponent } from './components/formation/formation-list/formation-list.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/sensibilisation/post-details/post-details.component';
import { PostsListComponent } from './components/sensibilisation/posts-list/posts-list.component';
import { InscriptionComponent } from './components/user/inscription/inscription.component';
import { AsksListComponent } from './components/echange/asks-list/asks-list.component';
import { AsksDetailsComponent } from './components/echange/asks-details/asks-details.component';

const routes: Routes = [
  { 'path': '', component: HomeComponent },
  {
    'path': 'echange', children: [
      { 'path': 'ask-list', component: AsksListComponent },
      { 'path': 'ask-details', component: AsksDetailsComponent }
    ]
  },
  {
    'path': 'user', children: [
      { 'path': 'connexion', component: ConnexionComponent },
      { 'path': 'inscription', component: InscriptionComponent },

    ]
  },
  { 'path': 'accompagnement', component: AccompagnementComponent },
  {
    path: 'sensibilisation', children: [
      { path: '', component: PostsListComponent },
      { path: 'details', component: PostDetailsComponent },
    ],
  },
  {
    path: 'formation', children: [
      { path: '', component: FormationListComponent },
      { path: 'details', component: FormationDetailsComponent },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
