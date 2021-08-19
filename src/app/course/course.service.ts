import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";


/** @Injectable Torna aclasse elegivel a injeção de dependencia */
@Injectable({
    /** providedIn
     * Faz com que seja carregado no 'root' da aplicação, no caso o app.module.ts
     */
     providedIn: 'root'
})
export class CourseService {

    /**
     * Service class should NOT habe variables that changes in the service methods
     * It should have only constant VARIABLES or methods that execute some or call other methods
     */

    //Class Members
    private courseUrl: string = 'http://localhost:3100/api/courses';

    //Injeção do HttpClient
    constructor(private httpCliente: HttpClient){

    }

    //Method to return the below created array course
    retrieveAll(): Observable<Course[]> {
        /**
         * httpCliente sempre retorna um tipo Observable
         * Ele é ASSINCRONO
         * Aqui nos definimos o contrato com o Observable no component precisamos nos subscrever senão na funcionará
         **/

        return this.httpCliente.get<Course[]>(this.courseUrl);
    }

    //Return based on Id
    retrieveById(id: number): Observable<Course> {
        //Chama o get do HttpClient passando o id na Url
        return this.httpCliente.get<Course>(`${this.courseUrl}/${id}`);
    }

    save(course: Course): Observable<Course> {
        //Se o id existe usamos put para alterar, caso contrario o post para enviar.
        if (course.id){
            //Pega o indice do array
            //const index = COURSES.findIndex((courseItereator: Course) => courseItereator.id === course.id);
            //put -> enviar a url e o body, que no caso é nosso curso
            return this.httpCliente.put<Course>(`${this.courseUrl}/${course.id}`, course);
            this.retrieveAll();
        } else {
            //post ->envia a url e o curso
            return this,this.httpCliente.post<Course>(this.courseUrl, course)
            this.retrieveAll();
        }
    }

    deleteById(id: number): Observable<any> {
        return this.httpCliente.delete<any>(`${this.courseUrl}/${id}`);
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'December 8, 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];