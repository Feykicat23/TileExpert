import {AfterViewInit, ElementRef, Component, ViewChild} from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../inputs/search/search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    SearchComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    { label: 'Ссылки', path: '/', icon: 'ri-link' },
    { label: 'Контакты', path: '/about', icon: 'ri-group-line' },
    { label: 'Теги', path: '/services', icon: 'ri-hashtag' },
    { label: 'Избранное', path: '/blog', icon: 'ri-star-line' },
    { label: 'Посещения', path: '/contact', icon: 'ri-history-line' }
  ];
}
