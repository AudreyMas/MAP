import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

import { SharedModule } from '@shared/shared.module'; 

@NgModule({
    imports: [
        SharedModule,
        PortfolioRoutingModule,
    ],
    declarations: [
        PortfolioComponent,
    ],
})
export class Module {
}
