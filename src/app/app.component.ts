import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from "./botones/botones.component";
import { LogicaComponent } from "./logica/logica.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonesComponent, LogicaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadoraAngular';

   // Variable para almacenar el valor recibido
   valorRecibido: string = '';

   // Este método maneja el valor recibido del componente hijo
   manejarBotonPulsado(valor: string) {
    debugger;
     this.valorRecibido += valor;
     
   }
}
