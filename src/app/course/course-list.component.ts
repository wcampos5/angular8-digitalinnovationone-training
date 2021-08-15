import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

//Class implements OnInit that requires ngOnInit(): void implementation to start any requirements of this class
export class CourseListComponent implements OnInit {
    //Members class
    courses: Course[] = []; //Members

    /**INJEÇÃO DE DEPENDENCIA OCORRO ATRAVES DO CONSTRUTOR 
     * Neste caso estamos injectando a classe CourseServices para 
     * trazer a lista de cursos**/
    constructor(private courseService: CourseService){
        
    }

    ngOnInit(): void {
        //Igualar o array de cursos chamando o metodo retriveAll() da classe injetada
        this.courses = this.courseService.retrieveAll();
    }

}