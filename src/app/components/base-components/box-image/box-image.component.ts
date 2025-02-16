import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-image',
  templateUrl: './box-image.component.html',
  styleUrl: './box-image.component.scss',
})
export class BoxImageComponent {
  @Input() item!: any;
}
