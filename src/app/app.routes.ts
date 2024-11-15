import { Routes } from '@angular/router';
import { MainComponent } from './features/dashboard/main/main.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        component: MainComponent,
        path: 'dashboard'
    },
   {
    loadChildren: () => import('./features/about/about.routes').then((routes) => routes.AboutRoutes),
    path: 'about'
   },
   {
    loadChildren: () => import('./features/settings/settings.routes').then((routes) => routes.SettingsRoutes),
    path: 'settings'
   },
   {
    loadChildren: () => import('./features/photos/photos.routes').then((routes) => routes.PhotosRoutes),
    path: 'photos'
   },
];
