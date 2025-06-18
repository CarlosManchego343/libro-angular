import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PageFlip } from 'page-flip';
import { PortadaComponent } from '../portada/portada.component';

@Component({
  selector: 'app-book',
  imports: [PortadaComponent],
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
