import { ListComponent } from "./list/list.component";

export const PhotosRoutes = [
    {
        path: '',
        loadComponent: () => import('./list/list.component').then((cmp) => cmp.ListComponent),
    }
]   