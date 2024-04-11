import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SynopisComponent } from './components/synopis/synopis.component';
import { ContractComponent } from './contract.component';

const routes: Routes = [
    {
        path: '',
        component: ContractComponent,
        children: [
            { path: '', redirectTo: 'synopis', pathMatch: 'full' },
            { path: 'synopis', component: SynopisComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]

})
export class ContractRoutingModule {}
