import { Component, input } from '@angular/core';
import { UrlablePipe } from './pipes/urlable.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ UrlablePipe ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  cover = input.required<string>();
  overlay = input<boolean>(false);
}
