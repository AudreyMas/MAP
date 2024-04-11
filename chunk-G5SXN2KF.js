import {
  EuiButtonComponent,
  EuiCardComponent,
  EuiCardContentComponent,
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

// src/app/features/contract/components/synopis/synopis.component.ts
var _SynopisComponent = class _SynopisComponent {
};
_SynopisComponent.\u0275fac = function SynopisComponent_Factory(t) {
  return new (t || _SynopisComponent)();
};
_SynopisComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _SynopisComponent, selectors: [["ng-component"]], decls: 56, vars: 0, consts: [[1, "eui-u-flex"], ["euiLabel", "", 1, "eui-u-font-bold"], [1, "eui-u-mb-l"], [1, "eui-u-mr-4xl"], [1, "eui-u-mb-s"], ["euiLabel", "", "euiSecondary", "", "euiSizeS", ""], [1, "eui-u-font-s", "eui-u-font-bold"], [1, "eui-u-mb-s", "eui-u-mr-4xl"]], template: function SynopisComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2, "Synopis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "ul")(4, "li")(5, "eui-card", 2)(6, "eui-card-content", 0)(7, "div", 3)(8, "div", 4)(9, "span", 5);
    \u0275\u0275text(10, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "br");
    \u0275\u0275elementStart(12, "span", 6);
    \u0275\u0275text(13, "17/07/2020, 02:07:30 PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 4)(15, "span", 5);
    \u0275\u0275text(16, "Internal reference");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "br");
    \u0275\u0275elementStart(18, "span", 6);
    \u0275\u0275text(19, "Generic User w0501075");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 4)(21, "span", 5);
    \u0275\u0275text(22, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "br");
    \u0275\u0275elementStart(24, "span", 6);
    \u0275\u0275text(25, "Generic User w0501075");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(26, "li")(27, "eui-card", 2)(28, "eui-card-content", 0)(29, "div", 7)(30, "span", 5);
    \u0275\u0275text(31, "Signature Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "br");
    \u0275\u0275elementStart(33, "span", 6);
    \u0275\u0275text(34, "17/07/2020, 02:07:30 PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 7)(36, "span", 5);
    \u0275\u0275text(37, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "br");
    \u0275\u0275elementStart(39, "span", 6);
    \u0275\u0275text(40, "17/07/2020, 02:07:30 PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 4)(42, "span", 5);
    \u0275\u0275text(43, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "br");
    \u0275\u0275elementStart(45, "span", 6);
    \u0275\u0275text(46, "17/07/2020, 02:07:30 PM");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "li")(48, "eui-card")(49, "eui-card-content")(50, "div", 4)(51, "span", 5);
    \u0275\u0275text(52, "Sensitive Contract");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "br");
    \u0275\u0275elementStart(54, "span", 6);
    \u0275\u0275text(55, "No");
    \u0275\u0275elementEnd()()()()()();
  }
}, dependencies: [EuiLabelComponent, EuiCardComponent, EuiCardContentComponent], encapsulation: 2 });
var SynopisComponent = _SynopisComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SynopisComponent, { className: "SynopisComponent", filePath: "src\\app\\features\\contract\\components\\synopis\\synopis.component.ts", lineNumber: 6 });
})();

