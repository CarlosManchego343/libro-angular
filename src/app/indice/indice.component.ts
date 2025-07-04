import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-indice',
  standalone: true,
  imports: [],
  templateUrl: './indice.component.html',
  styleUrl: './indice.component.css'
})
export class IndiceComponent {
  @Output() paginaSeleccionada = new EventEmitter<number>();

  irAPagina(pagina: number) {
    this.paginaSeleccionada.emit(pagina);
  }
}
