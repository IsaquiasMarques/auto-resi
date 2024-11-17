import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '@shared/components/views/hero/hero.component';
import { PresentationComponent } from '../views/presentation/presentation.component';
import { ServicesComponent } from '../views/services/services.component';
import { BenefitsComponent } from '../views/benefits/benefits.component';
import { ClientsComponent } from '../views/clients/clients.component';
import { FaqComponent } from '../views/faq/faq.component';
import { BlogComponent } from '../views/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    PresentationComponent,
    ServicesComponent,
    BenefitsComponent,
    ClientsComponent,
    FaqComponent,
    BlogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
