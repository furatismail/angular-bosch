import { Routes } from "@angular/router";

export const AboutRoutes: Routes = [
    {
        loadComponent: () => import('./team/team.component').then((component) => component.TeamComponent),
        path: 'team'
    },
    {
        loadComponent: () => import('./company/company.component').then((component) => component.CompanyComponent),
        path: 'company'
    },
    {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full'
    }
]