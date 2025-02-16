import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  list = [
    {
      id: 1,
      title: 'לינקים',
      items: [
        {
          id: 1,
          title: 'לינק 1',
        },
        {
          id: 2,
          title: 'לינק 2',
        },
        {
          id: 3,
          title: 'לינק 3',
        },
        {
          id: 4,
          title: 'לינק 4',
        },
      ],
    },
    {
      id: 2,
      title: 'בלוג',
      items: [
        {
          id: 1,
          title: 'בלוג 1',
        },
        {
          id: 2,
          title: 'בלוג 2',
        },
        {
          id: 3,
          title: 'בלוג 3',
        },
        {
          id: 4,
          title: 'בלוג 4',
        },
      ],
    },
    {
      id: 3,
      title: 'צור קשר',
      items: [
        {
          id: 1,
          title: '0543214541',
        },
        {
          id: 2,
          title: 'nomi2@gmail.com',
        },
      ],
    },
  ];
}
