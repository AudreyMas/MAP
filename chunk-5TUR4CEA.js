import {
  DefaultValueAccessor,
  EuiButtonComponent,
  EuiCardComponent,
  EuiCardContentComponent,
  EuiCardHeaderComponent,
  EuiCardHeaderLeftContentComponent,
  EuiCardHeaderRightContentComponent,
  EuiCardHeaderSubtitleComponent,
  EuiCardHeaderTitleComponent,
  EuiChipComponent,
  EuiDropdownComponent,
  EuiDropdownContentDirective,
  EuiDropdownItemComponent,
  EuiIconSvgComponent,
  EuiInputGroupComponent,
  EuiInputNumberComponent,
  EuiInputNumberDirective,
  EuiInputRadioComponent,
  EuiLabelComponent,
  EuiNgSelectOptionDirective,
  EuiPageColumnBodyContentDirective,
  EuiPageColumnComponent,
  EuiPageColumnFooterContentDirective,
  EuiPageColumnHeaderLeftContentDirective,
  EuiPageColumnHeaderRightContentDirective,
  EuiPageColumnsComponent,
  EuiPageComponent,
  EuiPageContentComponent,
  EuiPageHeaderComponent,
  EuiSelectComponent,
  EuiSelectMultipleOption,
  EuiSlideToggleComponent,
  EuiTooltipDirective,
  EuiTreeComponent,
  FormControlName,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgSelectOption,
  RouterModule,
  SharedModule,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NLU67AAA.js";

// src/app/features/portfolio/portfolio.component.ts
function PortfolioComponent_li_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 35)(1, "eui-card", 36)(2, "eui-card-header", 37)(3, "eui-card-header-title")(4, "a", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "eui-card-header-subtitle", 39)(7, "div", 40)(8, "span");
    \u0275\u0275text(9, "Reference : ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong", 41)(13, "a", 42);
    \u0275\u0275text(14, " - Link");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div")(16, "eui-chip", 43)(17, "span", 3);
    \u0275\u0275text(18, "Procedure");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "eui-card-header-left-content")(20, "button", 44);
    \u0275\u0275element(21, "eui-icon-svg", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "eui-card-header-right-content")(23, "eui-chip", 46)(24, "span", 3)(25, "strong");
    \u0275\u0275text(26, "Status\xA0active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "eui-dropdown", 47);
    \u0275\u0275listener("click", function PortfolioComponent_li_84_Template_eui_dropdown_click_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dropdownClick($event));
    });
    \u0275\u0275elementStart(28, "button", 48);
    \u0275\u0275element(29, "eui-icon-svg", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "eui-dropdown-content")(31, "div")(32, "button", 50);
    \u0275\u0275text(33, " Action 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 50);
    \u0275\u0275text(35, " Action 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 50);
    \u0275\u0275text(37, " Action 3 ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(38, "eui-card-content");
    \u0275\u0275text(39, " Card content... ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cardItem_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("hasHeaderClickToggle", false);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("href", cardItem_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", cardItem_r1.title, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(cardItem_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("href", cardItem_r1.referenceLink, \u0275\u0275sanitizeUrl);
  }
}
var _PortfolioComponent = class _PortfolioComponent {
  constructor() {
    this.isColumnCollapsed = false;
    this.sidebarItems = [
      { label: "Item 1", url: "dummy-route-1", iconSvgName: "eui-ecl-information", iconTypeClass: "primary-100" },
      { label: "Item 2", url: "dummy-route-2", iconSvgName: "eui-ecl-warning", iconTypeClass: "warning-100" },
      { label: "Item 3", url: "dummy-route-3", iconSvgName: "eui-ecl-error", iconTypeClass: "danger-100" },
      { label: "Item 4", url: "dummy-route-4", iconSvgName: "eui-ecl-check-filled", iconTypeClass: "success-100" }
    ];
    this.cardItems = [
      { title: "Impact of Trade Policy on land use", url: "dummy-route-1", reference: "TRADE/2023/LVP/0022", referenceLink: "dummy-route-1", status: "Grey" },
      { title: "Title2", url: "dummy-route-1", reference: "TRADE/2023/LVP/0022", referenceLink: "dummy-route-1", status: "Grey" },
      { title: "Title3", url: "dummy-route-1", reference: "TRADE/2023/LVP/0022", referenceLink: "dummy-route-1", status: "Grey" },
      { title: "Title4", url: "dummy-route-1", reference: "TRADE/2023/LVP/0022", referenceLink: "dummy-route-1", status: "Grey" },
      { title: "Title5", url: "dummy-route-1", reference: "TRADE/2023/LVP/0022", referenceLink: "dummy-route-1", status: "Grey" }
    ];
    this.treeDataMultiLevels = [
      {
        node: {
          treeContentBlock: {
            label: "Node 1"
          }
        },
        children: [
          {
            node: {
              treeContentBlock: {
                label: "Node 1.1"
              }
            }
          },
          {
            node: {
              treeContentBlock: {
                label: "Node 1.2"
              }
            }
          },
          {
            node: {
              treeContentBlock: {
                label: "Node 1.3"
              }
            }
          },
          {
            node: {
              treeContentBlock: {
                label: "Node 1.4"
              }
            }
          }
        ]
      },
      {
        node: {
          treeContentBlock: {
            label: "Node 2"
          }
        },
        children: [
          {
            node: {
              treeContentBlock: {
                label: "Node 2.1"
              }
            }
          }
        ]
      },
      {
        node: {
          treeContentBlock: {
            label: "Other"
          }
        }
      }
    ];
  }
  // Column collapsed
  onToggleColumnCollapsed(event) {
    this.isColumnCollapsed = event;
  }
  // Action button
  onClick(label) {
    console.log(label + " selected");
  }
  // eui-card
  dropdownClick(event) {
    event.stopPropagation();
  }
};
_PortfolioComponent.\u0275fac = function PortfolioComponent_Factory(t) {
  return new (t || _PortfolioComponent)();
};
_PortfolioComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _PortfolioComponent, selectors: [["ng-component"]], decls: 93, vars: 5, consts: [["label", "Portfolio"], ["label", "Filter", "size", "2xl", "isCollapsible", "true"], ["euiInputGroup", ""], ["euiLabel", ""], [1, "eui-input-group-addon"], ["euiInputNumber", "", "formControlName", "search", "aria-label", "within form"], ["euiButton", "", "euiSecondary", ""], ["icon", "eui-search", "set", "eui", "size", "m", "fillColor", "white"], ["euiInputNumber", "", "formControlName", "ResponsibleOrganisation", "aria-label", "within form"], ["euiInputRadio", "", "id", "default-radio-vertical-1", "name", "dyn-radio-vertical", 3, "value"], ["for", "default-radio-vertical-1"], ["euiInputRadio", "", "id", "default-radio-vertical-2", "name", "dyn-radio-vertical", "checked", "", 3, "value"], ["for", "default-radio-vertical-2"], ["euiInputRadio", "", "id", "default-radio-vertical-3", "name", "dyn-radio-vertical", 3, "value"], ["for", "default-radio-vertical-3"], [1, "eui-u-flex", "eui-u-flex-between"], ["euiLabel", "", 1, "eui-u-mv-m"], ["isChecked", "", 1, "eui-u-flex-start"], [3, "nodes"], ["isChecked", ""], [1, "eui-u-flex-start"], [1, "eui-u-flex-end"], [1, "eui-u-flex"], ["euiLabel", "", 1, "eui-u-font-bold"], ["euiLabel", "", "euiSizeM", ""], ["euiSelect", "", "name", "framework_nolabel", "aria-label", "framework nolabel"], ["value", "angular"], ["value", "react"], ["value", "vue"], ["euiButton", "", "euiSecondary", "", "euiSizeM", ""], ["icon", "eui-arrow-down", "set", "eui", "size", "s", "fillColor", "grey-100"], ["euiButton", "", "euiOutline", "", "euiSecondary", "", "euiSizeM", "", 1, "eui-u-ml-s"], ["icon", "eui-refresh", "set", "eui", "size", "s", "fillColor", "grey-100"], ["euiLabel", "", 1, "eui-u-ml-xs"], ["class", "eui-u-mb-l", 4, "ngFor", "ngForOf"], [1, "eui-u-mb-l"], ["euiCollapsible", "", "euiCollapsed", ""], [3, "hasHeaderClickToggle"], [3, "href"], [1, "eui-u-color-grey-darker", "eui-u-font-s"], [1, "eui-u-text-truncate", "ng-star-inserted", "eui-u-mb-s"], [1, "ng-star-inserted"], [1, "eui-u-text-link-external", 3, "href"], ["euiSizeXS", "", "euiOutline", "", "euiPrimary", "", 1, "eui-u-mr-2xs", "eui-u-mb-2xs"], ["aria-label", "Favourite", 1, "eui-button", "eui-button--basic", "eui-button--icon-only", "eui-button--rounded", "eui-button--secondary"], ["icon", "eui-star", "set", "eui", "size", "m", "fillColor", "grey-100"], ["euiOutline", "", "euiRounded", "", "euiSizeXS", "", "euiSuccess", "", 1, "eui-u-mr-l"], [1, "eui-u-ml-s", 3, "click"], ["euiButton", "", "euiBasicButton", "", "euiPrimary", "", "euiRounded", "", "euiIconButton", "", "euiSizeM", "", "euiTooltip", "More actions"], ["icon", "eui-ellipsis-vertical"], ["euiDropdownItem", ""]], template: function PortfolioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "eui-page");
    \u0275\u0275element(1, "eui-page-header", 0);
    \u0275\u0275elementStart(2, "eui-page-content")(3, "eui-page-columns")(4, "eui-page-column", 1)(5, "eui-page-column-body")(6, "form")(7, "div", 2)(8, "label", 3);
    \u0275\u0275text(9, " Search ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 4);
    \u0275\u0275element(11, "input", 5);
    \u0275\u0275elementStart(12, "button", 6);
    \u0275\u0275element(13, "eui-icon-svg", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 2)(15, "label", 3);
    \u0275\u0275text(16, " Responsible organisation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 4);
    \u0275\u0275element(18, "input", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 2)(20, "label", 3);
    \u0275\u0275text(21, " Owned by ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div");
    \u0275\u0275element(23, "input", 9);
    \u0275\u0275elementStart(24, "label", 10);
    \u0275\u0275text(25, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 11);
    \u0275\u0275elementStart(27, "label", 12);
    \u0275\u0275text(28, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 13);
    \u0275\u0275elementStart(30, "label", 14);
    \u0275\u0275text(31, "Three");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 15)(33, "label", 3)(34, "strong");
    \u0275\u0275text(35, "Additional filter");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "eui-slide-toggle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 15)(38, "label", 16)(39, "strong");
    \u0275\u0275text(40, "Navigation");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "eui-slide-toggle", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "eui-tree", 18);
    \u0275\u0275elementStart(43, "div")(44, "div", 15)(45, "label", 3)(46, "strong");
    \u0275\u0275text(47, "Dynamic filter");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(48, "eui-slide-toggle", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Empty");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "eui-page-column-footer")(52, "div", 15)(53, "div", 20);
    \u0275\u0275text(54, "Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 20);
    \u0275\u0275text(56, "Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 21);
    \u0275\u0275text(58, "Right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "eui-page-column")(60, "eui-page-column-header-left-content")(61, "div", 22)(62, "span", 23);
    \u0275\u0275text(63, " Filter results ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 22)(65, "span", 24);
    \u0275\u0275text(66, "96778 items found");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "eui-page-column-header-right-content", 22)(68, "div", 4)(69, "select", 25)(70, "option", 26);
    \u0275\u0275text(71, "Relevance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 27);
    \u0275\u0275text(73, "React");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 28);
    \u0275\u0275text(75, "Vue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "button", 29);
    \u0275\u0275element(77, "eui-icon-svg", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "button", 31);
    \u0275\u0275element(79, "eui-icon-svg", 32);
    \u0275\u0275elementStart(80, "span", 33);
    \u0275\u0275text(81, "Refresh list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "eui-page-column-body")(83, "ul");
    \u0275\u0275template(84, PortfolioComponent_li_84_Template, 40, 5, "li", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "eui-page-column-footer")(86, "div", 15)(87, "div", 20);
    \u0275\u0275text(88, "Footer column left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 20);
    \u0275\u0275text(90, "Footer column center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 21);
    \u0275\u0275text(92, "Footer column right");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(23);
    \u0275\u0275property("value", "one");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", "two");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", "three");
    \u0275\u0275advance(13);
    \u0275\u0275property("nodes", ctx.treeDataMultiLevels);
    \u0275\u0275advance(42);
    \u0275\u0275property("ngForOf", ctx.cardItems);
  }
}, dependencies: [NgForOf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, FormControlName, EuiPageComponent, EuiPageColumnComponent, EuiPageColumnHeaderLeftContentDirective, EuiPageColumnHeaderRightContentDirective, EuiPageColumnBodyContentDirective, EuiPageColumnFooterContentDirective, EuiPageColumnsComponent, EuiPageContentComponent, EuiPageHeaderComponent, EuiIconSvgComponent, EuiTooltipDirective, EuiInputNumberComponent, EuiInputNumberDirective, EuiLabelComponent, EuiButtonComponent, EuiCardComponent, EuiCardHeaderComponent, EuiCardHeaderTitleComponent, EuiCardContentComponent, EuiCardHeaderLeftContentComponent, EuiCardHeaderRightContentComponent, EuiCardHeaderSubtitleComponent, EuiChipComponent, EuiDropdownComponent, EuiDropdownItemComponent, EuiDropdownContentDirective, EuiSlideToggleComponent, EuiTreeComponent, EuiSelectComponent, EuiNgSelectOptionDirective, EuiSelectMultipleOption, EuiInputRadioComponent, EuiInputGroupComponent], encapsulation: 2 });
var PortfolioComponent = _PortfolioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioComponent, { className: "PortfolioComponent", filePath: "src\\app\\features\\portfolio\\portfolio.component.ts", lineNumber: 10 });
})();

// src/app/features/portfolio/portfolio-routing.module.ts
var _PortfolioRoutingModule = class _PortfolioRoutingModule {
};
_PortfolioRoutingModule.\u0275fac = function PortfolioRoutingModule_Factory(t) {
  return new (t || _PortfolioRoutingModule)();
};
_PortfolioRoutingModule.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _PortfolioRoutingModule });
_PortfolioRoutingModule.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ imports: [RouterModule.forChild([
  { path: "", component: PortfolioComponent }
])] });
var PortfolioRoutingModule = _PortfolioRoutingModule;

// src/app/features/portfolio/portfolio.module.ts
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
  PortfolioRoutingModule
] });
var Module = _Module;
export {
  Module
};
