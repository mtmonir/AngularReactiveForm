import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PostsComponent } from './posts/posts.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SignupformComponent } from './signupform/signupform.component';
import { MyformComponent } from './myform/myform.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FavoriteComponent,
    SignupformComponent,
    MyformComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
