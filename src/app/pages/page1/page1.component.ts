import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page1',
  imports: [CommonModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
  standalone: true,
})
export class Page1Component {
  @Output() avanzarPagina = new EventEmitter<void>();
  @Output() retrocederPagina = new EventEmitter<void>();
  @Output() navigateToPage = new EventEmitter<string>(); // Cambiado a string

  onClickAvanzar() {
    this.avanzarPagina.emit();
  }

  onClickRetroceder() {
    this.retrocederPagina.emit();
  }

  navigateTo(checkboxPageId: string) {
    this.navigateToPage.emit(checkboxPageId);
  }
}
