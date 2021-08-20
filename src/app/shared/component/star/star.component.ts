import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
    
})
/** implenta OnChanges
 * como a entrega via http é assincrona isso garante que se o valor mudar após o carragamento inicial
 * a pagina sera atualizada **/
export class StarComponent implements OnChanges {

    //@Input() -> Expoe nossa variavel externamente a outros compoentes
    @Input()
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        //Proporcao que a DIV sera exibida 
        this.starWidth = this.rating * 74 / 5;
    }

}