import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

   // Definimos el EventEmitter para enviar el valor del botón pulsado
   @Output() botonPulsado = new EventEmitter<string>();
   @Input() valorImprimir : string = ""; // Recibe el valor desde AppComponent

   

    // Este método emite el valor del botón pulsado
  enviarValor(valor: string) {
    // Solo permitimos números y operadores matemáticos
    const operadoresValidos = ['+', '-', '*', '/'];

    if (valor !== '=' && valor !== 'C' && (valor.match(/[0-9]/) || operadoresValidos.includes(valor))) 
    {
    
      this.valorImprimir += valor; // Solo añade si es un número o un operador válido
      this.botonPulsado.emit(valor); // Emitir el valor para AppComponent
    
    } 
    else if (valor.charAt(valor.length - 1) === 'C') 
    {
      // Si se presiona 'C', limpiar el valor
      this.valorImprimir = '';
      this.botonPulsado.emit(valor); // Emitir 'C' para limpiar si es necesario
    
    }
  }


}
