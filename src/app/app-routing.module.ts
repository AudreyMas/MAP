import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'screen/organigramme', pathMatch: 'full' },
    { path: 'index.jsp', redirectTo: 'screen/home' },
    { path: 'screen/home', loadChildren: () => import('./features/home/home.module').then(m => m.Module) },
    { path: 'screen/contract', loadChildren: () => import('./features/contract/contract.module').then(m => m.Module) },
    { path: 'screen/portfolio', loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.Module) },
    { path: 'screen/ImplementationPlan', loadChildren: () => import('./features/implementationPlan/implementationPlan.module').then(m => m.Module) },
    { path: 'screen/organigramme', loadChildren: () => import('./features/organigramme/organigramme.module').then(m => m.Module) }, 
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
})
export class AppRoutingModule {}
