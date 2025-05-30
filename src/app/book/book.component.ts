import { Component, ViewChild, ElementRef } from '@angular/core';
import { Page1Component } from '../pages/page1/page1.component';
import { Page2Component } from '../pages/page2/page2.component';
import { CommonModule } from '@angular/common';
import { CoverPageComponent } from '../pages/cover-page/cover-page.component';
import { BackCoverComponent } from '../pages/back-cover/back-cover.component';
import { Page3Component } from '../pages/page3/page3.component';

@Component({
  selector: 'app-book',
  imports: [Page1Component, Page2Component, Page3Component, CommonModule, CoverPageComponent, BackCoverComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @ViewChild('coverPageCheckbox', { static: false }) coverCheckbox!: ElementRef<HTMLInputElement>;
  @ViewChild('page1Checkbox', { static: false }) page1Checkbox!: ElementRef<HTMLInputElement>;
  @ViewChild('page2Checkbox', { static: false }) page2Checkbox!: ElementRef<HTMLInputElement>;
  @ViewChild('page3Checkbox', { static: false }) page3Checkbox!: ElementRef<HTMLInputElement>;

  avanzarCoverPage() {
    this.coverCheckbox.nativeElement.checked = true;
  }

  avanzarPage1() {
    this.page1Checkbox.nativeElement.checked = true;
  }

  retrocederPage1() {
    this.page1Checkbox.nativeElement.checked = false;
  }

  avanzarPage2() {
    this.page2Checkbox.nativeElement.checked = true;
  }

  retrocederPage2() {
    this.page2Checkbox.nativeElement.checked = false;
  }

  avanzarPage3() {
    this.page3Checkbox.nativeElement.checked = true;
  }

  retrocederPage3() {
    this.page3Checkbox.nativeElement.checked = false;
  }

  handleNavigation(checkboxId: string) {
    const allPageCheckboxIds = [
      'checkbox-page1',
      'checkbox-page2',
      'checkbox-page3'
    ];

    // Desmarcar todos los checkboxes primero y aplicar lógica inversa
    allPageCheckboxIds.forEach(id => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox) {
        const match = id.match(/\d+/); // Extraer el número de la página del ID
        if (match) {
          const pageNumber = parseInt(match[0], 10); // Convertir a número
          checkbox.checked = pageNumber % 2 !== 0; // Ahora marcamos impares y desmarcamos pares
        }
      }
    });

    // Marcar solo el checkbox seleccionado
    const realCheckbox = document.getElementById(checkboxId) as HTMLInputElement
  }
}
