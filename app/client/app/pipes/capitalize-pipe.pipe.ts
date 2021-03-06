import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'capitalizePipe'
})
export class CapitalizePipePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }

}
