import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Error404Component } from './Error/error-404.component';
import { CourseModule } from './course/course.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
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
