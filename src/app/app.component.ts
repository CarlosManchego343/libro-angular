import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [BookComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

