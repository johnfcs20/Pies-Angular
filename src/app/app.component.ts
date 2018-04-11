import { Component } from '@angular/core';
import { resolve } from 'dns';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  nombre=  "Fernando";
  arreglo = [1,2,3,4,5,6,7,8,9,10];

  fecha='2017-01-01';
  PI = Math.PI;

  a: number = 0.234;

  salario = 1234.5;
  video = "T129HRQsed4?list=PLZPrWDz1MolpyHVSfsXez2KGjoM91XQtp";
  heroe = {

    nombre: "Loga",
    clave: "Wolverine",
    edad: 500,

    direccion: {
      calle: "Primera",
      casa: "19"
    }



};

ValorDePromsesa = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve('Llego la data'), 3500);

})

}

