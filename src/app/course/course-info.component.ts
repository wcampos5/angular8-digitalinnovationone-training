import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "./course";
import { CourseListComponent } from "./course-list.component";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    //Member
    course: Course;
    
    //Injeta a rota ativa na variavel activeRoute
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){

    }

    ngOnInit(): void {

        //Configura o courseId baseado na rota ativa. .paramMap.get('id') refere-se a var id passada no routerLink
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log('Erro: ', err)            
        });



    }
    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved com sucesso!!!', course),
            error: err => console.log('Error: ', err)
        });
    }

}