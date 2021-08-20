import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './Error/error-404.component';
import { CourseModule } from './course/course.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      //Rota padrão (root da aplicação)
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      //Rota padrao (link nao existente)
      {
        path: '**', component: Error404Component
      }
      
    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
