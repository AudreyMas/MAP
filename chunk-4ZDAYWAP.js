import {
  AgGridAngular,
  AgGridModule
} from "./chunk-LB7TPLPI.js";
import {
  EuiButtonComponent,
  EuiIconSvgComponent,
  EuiLabelComponent,
  EuiPageBodyContentDirective,
  EuiPageColumnBodyContentDirective,
  EuiPageColumnComponent,
  EuiPageColumnsComponent,
  EuiPageComponent,
  EuiPageContentComponent,
  EuiPageHeaderActionItemsContentDirective,
  EuiPageHeaderComponent,
  EuiSidebarMenuComponent,
  Router,
  RouterModule,
  RouterOutlet,
  SharedModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-NLU67AAA.js";

// src/app/features/implementationPlan/components/contracts/contracts.component.ts
var _ContractsComponent = class _ContractsComponent {
  constructor() {
    this.rowData = [
      {
        column1: "content",
        column2: "content",
        column3: 11111,
        column4: true,
        column5: "content",
        column6: "content",
        column7: "content"
      },
      {
        column1: "content",
        column2: "content",
        column3: 11111,
        column4: false,
        column5: "content",
        column6: "content",
        column7: "content"
      },
      {
        column1: "content",
        column2: "content",
        column3: 11111,
        column4: false,
        column5: "content",
        column6: "content",
        column7: "content"
      },
      {
        column1: "content",
        column2: "content",
        column3: 11111,
        column4: true,
        column5: "content",
        column6: "content",
        column7: "content"
      },
      {
        column1: "content",
        column2: "content",
        column3: 11111,
        column4: false,
        column5: "content",
        column6: "content",
        column7: "content"
      },
      {
        column1: "content",
        column2: "content",
        column3: 11111,
        column4: false,
        column5: "content",
        column6: "content",
        column7: "content"
      }
    ];
    this.colDefs = [
      { field: "column1", sortable: true, filter: true },
      { field: "column2", sortable: true, filter: true },
      { field: "column3", sortable: true, filter: true },
      { field: "column4", sortable: true, filter: true },
      { field: "column5", sortable: true, filter: true },
      { field: "column6", sortable: true, filter: true },
      { field: "column7", sortable: true, filter: true }
    ];
    this.domLayout = "autoHeight";
  }
};
_ContractsComponent.\u0275fac = function ContractsComponent_Factory(t) {
  return new (t || _ContractsComponent)();
};
_ContractsComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _ContractsComponent, selectors: [["ng-component"]], decls: 4, vars: 3, consts: [[1, "eui-u-flex"], ["euiLabel", "", 1, "eui-u-font-bold"], [1, "ag-theme-balham", 2, "width", "100%", "height", "100%", 3, "rowData", "columnDefs", "domLayout"]], template: function ContractsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2, "Contracts");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "ag-grid-angular", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("rowData", ctx.rowData)("columnDefs", ctx.colDefs)("domLayout", ctx.domLayout);
  }
}, dependencies: [EuiLabelComponent, AgGridAngular], encapsulation: 2 });
var ContractsComponent = _ContractsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractsComponent, { className: "ContractsComponent", filePath: "src\\app\\features\\implementationPlan\\components\\contracts\\contracts.component.ts", lineNumber: 7 });
})();

