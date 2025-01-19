import {Component, HostListener} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = '';
  searchOpen: boolean = false;
  menuOpen: boolean = false;

  historyList = [
    {label: 'закрепить теги'},
    {label: 'Контакты'},
    {label: 'Теги'},
    {label: 'Избранное'},
    {label: 'Посещения'},
    {label: 'Посещения'},
    {label: 'Посещения'},
    {label: 'Выпадающий список'},
  ];

  SEARCH_OPTIONS = [
    {label: 'Я участник', id: 1},
    {label: 'Строгий поиск', id: 2},
    {label: 'В заголовках', id: 3},
  ]

  ONLY_OPTIONS = [
    {label: 'Теги', id: 4},
    {label: 'Просьбы', id: 5},
    {label: 'Контакты', id: 6},
  ]


  toggleSearch(active: boolean): void {
    this.searchOpen = active;

    if (window.innerWidth < 970) {
      this.menuOpen = !this.menuOpen;
    }
  }

  openMenu(): void {
    this.menuOpen = true;
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.searchOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && !searchContainer.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

  performSearch(): void {
    console.log('Searching for:', this.searchText);
  }
}
