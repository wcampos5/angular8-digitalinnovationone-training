import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/Error/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            //Rota padrao (link nao existente)
            {
                path: '**', component: Error404Component
            }
      
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}