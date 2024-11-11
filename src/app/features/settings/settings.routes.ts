import { Routes } from "@angular/router";

export const SettingsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./overview/overview.component').then((component) => component.OverviewComponent),
        children: [
            {
                path: 'panel',
                loadComponent: () => import('./panel/panel.component').then((component) => component.PanelComponent),
            },
            {
                path: 'statistics',
                loadComponent: () => import('./statistics/statistics.component').then((component) => component.StatisticsComponent),
            }
        ]
    }
]