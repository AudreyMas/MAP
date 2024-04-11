import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuiShowcaseModule } from '@eui/showcase';
import { EuiTreeModule, TreeDataModel } from '@eui/components/eui-tree';

@Component({
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {
    public isColumnCollapsed = false;
    // sidebard
    public sidebarItems = [
        { label: 'Item 1', url: 'dummy-route-1', iconSvgName: 'eui-ecl-information', iconTypeClass: "primary-100" },
        { label: 'Item 2', url: 'dummy-route-2', iconSvgName: 'eui-ecl-warning', iconTypeClass: "warning-100" },
        { label: 'Item 3', url: 'dummy-route-3', iconSvgName: 'eui-ecl-error', iconTypeClass: "danger-100" },
        { label: 'Item 4', url: 'dummy-route-4', iconSvgName: 'eui-ecl-check-filled', iconTypeClass: "success-100" },
    ];
    // eui-card
    public cardItems = [
        { title: 'Impact of Trade Policy on land use', url: 'dummy-route-1', reference: 'TRADE/2023/LVP/0022', referenceLink: 'dummy-route-1', status: "Grey" },
        { title: 'Title2', url: 'dummy-route-1', reference: 'TRADE/2023/LVP/0022', referenceLink: 'dummy-route-1', status: "Grey" },
        { title: 'Title3', url: 'dummy-route-1', reference: 'TRADE/2023/LVP/0022', referenceLink: 'dummy-route-1', status: "Grey" },
        { title: 'Title4', url: 'dummy-route-1', reference: 'TRADE/2023/LVP/0022', referenceLink: 'dummy-route-1', status: "Grey" },
        { title: 'Title5', url: 'dummy-route-1', reference: 'TRADE/2023/LVP/0022', referenceLink: 'dummy-route-1', status: "Grey" },
    ];

    // eui-tree
    public treeDataMultiLevels: TreeDataModel = [
        {
            node: {
                treeContentBlock: {
                    label: 'Node 1',
                },
            },
            children: [
                {
                    node: {
                        treeContentBlock: {
                            label: 'Node 1.1',
                        },
                    },
                },
                {
                    node: {
                        treeContentBlock: {
                            label: 'Node 1.2',
                        },
                    },
                },
                {
                    node: {
                        treeContentBlock: {
                            label: 'Node 1.3',
                        },
                    },
                },
                {
                    node: {
                        treeContentBlock: {
                            label: 'Node 1.4',
                        },
                    },
                },
               
            ],
        },
        {
            node: {
                treeContentBlock: {
                    label: 'Node 2',
                },
            },
            children: [
                {
                    node: {
                        treeContentBlock: {
                            label: 'Node 2.1',
                        },
                    },
                },
                
            ],
        },
        {
            node: {
                treeContentBlock: {
                    label: 'Other',
                },
            },
        },
    ];

    constructor() {
    }
// Column collapsed
    public onToggleColumnCollapsed(event: boolean) {
        this.isColumnCollapsed = event;
    }
// Action button
    public onClick(label: string) {
        console.log(label + ' selected');
    }
// eui-card
    public dropdownClick(event: Event): void {
        event.stopPropagation();
    }
 
}
