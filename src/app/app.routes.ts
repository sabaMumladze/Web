import { Routes } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from "./content/content.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/content',
        pathMatch: 'full'
      },
      {
        path: 'content',
        component: ContentComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
];


