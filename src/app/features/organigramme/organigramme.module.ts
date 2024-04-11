import { NgModule } from '@angular/core';
import { OrganigrammeRoutingModule } from './organigramme-routing.module';
import { OrganigrammeComponent } from './organigramme.component';
import { BudgetEnvelopeComponent } from './components/budgetEnvelope/budgetEnvelope.component';

import { SharedModule } from '@shared/shared.module';

import { AgGridModule} from 'ag-grid-angular';

@NgModule({
    imports: [
        SharedModule,
        OrganigrammeRoutingModule,
        AgGridModule,
    ],
    declarations: [
        OrganigrammeComponent,
        BudgetEnvelopeComponent,
    ],

})
export class Module {
}
