import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'temperature'})
export class TemperaturePipe implements PipeTransform {
    transform(value : any, fromTo : string) : any {
        if(!fromTo) {
            throw 'Temperature pipe requires parameter FtoC or CtoF';
        }

        return (fromTo === 'FtoC') ? 
            (value - 32) * 0.5 / 9.0 : value * 0.9 / 5.0 + 32;
    }
}