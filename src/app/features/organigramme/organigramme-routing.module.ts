import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetEnvelopeComponent } from './components/budgetEnvelope/budgetEnvelope.component';
import { OrganigrammeComponent } from './organigramme.component';

const routes: Routes = [
    {
        path: '',
        component: OrganigrammeComponent,
        children: [
            { path: '', redirectTo: 'budgetEnvelope', pathMatch: 'full' },
            { path: 'budgetEnvelope', component: BudgetEnvelopeComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]

})
export class OrganigrammeRoutingModule {}
