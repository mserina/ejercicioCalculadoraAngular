import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logica',
  standalone: true,
  templateUrl: './logica.component.html',
  styleUrls: ['./logica.component.css']
})
export class LogicaComponent implements OnChanges {
  @Input() valor: string = ''; // Recibe el valor desde `app.component`

  ngOnChanges(changes: SimpleChanges) {
    // Verifica si `valor` ha cambiado
    if (changes['valor']) {
      this.realizarCalculo();
    }
  }

  realizarCalculo() {

    console.log(`Valor para calcular: ${this.valor}`);
    // Lógica para calcular el resultado con el valor recibido
  }
}
