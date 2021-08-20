import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace.pipe";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { StarComponent } from "./star/star.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
        StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        
        //Rotas
        RouterModule.forChild([
            //Linka a rota root ao component CourseListComponent
            {
                path: 'courses', component: CourseListComponent
            },
            {
                // "/:id" informa ao angular que estamos passando um paramentro
                path: 'courses/info/:id', component: CourseInfoComponent
            }
      
        ])

    ]
})
export class CourseModule {

}