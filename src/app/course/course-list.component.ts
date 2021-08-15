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
    _courses: Course[] = [];
    _filterBy!: string; //used by filter() getter & setter
    filteredCourses: Course[] = []; //To receive real time typping courses from course-list.component.html




    /**INJEÇÃO DE DEPENDENCIA OCORRO ATRAVES DO CONSTRUTOR 
     * Neste caso estamos injectando a classe CourseServices para 
     * trazer a lista de cursos**/
    constructor(private courseService: CourseService){
        
    }

    ngOnInit(): void {
        //popula o array de cursos chamando o metodo retriveAll() da classe injetada
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses //because initially there's nothing filtered

    }

    /** Getter and Setters 
     * get used as output even
     * set used as input even
    **/
    public get filter() : string {
        return this._filterBy;
    }

    
    public set filter(value : string) {
        this._filterBy = value;

        /** Where MAGIC happend - Na atualização da lista de cursos filtrados
         * 
         * = this._courses.filter((course: Course)) ==>percorre todos os cursos, onde
         * => course.name.to.LocaleLowerCase() - converte o curso atual para minuscula
         * .indexOf(this._filteredBy.toLocateLowerCase()) - Converte a string que esta sendo recebi para minuscula, compara e retorna o indice
         * > -1 - Retorna o curso caso exita
         **/
        //this.filteredCousers = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
        this.filteredCourses = this._courses.filter((course: Course) =>course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }
    
    

     
    

}