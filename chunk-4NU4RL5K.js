import {
  AgGridAngular,
  AgGridModule
} from "./chunk-LB7TPLPI.js";
import {
  EuiButtonComponent,
  EuiChipComponent,
  EuiDropdownComponent,
  EuiDropdownContentDirective,
  EuiDropdownItemComponent,
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
  EuiTabComponent,
  EuiTabContentComponent,
  EuiTabLabelComponent,
  EuiTabsComponent,
  EuiTooltipDirective,
  NgForOf,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NLU67AAA.js";

// src/app/features/organigramme/components/budgetEnvelope/budgetEnvelope.component.ts
var _BudgetEnvelopeComponent = class _BudgetEnvelopeComponent {
  constructor() {
    this.rowData = [
      {
        column1: 0,
        id: true,
        column2: "content",
        column3: 11111,
        column4: "content",
        column5: "content"
      },
      {
        column1: 1,
        id: false,
        column2: "content",
        column3: 11111,
        column4: "content",
        column5: "content"
      },
      {
        column1: 2,
        id: true,
        column2: "content",
        column3: 11111,
        column4: "content",
        column5: "content"
      },
      {
        column1: 3,
        id: false,
        column2: "content",
        column3: 11111,
        column4: true,
        column5: "content"
      },
      {
        column1: 4,
        id: true,
        column2: "content",
        column3: 11111,
        column4: "content",
        column5: "content"
      },
      {
        column1: 5,
        id: false,
        column2: "content",
        column3: 11111,
        column4: "content",
        column5: "content"
      }
    ];
    this.columnDefs = [
      { headerName: "Id", field: "id" },
      { headerName: "Cr\xE9dit Header", field: "column1", sortable: true, filter: true },
      { headerName: "Cr\xE9dit Sub Header", field: "column2", sortable: true, filter: true },
      {
        headerName: "Source Node",
        children: [
          { headerName: "Id", field: "column3", filter: "agNumberColumnFilter" },
          { headerName: "Cr\xE9dit source", field: "column4", filter: "agNumberColumnFilter" },
          { headerName: "Fund source", field: "column5", filter: "agNumberColumnFilter" },
          { headerName: "Budget Line", field: "column1", filter: "agNumberColumnFilter" }
        ]
      }
    ];
    this.defaultColDef = {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      filter: true
    };
    this.domLayout = "autoHeight";
    this.popupParent = document.body;
    this.themeClass = "ag-theme-quartz";
  }
  onGridReady(params) {
    this.gridApi = params.api;
    document.querySelector("#currentRowCount").textContent = "5";
  }
  onTabClose(event) {
    console.log(event);
  }
  onTabSelect(event) {
    console.log(event);
  }
};
_BudgetEnvelopeComponent.\u0275fac = function BudgetEnvelopeComponent_Factory(t) {
  return new (t || _BudgetEnvelopeComponent)();
};
_BudgetEnvelopeComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _BudgetEnvelopeComponent, selectors: [["ng-component"]], decls: 29, vars: 5, consts: [[1, "eui-u-flex"], ["euiLabel", "", 1, "eui-u-font-bold"], [1, "ag-theme-balham", 2, "width", "100%", "height", "100%", 3, "rowData", "columnDefs", "domLayout", "defaultColDef", "popupParent"]], template: function BudgetEnvelopeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2, "Budget enveloper");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "eui-tabs")(4, "eui-tab")(5, "euiTabLabel");
    \u0275\u0275text(6, " Actual ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "euiTabContent");
    \u0275\u0275element(8, "ag-grid-angular", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "eui-tab")(10, "euiTabLabel");
    \u0275\u0275text(11, " Master ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "euiTabContent");
    \u0275\u0275text(13, "Content Master");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "eui-tab")(15, "euiTabLabel");
    \u0275\u0275text(16, " Cap Managment ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "euiTabContent");
    \u0275\u0275text(18, "Content Cap Managment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "eui-tab")(20, "euiTabLabel");
    \u0275\u0275text(21, " Consolidate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "euiTabContent");
    \u0275\u0275text(23, "Content Consolidate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "eui-tab")(25, "euiTabLabel");
    \u0275\u0275text(26, " Forecast ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "euiTabContent");
    \u0275\u0275text(28, "Content Forecast");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("rowData", ctx.rowData)("columnDefs", ctx.columnDefs)("domLayout", ctx.domLayout)("defaultColDef", ctx.defaultColDef)("popupParent", ctx.popupParent);
  }
}, dependencies: [EuiLabelComponent, EuiTabsComponent, EuiTabComponent, EuiTabLabelComponent, EuiTabContentComponent, AgGridAngular], encapsulation: 2 });
var BudgetEnvelopeComponent = _BudgetEnvelopeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BudgetEnvelopeComponent, { className: "BudgetEnvelopeComponent", filePath: "src\\app\\features\\organigramme\\components\\budgetEnvelope\\budgetEnvelope.component.ts", lineNumber: 17 });
})();

