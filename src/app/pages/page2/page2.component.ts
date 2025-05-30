import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page2',
  imports: [CommonModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css',
  standalone: true
})
export class Page2Component {

  @Output() avanzarPagina = new EventEmitter<void>();
  @Output() retrocederPagina = new EventEmitter<void>();


  onClickAvanzar() {
    this.avanzarPagina.emit();
  }

  onClickRetroceder() {
    this.retrocederPagina.emit();
  }

}
