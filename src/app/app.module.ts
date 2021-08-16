import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { StarComponent } from './course/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Error/error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      //Rota padrão (root da aplicação)
      {
        path: '', redirectTo: 'coursers', pathMatch: 'full'
      },
      //Linka a rota root ao component CourseListComponent
      {
        path: 'coursers', component: CourseListComponent
      },
      //Rota padrao (link nao existente)
      {
        path: '**', component: Error404Component
      },
      
    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
