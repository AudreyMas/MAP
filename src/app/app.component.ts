import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    sidebarItems = [
        { label: 'Organigramme', url: 'screen/organigramme', iconSvgName: 'bag:sharp' },
        { label: 'Implementation Plan - Contract', url: 'screen/ImplementationPlan', iconSvgName: 'bag:sharp' },
        { label: 'Contract - Synopsis', url: 'screen/contract', iconSvgName: 'bag:sharp' },
        { label: 'Portfolio', url: 'screen/portfolio', iconSvgName: 'bag:sharp' },
    ];
    notificationItems = [
        { label: 'Title label 1', subLabel: 'Subtitle label' },
        { label: 'Title label 2', subLabel: 'Subtitle label' },
        { label: 'Title label 3', subLabel: 'Subtitle label' },
        { label: 'Title label 4', subLabel: 'Subtitle label' },
    ];
}