// src/app/features/contract/contract.component.ts
function ContractComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function ContractComponent_button_32_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onListItemClicked(item_r1));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("disabled", item_r1 == null ? null : item_r1.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var _ContractComponent = class _ContractComponent {
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
      { label: "Synopsis", url: "/screen/contract/synopis" },
      { label: "Plannig Nodes", url: "New componenet to create" },
      { label: "Demands", url: "New componenet to create" },
      { label: "Procedure", url: "New componenet to create" },
      { label: "ABAC Commitment Forecast", url: "New componenet to create" },
      { label: "Reporting Tag", url: "New componenet to create" },
      { label: "Operation and Financial Tags", url: "New componenet to create" }
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
_ContractComponent.\u0275fac = function ContractComponent_Factory(t) {
  return new (t || _ContractComponent)(\u0275\u0275directiveInject(Router));
};
_ContractComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _ContractComponent, selectors: [["ng-component"]], decls: 41, vars: 7, consts: [["label", "Contract", "subLabel", "Reniew poels DIGITTMII-008053\n        ", "labelTooltip", "Page title tooltip text...", "subLabelTooltip", "Page sub-title tooltip text...", 3, "isCollapsible", "isCollapsed", "collapsedLabel", "expandedLabel"], [1, "eui-u-flex"], [1, "eui-u-mr-4xl"], ["euiLabel", "", "euiSecondary", "", "euiSizeS", ""], [1, "eui-u-font-s", "eui-u-font-bold"], ["euiRounded", "", "euiOutline", "", "euiInfo", "", "euiSizeS", "", "euiTooltip", "Status"], ["euiLabel", ""], ["euiButton", "", "euiPrimary", ""], ["euiButton", "", "euiOutline", "", "euiPrimary", ""], ["icon", "eui-ellipsis-vertical"], ["euiDropdownItem", "", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["label", "Navigation menu", "size", "2xl", "isCollapsible", "true"], [3, "items", "hasIcons", "itemClicked"], ["euiDropdownItem", "", 3, "disabled", "click"], ["euiLabel", "", 1, "eui-u-ml-xs"]], template: function ContractComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "eui-page")(1, "eui-page-header", 0)(2, "eui-page-header-body", 1)(3, "div", 2)(4, "span", 3);
    \u0275\u0275text(5, "Entity id");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8, "17/07/2020, 02:07:30 PM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 2)(10, "span", 3);
    \u0275\u0275text(11, "Last update");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "br");
    \u0275\u0275elementStart(13, "span", 4);
    \u0275\u0275text(14, "Generic User w0501075");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "span", 3);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "br");
    \u0275\u0275elementStart(19, "eui-chip", 5)(20, "span", 6);
    \u0275\u0275text(21, "Plane");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "eui-page-header-action-items")(23, "button", 7)(24, "span", 6);
    \u0275\u0275text(25, "Implementation plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "eui-dropdown")(27, "button", 8)(28, "span", 6);
    \u0275\u0275text(29, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "eui-icon-svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "eui-dropdown-content");
    \u0275\u0275template(32, ContractComponent_button_32_Template, 3, 2, "button", 10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "eui-page-content")(34, "eui-page-columns")(35, "eui-page-column", 11)(36, "eui-page-column-body")(37, "eui-sidebar-menu", 12);
    \u0275\u0275listener("itemClicked", function ContractComponent_Template_eui_sidebar_menu_itemClicked_37_listener($event) {
      return ctx.onSelectSidebarItem($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "eui-page-column")(39, "eui-page-column-body");
    \u0275\u0275element(40, "router-outlet");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("isCollapsible", true)("isCollapsed", false)("collapsedLabel", "Collapse")("expandedLabel", "Expand");
    \u0275\u0275advance(31);
    \u0275\u0275property("ngForOf", ctx.listItems);
    \u0275\u0275advance(5);
    \u0275\u0275property("items", ctx.sidebarItems)("hasIcons", true);
  }
}, dependencies: [NgForOf, EuiPageComponent, EuiPageColumnComponent, EuiPageColumnBodyContentDirective, EuiPageColumnsComponent, EuiPageContentComponent, EuiPageHeaderComponent, EuiPageHeaderActionItemsContentDirective, EuiPageBodyContentDirective, EuiIconSvgComponent, EuiTooltipDirective, EuiLabelComponent, EuiButtonComponent, EuiChipComponent, EuiDropdownComponent, EuiDropdownItemComponent, EuiDropdownContentDirective, EuiSidebarMenuComponent, RouterOutlet], encapsulation: 2 });
var ContractComponent = _ContractComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractComponent, { className: "ContractComponent", filePath: "src\\app\\features\\contract\\contract.component.ts", lineNumber: 7 });
})();

// src/app/features/contract/contract-routing.module.ts
var routes = [
  {
    path: "",
    component: ContractComponent,
    children: [
      { path: "", redirectTo: "synopis", pathMatch: "full" },
      { path: "synopis", component: SynopisComponent }
    ]
  }
];
var _ContractRoutingModule = class _ContractRoutingModule {
};
_ContractRoutingModule.\u0275fac = function ContractRoutingModule_Factory(t) {
  return new (t || _ContractRoutingModule)();
};
_ContractRoutingModule.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _ContractRoutingModule });
_ContractRoutingModule.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ContractRoutingModule = _ContractRoutingModule;

// src/app/features/contract/contract.module.ts
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
  ContractRoutingModule
] });
var Module = _Module;
export {
  Module
};
