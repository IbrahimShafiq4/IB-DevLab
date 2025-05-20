import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./client-layout/client-layout.module').then((m) => m.ClientLayoutModule)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