// src/app/features/implementationPlan/implementationPlan.component.ts
var _ImplementationPlanComponent = class _ImplementationPlanComponent {
  constructor(router) {
    this.router = router;
    this.isColumnCollapsed = false;
    this.sidebarItems = [
      { label: "Synopsis", url: "New componenent to create" },
      { label: "Contracts", url: "/screen/implementationPlan/contracts" }
    ];
    this.selectedSidebarItem = null;
  }
  // Function to handle the selection of sidebar item
  onSelectSidebarItem(item) {
    this.selectedSidebarItem = item;
    this.router.navigateByUrl(item.url);
  }
  onToggleColumnCollapsed(event) {
    this.isColumnCollapsed = event;
  }
};
_ImplementationPlanComponent.\u0275fac = function ImplementationPlanComponent_Factory(t) {
  return new (t || _ImplementationPlanComponent)(\u0275\u0275directiveInject(Router));
};
_ImplementationPlanComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _ImplementationPlanComponent, selectors: [["ng-component"]], decls: 28, vars: 6, consts: [["label", "Contract", "subLabel", "Implementation Plan-DIGIT.A2\n        ", "labelTooltip", "Page title tooltip text...", "subLabelTooltip", "Page sub-title tooltip text...", 3, "isCollapsible", "isCollapsed", "collapsedLabel", "expandedLabel"], [1, "eui-u-flex", "eui-u-flex-between"], ["euiLabel", "", "euiSecondary", "", "euiSizeS", ""], [1, "eui-u-font-s", "eui-u-font-bold"], ["euiButton", "", "euiInfo", "", "euiOutline", ""], ["euiLabel", ""], ["icon", "eui-ellipsis-vertical"], ["label", "Navigation menu", "size", "2xl", "isCollapsible", "true"], [3, "items", "hasIcons", "itemClicked"]], template: function ImplementationPlanComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "eui-page")(1, "eui-page-header", 0)(2, "eui-page-header-body", 1)(3, "div")(4, "span", 2);
    \u0275\u0275text(5, "Entity id");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "span", 3);
    \u0275\u0275text(8, "17/07/2020, 02:07:30 PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "span", 2);
    \u0275\u0275text(11, "Last update");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "br");
    \u0275\u0275elementStart(13, "span", 3);
    \u0275\u0275text(14, "Generic User w0501075");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "eui-page-header-action-items")(16, "button", 4)(17, "span", 5);
    \u0275\u0275text(18, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "eui-icon-svg", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "eui-page-content")(21, "eui-page-columns")(22, "eui-page-column", 7)(23, "eui-page-column-body")(24, "eui-sidebar-menu", 8);
    \u0275\u0275listener("itemClicked", function ImplementationPlanComponent_Template_eui_sidebar_menu_itemClicked_24_listener($event) {
      return ctx.onSelectSidebarItem($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "eui-page-column")(26, "eui-page-column-body");
    \u0275\u0275element(27, "router-outlet");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("isCollapsible", true)("isCollapsed", false)("collapsedLabel", "Collapse")("expandedLabel", "Expand");
    \u0275\u0275advance(23);
    \u0275\u0275property("items", ctx.sidebarItems)("hasIcons", true);
  }
}, dependencies: [EuiPageComponent, EuiPageColumnComponent, EuiPageColumnBodyContentDirective, EuiPageColumnsComponent, EuiPageContentComponent, EuiPageHeaderComponent, EuiPageHeaderActionItemsContentDirective, EuiPageBodyContentDirective, EuiIconSvgComponent, EuiLabelComponent, EuiButtonComponent, EuiSidebarMenuComponent, RouterOutlet], encapsulation: 2 });
var ImplementationPlanComponent = _ImplementationPlanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImplementationPlanComponent, { className: "ImplementationPlanComponent", filePath: "src\\app\\features\\implementationPlan\\implementationPlan.component.ts", lineNumber: 7 });
})();

// src/app/features/implementationPlan/implementationPlan-routing.module.ts
var routes = [
  {
    path: "",
    component: ImplementationPlanComponent,
    children: [
      { path: "", redirectTo: "contracts", pathMatch: "full" },
      { path: "contracts", component: ContractsComponent }
    ]
  }
];
var _ImplementationPlanRoutingModule = class _ImplementationPlanRoutingModule {
};
_ImplementationPlanRoutingModule.\u0275fac = function ImplementationPlanRoutingModule_Factory(t) {
  return new (t || _ImplementationPlanRoutingModule)();
};
_ImplementationPlanRoutingModule.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _ImplementationPlanRoutingModule });
_ImplementationPlanRoutingModule.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ImplementationPlanRoutingModule = _ImplementationPlanRoutingModule;

// src/app/features/implementationPlan/implementationPlan.module.ts
var _Module = class _Module {
};
_Module.\u0275fac = function Module_Factory(t) {
  return new (t || _Module)();
};
_Module.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _Module });
_Module.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ imports: [
  SharedModule,
  ImplementationPlanRoutingModule,
  AgGridModule
] });
var Module = _Module;
export {
  Module
};
