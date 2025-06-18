import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PageFlip } from 'page-flip';
import { PortadaComponent } from '../portada/portada.component';
import { IndiceComponent } from '../indice/indice.component';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
import { ContraportadaComponent } from '../contraportada/contraportada.component';

@Component({
  selector: 'app-book',
  imports: [PortadaComponent, IndiceComponent, Page1Component, Page2Component, Page3Component, ContraportadaComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  @ViewChild('book') bookContainer!: ElementRef;
  pageFlip!: any;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.pageFlip = new PageFlip(this.bookContainer.nativeElement, {
        width: 300,
        height: 400,
        showCover: true,
        maxShadowOpacity: 0.5,
        useMouseEvents: true,
        mobileScrollSupport: false,
      });

      this.pageFlip.loadFromHTML(document.querySelectorAll('.my-page') as NodeListOf<HTMLElement>);
    }
  }
}
