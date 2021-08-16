import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseListComponent } from "./course-list.component";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    //Member
    courseId: number;
    
    //Injeta a rota ativa na variavel activeRoute
    constructor(private activatedRoute: ActivatedRoute){

    }

    ngOnInit(): void {

        //Configura o courseId baseado na rota ativa. .paramMap.get('id') refere-se a var id passada no routerLink
        this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');



    }

}