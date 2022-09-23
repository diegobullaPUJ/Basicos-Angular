import { Component } from "@angular/core";

@Component({
    selector: 'app-accountant', // Manera como se va a llamar el componente en el HTML que se quiera mostrar.
    templateUrl: './accountant.component.html', 

})
export class AccountantComponent {

    title:string = 'Contador App';  //Asignación a la variable titulo
    number:number = 10;
    base:number = 5;


    accumulate(value:number) {
    this.number += value;
    }

}