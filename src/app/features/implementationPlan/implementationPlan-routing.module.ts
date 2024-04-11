import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './components/contracts/contracts.component';
import { ImplementationPlanComponent } from './implementationPlan.component';

const routes: Routes = [
    {
        path: '',
        component: ImplementationPlanComponent,
        children: [
            { path: '', redirectTo: 'contracts', pathMatch: 'full' },
            { path: 'contracts', component: ContractsComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]

})
export class ImplementationPlanRoutingModule {}
