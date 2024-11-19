import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Página inicial',
        loadComponent: () => import('@pages/home/components/container/home.component').then(component => component.HomeComponent)
    },
    {
        path: 'about-us',
        title: 'Sobre nós',
        loadComponent: () => import('@pages/about/components/container/about.component').then(component => component.AboutComponent)
    }
];