// src/app/features/organigramme/organigramme.component.ts
function OrganigrammeComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function OrganigrammeComponent_button_40_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onListItemClicked(item_r2));
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("disabled", item_r2 == null ? null : item_r2.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function OrganigrammeComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function OrganigrammeComponent_button_47_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onListItemClicked(item_r5));
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("disabled", item_r5 == null ? null : item_r5.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
  }
}
var _OrganigrammeComponent = class _OrganigrammeComponent {
  constructor(router) {
    this.router = router;
    this.listItems = [
      { id: "1", label: "Secondary action 1", icon: "folder:outline" },
      { id: "2", label: "Secondary action 2", icon: "folder:outline" },
      { id: "3", label: "Secondary action 3", icon: "folder:outline" },
      { id: "4", label: "Secondary action 4", icon: "folder:outline", disabled: true }
    ];
    this.isColumnCollapsed = false;
    this.sidebarItems = [
      { label: "Synopsis", url: "New componenent to create" },
      { label: "Operational and Finanacial tags", url: "New componenent to create" },
      { label: "Reporting tags", url: "New componenent to create" },
      { label: "Budget Envelope", url: "/screen/organigramme/budgetEnvelope" },
      { label: "Programming", url: "New componenent to create" }
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
  onListItemClicked(event) {
    console.log("onListItemClicked() event:", event);
  }
};
_OrganigrammeComponent.\u0275fac = function OrganigrammeComponent_Factory(t) {
  return new (t || _OrganigrammeComponent)(\u0275\u0275directiveInject(Router));
};
_OrganigrammeComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _OrganigrammeComponent, selectors: [["app-organigramme"]], decls: 56, vars: 8, consts: [[2, "min-height", "100vh"], ["label", "MAP tree structure", "size", "2xl", "isCollapsible", "true"], ["euiPrimary", "", "euiButton", "", "euiOutline", "", 1, "eui-u-mr-s", "eui-u-mb-s"], ["icon", "eui-chevron-back", "set", "eui", "size", "m", "fillColor", "grey-100"], ["euiLabel", ""], [1, "picture-organigramme"], ["src", "../../../assets/images/organigramme.JPG", "alt", "organigramme Digit", "width", "100%"], ["label", "Organigramme", "subLabel", "DIGIT/A/02 - Procurement Programme Management Solutions", "labelTooltip", "Page title tooltip text...", "subLabelTooltip", "Page sub-title tooltip text...", 3, "isCollapsible", "isCollapsed", "collapsedLabel", "expandedLabel"], [1, "eui-u-flex"], [1, "eui-u-mr-4xl"], ["euiLabel", "", "euiSecondary", "", "euiSizeS", ""], [1, "eui-u-font-s", "eui-u-font-bold"], ["euiRounded", "", "euiOutline", "", "euiInfo", "", "euiSizeS", "", "euiTooltip", "Status"], ["euiButton", "", "euiOutline", "", "euiSecondary", ""], ["icon", "eui-chevron-down", "set", "eui", "size", "m", "fillColor", "grey-100"], ["euiDropdownItem", "", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["euiButton", "", "euiOutline", "", "euiPrimary", ""], ["icon", "eui-ellipsis-vertical"], ["label", "Navigation menu", "size", "2xl", "isCollapsible", "true"], [3, "items", "hasIcons", "itemClicked"], ["euiDropdownItem", "", 3, "disabled", "click"], ["euiLabel", "", 1, "eui-u-ml-xs"]], template: function OrganigrammeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "eui-page-columns", 0)(1, "eui-page-column", 1)(2, "eui-page-column-body")(3, "button", 2);
    \u0275\u0275element(4, "eui-icon-svg", 3);
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "Back to the Complete Tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275element(8, "img", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "eui-page-column")(10, "eui-page-column-body")(11, "eui-page")(12, "eui-page-header", 7)(13, "eui-page-header-body", 8)(14, "div", 9)(15, "span", 10);
    \u0275\u0275text(16, "Entity id");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "br");
    \u0275\u0275elementStart(18, "span", 11);
    \u0275\u0275text(19, "ORG-12");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 9)(21, "span", 10);
    \u0275\u0275text(22, "Last update");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "br");
    \u0275\u0275elementStart(24, "span", 11);
    \u0275\u0275text(25, "0701/2022 17/17 BY gENERIC uSER J92e2hj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "span", 10);
    \u0275\u0275text(28, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "br");
    \u0275\u0275elementStart(30, "eui-chip", 12)(31, "span", 4);
    \u0275\u0275text(32, "Full");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "eui-page-header-action-items")(34, "eui-dropdown")(35, "button", 13)(36, "span", 4);
    \u0275\u0275text(37, "Current");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "eui-icon-svg", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "eui-dropdown-content");
    \u0275\u0275template(40, OrganigrammeComponent_button_40_Template, 3, 2, "button", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "eui-dropdown")(42, "button", 16)(43, "span", 4);
    \u0275\u0275text(44, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "eui-icon-svg", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "eui-dropdown-content");
    \u0275\u0275template(47, OrganigrammeComponent_button_47_Template, 3, 2, "button", 15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "eui-page-content")(49, "eui-page-columns")(50, "eui-page-column", 18)(51, "eui-page-column-body")(52, "eui-sidebar-menu", 19);
    \u0275\u0275listener("itemClicked", function OrganigrammeComponent_Template_eui_sidebar_menu_itemClicked_52_listener($event) {
      return ctx.onSelectSidebarItem($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "eui-page-column")(54, "eui-page-column-body");
    \u0275\u0275element(55, "router-outlet");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("isCollapsible", true)("isCollapsed", false)("collapsedLabel", "Collapse")("expandedLabel", "Expand");
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx.listItems);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.listItems);
    \u0275\u0275advance(5);
    \u0275\u0275property("items", ctx.sidebarItems)("hasIcons", true);
  }
}, dependencies: [NgForOf, EuiPageComponent, EuiPageColumnComponent, EuiPageColumnBodyContentDirective, EuiPageColumnsComponent, EuiPageContentComponent, EuiPageHeaderComponent, EuiPageHeaderActionItemsContentDirective, EuiPageBodyContentDirective, EuiIconSvgComponent, EuiTooltipDirective, EuiLabelComponent, EuiButtonComponent, EuiChipComponent, EuiDropdownComponent, EuiDropdownItemComponent, EuiDropdownContentDirective, EuiSidebarMenuComponent, RouterOutlet], encapsulation: 2 });
var OrganigrammeComponent = _OrganigrammeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganigrammeComponent, { className: "OrganigrammeComponent", filePath: "src\\app\\features\\organigramme\\organigramme.component.ts", lineNumber: 9 });
})();

// src/app/features/organigramme/organigramme-routing.module.ts
var routes = [
  {
    path: "",
    component: OrganigrammeComponent,
    children: [
      { path: "", redirectTo: "budgetEnvelope", pathMatch: "full" },
      { path: "budgetEnvelope", component: BudgetEnvelopeComponent }
    ]
  }
];
var _OrganigrammeRoutingModule = class _OrganigrammeRoutingModule {
};
_OrganigrammeRoutingModule.\u0275fac = function OrganigrammeRoutingModule_Factory(t) {
  return new (t || _OrganigrammeRoutingModule)();
};
_OrganigrammeRoutingModule.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _OrganigrammeRoutingModule });
_OrganigrammeRoutingModule.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var OrganigrammeRoutingModule = _OrganigrammeRoutingModule;

// src/app/features/organigramme/organigramme.module.ts
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
  OrganigrammeRoutingModule,
  AgGridModule
] });
var Module = _Module;
export {
  Module
};
