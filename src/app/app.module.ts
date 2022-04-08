import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PostsListComponent } from './components/sensibilisation/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/sensibilisation/post-details/post-details.component';
import { PostCommentsComponent } from './components/sensibilisation/post-comments/post-comments.component';
import { AsksListComponent } from './components/echange/asks-list/asks-list.component';
import { AsksDetailsComponent } from './components/echange/asks-details/asks-details.component';
import { RepliesAsksComponent } from './components/echange/replies-asks/replies-asks.component';
import { FormationListComponent } from './components/formation/formation-list/formation-list.component';
import { FormationDetailsComponent } from './components/formation/formation-details/formation-details.component';
import { ConnexionComponent } from './components/user/connexion/connexion.component';
import { InscriptionComponent } from './components/user/inscription/inscription.component';
import { AccompagnementComponent } from './components/accompagnement/accompagnement.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PostsListComponent,
    PostDetailsComponent,
    PostCommentsComponent,
    AsksListComponent,
    AsksDetailsComponent,
    RepliesAsksComponent,
    FormationListComponent,
    FormationDetailsComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
