import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

//Class implements OnInit that requires ngOnInit(): void implementation to start any requirements of this class
export class CourseListComponent implements OnInit {
    //Members class
    courses: Course[] = []; //Members

    ngOnInit(): void {
        //Atribui um array com cursos a serem exibidos
        this.courses = [
            {
                id: 1,
                name:'Angular',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2, 2019',

            },
            {
                id: 2,
                name:'Angular - HPPT',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 18, 2010',
            }
        ]
    }

}