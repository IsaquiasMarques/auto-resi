import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '@shared/components/views/hero/hero.component';
import { PresentationComponent } from '../views/presentation/presentation.component';
import { ValuesComponent } from '../views/values/values.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ HeroComponent, PresentationComponent, ValuesComponent ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
