import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cover-page',
  imports: [],
  templateUrl: './cover-page.component.html',
  styleUrl: './cover-page.component.css'
})
export class CoverPageComponent {
  @Output() avanzarPagina = new EventEmitter<void>();

  onClickAvanzar() {
    this.avanzarPagina.emit();
  }
}
