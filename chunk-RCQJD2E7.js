import {
  CONFIG_TOKEN,
  EuiPageComponent,
  EuiPageHeaderComponent,
  RouterModule,
  SharedModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpropertyInterpolate
} from "./chunk-NLU67AAA.js";

// src/app/features/home/home.component.ts
var _HomeComponent = class _HomeComponent {
  constructor(config) {
    this.config = config;
    console.log(config);
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(CONFIG_TOKEN));
};
_HomeComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["ng-component"]], decls: 3, vars: 3, consts: [[3, "label"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "eui-page");
    \u0275\u0275element(1, "eui-page-header", 0);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(2, 1, "page.home.title"));
  }
}, dependencies: [EuiPageComponent, EuiPageHeaderComponent, TranslatePipe], encapsulation: 2 });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\home\\home.component.ts", lineNumber: 7 });
})();

// src/app/features/home/home-routing.module.ts
var routes = [
  { path: "", component: HomeComponent }
];
var _HomeRoutingModule = class _HomeRoutingModule {
};
_HomeRoutingModule.\u0275fac = function HomeRoutingModule_Factory(t) {
  return new (t || _HomeRoutingModule)();
};
_HomeRoutingModule.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _HomeRoutingModule });
_HomeRoutingModule.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes)] });
var HomeRoutingModule = _HomeRoutingModule;

// src/app/features/home/home.module.ts
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
  HomeRoutingModule
] });
var Module = _Module;
export {
  Module
};
