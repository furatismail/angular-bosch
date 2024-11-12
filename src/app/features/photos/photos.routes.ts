import { PhotoIdResolverService } from "../../core/resolvers/photo-id-resolver.service";
import { PhotoResolverService } from "../../core/resolvers/photo-resolver.service";

export const PhotosRoutes = [
    {
        path: '',
        loadComponent: () => import('./list/list.component').then((cmp) => cmp.ListComponent),
        resolve: {
            photos: PhotoResolverService
        }
    },
    {
        path: ':photoId/detail',
        loadComponent: () => import('./detail/detail.component').then((cmp) => cmp.DetailComponent),
        resolve: {
            photo: PhotoIdResolverService
        }
    }
]   