import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {

  @Input() nombre: string = "Anónimo";

  constructor() {}

  ngOnInit(): void {
    // instrucciones previas a la renderizaciones del componente
    console.log("ngOnInit del componente Saludo");
  }

  //*Ejemplo para gestionar un evento de tipo click en el DOM:


}
