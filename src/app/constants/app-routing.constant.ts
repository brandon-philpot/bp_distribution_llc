import { Routes } from '@angular/router';

export const BP_DIST_ROUTES: Routes = [
    { path: 'home', redirectTo: '/', pathMatch: 'full'},
    { path: '', loadChildren: ()=> import('../modules/home-page/home-page.module').then(module => module.HomePageModule) },
    { path: 'about', loadChildren: ()=> import('../modules/about-page/about-page.module').then(module => module.AboutPageModule) },
    { path: 'services', loadChildren: ()=> import('../modules/services-page/services-page.module').then(module => module.ServicesPageModule) },
    { path: 'products', loadChildren: ()=> import('../modules/products-page/products-page.module').then(module => module.ProductsPageModule) },
    { path: '**', loadChildren: ()=> import('../modules/404-page/four-zero-four-page.module').then(module => module.FourZeroFourPageModule) }
];
