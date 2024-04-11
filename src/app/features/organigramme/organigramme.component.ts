import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-organigramme',

    templateUrl: "./organigramme.component.html",
})
export class OrganigrammeComponent {
    listItems = [
        { id: '1', label: 'Secondary action 1', icon: 'folder:outline' },
        { id: '2', label: 'Secondary action 2', icon: 'folder:outline' },
        { id: '3', label: 'Secondary action 3', icon: 'folder:outline' },
        { id: '4', label: 'Secondary action 4', icon: 'folder:outline', disabled: true },
    ];

    public isColumnCollapsed = false;
    public sidebarItems = [
        { label: "Synopsis", url: "New componenent to create" },
        { label: "Operational and Finanacial tags", url: "New componenent to create" },
        { label: "Reporting tags", url: "New componenent to create" },
        { label: "Budget Envelope", url: "/screen/organigramme/budgetEnvelope" },
        { label: "Programming", url: "New componenent to create" },
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