import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
   name: 'replace'
})
export class ReplacePipe implements PipeTransform {
    /**Contract method
     * receives 3 params: data2transform, replaces, replacesBy
     * **/ 

    transform(value: string, replaces: string, replacesBy: string) {
        return value.replace(replaces, replacesBy);

    }
}