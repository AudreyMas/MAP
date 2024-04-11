import { Component } from "@angular/core";
import { ColDef, DomLayoutType } from "ag-grid-community"; // Column Definition Type Interface

@Component({
    templateUrl: "./contracts.component.html",
})
export class ContractsComponent {
    rowData = [
        {
            column1: "content",
            column2: "content",
            column3: 11111,
            column4: true,
            column5: "content",
            column6:"content",
            column7:"content",
        },
        {
            column1: "content",
            column2: "content",
            column3: 11111,
            column4: false,
            column5: "content",
            column6:"content",
            column7:"content",
        },
        {
            column1: "content",
            column2: "content",
            column3: 11111,
            column4: false,
            column5: "content",
            column6:"content",
            column7:"content",
        },
        {
            column1: "content",
            column2: "content",
            column3: 11111,
            column4: true,
            column5: "content",
            column6:"content",
            column7:"content",
        },
        {
            column1: "content",
            column2: "content",
            column3: 11111,
            column4: false,
            column5: "content",
            column6:"content",
            column7:"content",
        },
        {
            column1: "content",
            column2: "content",
            column3: 11111,
            column4: false,
            column5: "content",
            column6:"content",
            column7:"content",
        },
    ];

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        { field: "column1", sortable: true, filter: true },
        { field: "column2", sortable: true, filter: true },
        { field: "column3", sortable: true, filter: true },
        { field: "column4", sortable: true, filter: true },
        { field: "column5", sortable: true, filter: true },
        { field: "column6", sortable: true, filter: true },
        { field: "column7", sortable: true, filter: true },

    ];
    public domLayout: DomLayoutType = "autoHeight";
}
