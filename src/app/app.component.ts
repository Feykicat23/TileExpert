import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Импорт

import { RouterOutlet } from '@angular/router';
import { NavbarComponent }  from './components/navbar/navbar.component';
import {SearchComponent} from './components/inputs/search/search.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TileExpert';
}
