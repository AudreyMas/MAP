import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./implementationPlan.component.html",
})
export class ImplementationPlanComponent {
    public isColumnCollapsed = false;
    public sidebarItems = [
        { label: "Synopsis", url: "New componenent to create" },
        { label: "Contracts", url: "/screen/implementationPlan/contracts" },
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
 
}