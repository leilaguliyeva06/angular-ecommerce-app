import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent }, // Esas sehife acilanda ProductListComponent gorsenecek
  { path: '**', redirectTo: '' }, // Yanlis URL yazilarsa esas sehifeye yonlendirilsin
];
