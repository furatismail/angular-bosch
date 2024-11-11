import { Routes } from "@angular/router";

export const SettingsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./overview/overview.component').then((component) => component.OverviewComponent)
    }
]