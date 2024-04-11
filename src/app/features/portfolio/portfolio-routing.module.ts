import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PortfolioComponent }
        ])
    ],
})
export class PortfolioRoutingModule {} 
