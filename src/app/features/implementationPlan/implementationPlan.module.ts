import { NgModule } from '@angular/core';
import { ImplementationPlanRoutingModule } from './implementationPlan-routing.module';
import { ImplementationPlanComponent } from './implementationPlan.component';
import { ContractsComponent } from './components/contracts/contracts.component';

import { SharedModule } from '@shared/shared.module';

import { AgGridModule} from 'ag-grid-angular';

@NgModule({
    imports: [
        SharedModule,
        ImplementationPlanRoutingModule,
        AgGridModule
    ],
    declarations: [
        ImplementationPlanComponent,
        ContractsComponent,
    ],

})
export class Module {
}
