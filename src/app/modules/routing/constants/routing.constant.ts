import { Routes } from '@angular/router';

import { AboutPageComponent } from '../../about-page/about-page.component';
import { HomePageComponent } from '../../home-page/home-page.component';
// import { ProductsPageComponent } from '../../products-page/products-page.component';
// import { ServicesPageComponent } from '../../services-page/services-page.component';


export const BP_DIST_ROUTES: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', redirectTo: '/', pathMatch: 'full'},
    { path: 'about', component: AboutPageComponent },
    // { path: 'services', component: ServicesPageComponent },
    // { path: 'products', component: ProductsPageComponent }
];
