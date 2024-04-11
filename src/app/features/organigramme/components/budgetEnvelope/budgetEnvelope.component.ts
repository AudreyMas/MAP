import { Component } from "@angular/core";
import {
    ColDef,
    ColGroupDef,
    DomLayoutType,
    GridApi,
    GridOptions,
    GridReadyEvent,
    ModuleRegistry,
    createGrid,
} from "ag-grid-community"; // Column Definition Type Interface
import { EuiTabComponent } from "@eui/components/eui-tabs";

@Component({
    templateUrl: "./budgetEnvelope.component.html",
})
export class BudgetEnvelopeComponent {
    public rowData = [
        {
            column1: 0,
            id: true,
            column2: "content",
            column3: 11111,
            column4: "content",
            column5: "content",
        },
        {
            column1: 1,
            id: false,
            column2: "content",
            column3: 11111,
            column4: "content",
            column5: "content",
        },
        {
            column1: 2,
            id: true,
            column2: "content",
            column3: 11111,
            column4: "content",
            column5: "content",
        },
        {
          column1: 3,
          id: false,
          column2: "content",
          column3: 11111,
          column4: true,
          column5: "content",
      },
      {
          column1:4,
          id: true,
          column2: "content",
          column3: 11111,
          column4: "content",
          column5: "content",
      },
      {
          column1:5,
          id: false,
          column2: "content",
          column3: 11111,
          column4: "content",
          column5: "content",
      },
    ];
    public columnDefs: (ColDef | ColGroupDef)[] = [
                { headerName: "Id", field: "id" },
                { headerName: "Crédit Header",field: "column1", sortable: true, filter: true },
                { headerName: "Crédit Sub Header",field: "column2", sortable: true, filter: true },
        {
            headerName: "Source Node",
            children: [
                { headerName: "Id",field: "column3", filter: "agNumberColumnFilter" },
                { headerName: "Crédit source",field: "column4", filter: "agNumberColumnFilter" },
                { headerName: "Fund source",field: "column5", filter: "agNumberColumnFilter" },
                { headerName: "Budget Line",field: "column1", filter: "agNumberColumnFilter" },               
            ],
        },
    ];

    public defaultColDef: ColDef = {
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        filter: true,
    };
    public domLayout: DomLayoutType = "autoHeight";
    public popupParent: HTMLElement | null = document.body;
    public themeClass: string = "ag-theme-quartz";
    private gridApi!: GridApi;

    onGridReady(params: GridReadyEvent) {
        this.gridApi = params.api;

        document.querySelector("#currentRowCount")!.textContent = "5";
    }

    onTabClose(event: { tab: EuiTabComponent; index: number }) {
        console.log(event);
    }

    onTabSelect(event: { tab: EuiTabComponent; index: number }) {
        console.log(event);
    }
}
