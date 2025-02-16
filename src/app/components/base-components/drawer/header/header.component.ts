import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  itemSelected = signal<number>(1);
  menu = [
    {
      id: 1,
      url: 'home',
      label: 'בית',
    },
    {
      id: 2,
      url: 'gallery',
      label: 'גלריה',
    },
    {
      id: 3,
      url: 'courses',
      label: 'קורסים',
    },
    {
      id: 4,
      url: 'blogs',
      label: 'בלוגים',
    },
    {
      id: 5,
      url: 'contact',
      label: 'יצירת קשר',
    },
  ];
  clickItem(url: string, id: number) {
    this.itemSelected.set(id);
    this.router.navigate([url]);
  }
}
