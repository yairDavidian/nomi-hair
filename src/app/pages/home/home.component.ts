import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  courses = [
    {
      id: 1,
      name: 'צמות',
      image: 'bg-hair2',
    },
    {
      id: 2,
      name: 'תסרוקות',
      image: 'hair',
    },
    {
      id: 3,
      name: 'מתקדם',
      image: 'bg-hair1',
    },
  ];
  array = Array(5);
  counter = 0;
  onIconClick() {
    this;
  }
}
