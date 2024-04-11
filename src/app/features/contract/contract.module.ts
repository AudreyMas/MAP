import { NgModule } from '@angular/core';
import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { SynopisComponent } from './components/synopis/synopis.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ContractRoutingModule,
    ],
    declarations: [
        ContractComponent,
        SynopisComponent,
    ],
})
export class Module {
}
