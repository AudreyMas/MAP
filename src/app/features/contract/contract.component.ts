import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./contract.component.html",
})
export class ContractComponent {
    listItems = [
        { id: '1', label: 'Secondary action 1', icon: 'folder:outline' },
        { id: '2', label: 'Secondary action 2', icon: 'folder:outline' },
        { id: '3', label: 'Secondary action 3', icon: 'folder:outline' },
        { id: '4', label: 'Secondary action 4', icon: 'folder:outline', disabled: true },
    ];

    public isColumnCollapsed = false;
    public sidebarItems = [
        { label: "Synopsis", url: "/screen/contract/synopis" },
        { label: "Plannig Nodes", url: "New componenet to create" },
        { label: "Demands", url: "New componenet to create"},
        { label: "Procedure", url: "New componenet to create"},
        { label: "ABAC Commitment Forecast", url: "New componenet to create"},
        { label: "Reporting Tag", url: "New componenet to create"},
        { label: "Operation and Financial Tags", url: "New componenet to create"},
    ];
    
    public selectedSidebarItem: any = null; // Variable to hold the selected sidebar item

    constructor(private router: Router) {}

     // Function to handle the selection of sidebar item
     public onSelectSidebarItem(item: any) {
        this.selectedSidebarItem = item; // Update the selected sidebar item
        this.router.navigateByUrl(item.url); // Navigate to the selected item's URL
    }

    public onToggleColumnCollapsed(event: boolean) {
        this.isColumnCollapsed = event;
    }
    public onListItemClicked(event: any) {
        console.log('onListItemClicked() event:', event);
    }
}