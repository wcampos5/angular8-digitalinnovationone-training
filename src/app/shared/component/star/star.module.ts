import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";

@NgModule({
    declarations:[
        StarComponent
    ],
    //Explicita ao Angular que qeremos exportar alguma coisa deste modulo para o modulo que esta sendo importado
    exports:[
        StarComponent
    ]
})
export class StarModule {
    
}