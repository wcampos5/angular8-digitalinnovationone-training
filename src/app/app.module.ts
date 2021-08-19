import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { StarComponent } from './course/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './Error/error-404.component';
import { CourseInfoComponent } from './course/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
       //Linka a rota root ao component CourseListComponent
       {
        path: 'courses', component: CourseListComponent
      },
      {
        // "/:id" informa ao angular que estamos passando um paramentro
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      //Rota padrão (root da aplicação)
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
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
