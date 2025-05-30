import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page3',
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  @Output() avanzarPagina = new EventEmitter<void>();
  @Output() retrocederPagina = new EventEmitter<void>();


  onClickAvanzar() {
    this.avanzarPagina.emit();
  }

  onClickRetroceder() {
    this.retrocederPagina.emit();
  }
}
