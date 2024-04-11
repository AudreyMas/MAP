import {
  APP_INITIALIZER,
  ActionsSubject,
  BrowserAnimationsModule,
  BrowserModule,
  CONFIG_TOKEN,
  CachePreventionInterceptor,
  CoreModule,
  CoreModuleEffects,
  CorsSecurityInterceptor,
  CsrfPreventionInterceptor,
  EMPTY,
  EUI_CONFIG_TOKEN,
  EffectsModule,
  ErrorHandler,
  EuLoginSessionTimeoutHandlingInterceptor,
  EuiAppBreadcrumbComponent,
  EuiAppComponent,
  EuiAppSidebarBodyComponent,
  EuiAppSidebarComponent,
  EuiAppSidebarMenuComponent,
  EuiAppToolbarComponent,
  EuiBreadcrumbComponent,
  EuiBreadcrumbItemComponent,
  EuiIconSvgComponent,
  EuiLayoutModule,
  EuiNotificationsComponent,
  EuiToolbarAppComponent,
  EuiToolbarComponent,
  EuiToolbarEnvironmentComponent,
  EuiToolbarItemComponent,
  EuiToolbarItemsComponent,
  EuiToolbarLogoComponent,
  EuiUserProfileComponent,
  EuiUserProfileMenuComponent,
  EuiUserProfileMenuItemComponent,
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  I18nService,
  INIT,
  INITIAL_STATE,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  NgZone,
  Observable,
  ReducerManagerDispatcher,
  ReducerObservable,
  ReplaySubject,
  RouterModule,
  ScannedActionsSubject,
  SharedModule,
  StateObservable,
  StoreModule,
  TranslateModule,
  TranslatePipe,
  UPDATE,
  UserService,
  __commonJS,
  __spreadProps,
  __spreadValues,
  catchError,
  concatMap,
  coreReducers,
  debounceTime,
  enableProdMode,
  filter,
  inject,
  localStorageSync,
  makeEnvironmentProviders,
  map,
  merge,
  observeOn,
  of,
  platformBrowser,
  preInitApp,
  queueScheduler,
  scan,
  setClassMetadata,
  share,
  skip,
  switchMap,
  take,
  takeUntil,
  timeout,
  toSignal,
  translateConfig,
  withLatestFrom,
  zip,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-NLU67AAA.js";

// node_modules/deep-freeze-strict/index.js
var require_deep_freeze_strict = __commonJS({
  "node_modules/deep-freeze-strict/index.js"(exports, module) {
    module.exports = function deepFreeze2(o) {
      Object.freeze(o);
      var oIsFunction = typeof o === "function";
      var hasOwnProp = Object.prototype.hasOwnProperty;
      Object.getOwnPropertyNames(o).forEach(function(prop) {
        if (hasOwnProp.call(o, prop) && (oIsFunction ? prop !== "caller" && prop !== "callee" && prop !== "arguments" : true) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
          deepFreeze2(o[prop]);
        }
      });
      return o;
    };
  }
});

// src/app/app-routing.module.ts
var routes = [
  { path: "", redirectTo: "screen/organigramme", pathMatch: "full" },
  { path: "index.jsp", redirectTo: "screen/home" },
  { path: "screen/home", loadChildren: () => import("./chunk-RCQJD2E7.js").then((m) => m.Module) },
  { path: "screen/contract", loadChildren: () => import("./chunk-G5SXN2KF.js").then((m) => m.Module) },
  { path: "screen/portfolio", loadChildren: () => import("./chunk-5TUR4CEA.js").then((m) => m.Module) },
  { path: "screen/ImplementationPlan", loadChildren: () => import("./chunk-4ZDAYWAP.js").then((m) => m.Module) },
  { path: "screen/organigramme", loadChildren: () => import("./chunk-4NU4RL5K.js").then((m) => m.Module) }
];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes)] });
var AppRoutingModule = _AppRoutingModule;

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.sidebarItems = [
      { label: "Organigramme", url: "screen/organigramme", iconSvgName: "bag:sharp" },
      { label: "Implementation Plan - Contract", url: "screen/ImplementationPlan", iconSvgName: "bag:sharp" },
      { label: "Contract - Synopsis", url: "screen/contract", iconSvgName: "bag:sharp" },
      { label: "Portfolio", url: "screen/portfolio", iconSvgName: "bag:sharp" }
    ];
    this.notificationItems = [
      { label: "Title label 1", subLabel: "Subtitle label" },
      { label: "Title label 2", subLabel: "Subtitle label" },
      { label: "Title label 3", subLabel: "Subtitle label" },
      { label: "Title label 4", subLabel: "Subtitle label" }
    ];
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /** @pureOrBreakMyCode */
\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 28, vars: 10, consts: [["label", "Home"], ["label", "Page"], ["appName", "appName"], ["euiPositionRight", ""], ["subInfos", "eUI developer", "isShowAvatarInitials", ""], ["icon", "old-eui-person-thin"], ["icon", "old-eui-logout-thin"], [3, "count", "items"], [3, "items", "hasIcons"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "eui-app")(1, "eui-app-breadcrumb")(2, "eui-breadcrumb");
    \u0275\u0275element(3, "eui-breadcrumb-item", 0)(4, "eui-breadcrumb-item", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "eui-app-toolbar")(6, "eui-toolbar");
    \u0275\u0275element(7, "eui-toolbar-logo")(8, "eui-toolbar-app", 2);
    \u0275\u0275elementStart(9, "eui-toolbar-environment");
    \u0275\u0275text(10, "MOCK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "eui-toolbar-items", 3)(12, "eui-toolbar-item")(13, "eui-user-profile", 4)(14, "eui-user-profile-menu")(15, "eui-user-profile-menu-item");
    \u0275\u0275element(16, "eui-icon-svg", 5);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "eui-user-profile-menu-item");
    \u0275\u0275element(20, "eui-icon-svg", 6);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "eui-toolbar-item");
    \u0275\u0275element(24, "eui-notifications", 7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "eui-app-sidebar")(26, "eui-app-sidebar-body");
    \u0275\u0275element(27, "eui-app-sidebar-menu", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 6, "eui.my-profile-informations"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 8, "eui.sign-out"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("count", ctx.notificationItems == null ? null : ctx.notificationItems.length)("items", ctx.notificationItems);
    \u0275\u0275advance(3);
    \u0275\u0275property("items", ctx.sidebarItems)("hasIcons", true);
  }
}, dependencies: [EuiAppComponent, EuiUserProfileComponent, EuiUserProfileMenuComponent, EuiUserProfileMenuItemComponent, EuiBreadcrumbComponent, EuiBreadcrumbItemComponent, EuiAppToolbarComponent, EuiToolbarComponent, EuiToolbarItemComponent, EuiToolbarItemsComponent, EuiToolbarLogoComponent, EuiToolbarAppComponent, EuiToolbarEnvironmentComponent, EuiAppSidebarComponent, EuiAppSidebarBodyComponent, EuiAppSidebarMenuComponent, EuiAppBreadcrumbComponent, EuiNotificationsComponent, EuiIconSvgComponent, TranslatePipe], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 7 });
})();

// node_modules/@ngrx/store-devtools/fesm2022/ngrx-store-devtools.mjs
var PERFORM_ACTION = "PERFORM_ACTION";
var REFRESH = "REFRESH";
var RESET = "RESET";
var ROLLBACK = "ROLLBACK";
var COMMIT = "COMMIT";
var SWEEP = "SWEEP";
var TOGGLE_ACTION = "TOGGLE_ACTION";
var SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE";
var JUMP_TO_STATE = "JUMP_TO_STATE";
var JUMP_TO_ACTION = "JUMP_TO_ACTION";
var IMPORT_STATE = "IMPORT_STATE";
var LOCK_CHANGES = "LOCK_CHANGES";
var PAUSE_RECORDING = "PAUSE_RECORDING";
var PerformAction = class {
  constructor(action2, timestamp) {
    this.action = action2;
    this.timestamp = timestamp;
    this.type = PERFORM_ACTION;
    if (typeof action2.type === "undefined") {
      throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    }
  }
};
var Refresh = class {
  constructor() {
    this.type = REFRESH;
  }
};
var Reset = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = RESET;
  }
};
var Rollback = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = ROLLBACK;
  }
};
var Commit = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = COMMIT;
  }
};
var Sweep = class {
  constructor() {
    this.type = SWEEP;
  }
};
var ToggleAction = class {
  constructor(id) {
    this.id = id;
    this.type = TOGGLE_ACTION;
  }
};
var SetActionsActive = class {
  constructor(start, end, active = true) {
    this.start = start;
    this.end = end;
    this.active = active;
    this.type = SET_ACTIONS_ACTIVE;
  }
};
var JumpToState = class {
  constructor(index) {
    this.index = index;
    this.type = JUMP_TO_STATE;
  }
};
var JumpToAction = class {
  constructor(actionId) {
    this.actionId = actionId;
    this.type = JUMP_TO_ACTION;
  }
};
var ImportState = class {
  constructor(nextLiftedState) {
    this.nextLiftedState = nextLiftedState;
    this.type = IMPORT_STATE;
  }
};
var LockChanges = class {
  constructor(status) {
    this.status = status;
    this.type = LOCK_CHANGES;
  }
};
var PauseRecording = class {
  constructor(status) {
    this.status = status;
    this.type = PAUSE_RECORDING;
  }
};
var StoreDevtoolsConfig = class {
  constructor() {
    this.maxAge = false;
  }
};
var STORE_DEVTOOLS_CONFIG = new InjectionToken("@ngrx/store-devtools Options");
var INITIAL_OPTIONS = new InjectionToken("@ngrx/store-devtools Initial Config");
function noMonitor() {
  return null;
}
var DEFAULT_NAME = "NgRx Store DevTools";
function createConfig(optionsInput) {
  const DEFAULT_OPTIONS = {
    maxAge: false,
    monitor: noMonitor,
    actionSanitizer: void 0,
    stateSanitizer: void 0,
    name: DEFAULT_NAME,
    serialize: false,
    logOnly: false,
    autoPause: false,
    trace: false,
    traceLimit: 75,
    // Add all features explicitly. This prevent buggy behavior for
    // options like "lock" which might otherwise not show up.
    features: {
      pause: true,
      lock: true,
      persist: true,
      export: true,
      import: "custom",
      jump: true,
      skip: true,
      reorder: true,
      dispatch: true,
      test: true
      // Generate tests for the selected actions
    },
    connectInZone: false
  };
  const options = typeof optionsInput === "function" ? optionsInput() : optionsInput;
  const logOnly = options.logOnly ? {
    pause: true,
    export: true,
    test: true
  } : false;
  const features = options.features || logOnly || DEFAULT_OPTIONS.features;
  if (features.import === true) {
    features.import = "custom";
  }
  const config = Object.assign({}, DEFAULT_OPTIONS, {
    features
  }, options);
  if (config.maxAge && config.maxAge < 2) {
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${config.maxAge}`);
  }
  return config;
}
function difference(first, second) {
  return first.filter((item) => second.indexOf(item) < 0);
}
function unliftState(liftedState) {
  const {
    computedStates,
    currentStateIndex
  } = liftedState;
  if (currentStateIndex >= computedStates.length) {
    const {
      state: state2
    } = computedStates[computedStates.length - 1];
    return state2;
  }
  const {
    state
  } = computedStates[currentStateIndex];
  return state;
}
function unliftAction(liftedState) {
  return liftedState.actionsById[liftedState.nextActionId - 1];
}
function liftAction(action2) {
  return new PerformAction(action2, +Date.now());
}
function sanitizeActions(actionSanitizer, actions) {
  return Object.keys(actions).reduce((sanitizedActions, actionIdx) => {
    const idx = Number(actionIdx);
    sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
    return sanitizedActions;
  }, {});
}
function sanitizeAction(actionSanitizer, action2, actionIdx) {
  return __spreadProps(__spreadValues({}, action2), {
    action: actionSanitizer(action2.action, actionIdx)
  });
}
function sanitizeStates(stateSanitizer, states) {
  return states.map((computedState, idx) => ({
    state: sanitizeState(stateSanitizer, computedState.state, idx),
    error: computedState.error
  }));
}
function sanitizeState(stateSanitizer, state, stateIdx) {
  return stateSanitizer(state, stateIdx);
}
function shouldFilterActions(config) {
  return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
  const filteredStagedActionIds = [];
  const filteredActionsById = {};
  const filteredComputedStates = [];
  liftedState.stagedActionIds.forEach((id, idx) => {
    const liftedAction = liftedState.actionsById[id];
    if (!liftedAction)
      return;
    if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
      return;
    }
    filteredActionsById[id] = liftedAction;
    filteredStagedActionIds.push(id);
    filteredComputedStates.push(liftedState.computedStates[idx]);
  });
  return __spreadProps(__spreadValues({}, liftedState), {
    stagedActionIds: filteredStagedActionIds,
    actionsById: filteredActionsById,
    computedStates: filteredComputedStates
  });
}
function isActionFiltered(state, action2, predicate, safelist, blockedlist) {
  const predicateMatch = predicate && !predicate(state, action2.action);
  const safelistMatch = safelist && !action2.action.type.match(safelist.map((s) => escapeRegExp(s)).join("|"));
  const blocklistMatch = blockedlist && action2.action.type.match(blockedlist.map((s) => escapeRegExp(s)).join("|"));
  return predicateMatch || safelistMatch || blocklistMatch;
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function injectZoneConfig(connectInZone) {
  const ngZone = connectInZone ? inject(NgZone) : null;
  return {
    ngZone,
    connectInZone
  };
}
var _DevtoolsDispatcher = class _DevtoolsDispatcher extends ActionsSubject {
};
_DevtoolsDispatcher.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DevtoolsDispatcher_BaseFactory;
  return function DevtoolsDispatcher_Factory(t) {
    return (\u0275DevtoolsDispatcher_BaseFactory || (\u0275DevtoolsDispatcher_BaseFactory = \u0275\u0275getInheritedFactory(_DevtoolsDispatcher)))(t || _DevtoolsDispatcher);
  };
})();
_DevtoolsDispatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DevtoolsDispatcher,
  factory: _DevtoolsDispatcher.\u0275fac
});
var DevtoolsDispatcher = _DevtoolsDispatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsDispatcher, [{
    type: Injectable
  }], null, null);
})();
var ExtensionActionTypes = {
  START: "START",
  DISPATCH: "DISPATCH",
  STOP: "STOP",
  ACTION: "ACTION"
};
var REDUX_DEVTOOLS_EXTENSION = new InjectionToken("@ngrx/store-devtools Redux Devtools Extension");
var _DevtoolsExtension = class _DevtoolsExtension {
  constructor(devtoolsExtension, config, dispatcher) {
    this.config = config;
    this.dispatcher = dispatcher;
    this.zoneConfig = injectZoneConfig(this.config.connectInZone);
    this.devtoolsExtension = devtoolsExtension;
    this.createActionStreams();
  }
  notify(action2, state) {
    if (!this.devtoolsExtension) {
      return;
    }
    if (action2.type === PERFORM_ACTION) {
      if (state.isLocked || state.isPaused) {
        return;
      }
      const currentState = unliftState(state);
      if (shouldFilterActions(this.config) && isActionFiltered(currentState, action2, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
        return;
      }
      const sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
      const sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action2, state.nextActionId) : action2;
      this.sendToReduxDevtools(() => this.extensionConnection.send(sanitizedAction, sanitizedState));
    } else {
      const sanitizedLiftedState = __spreadProps(__spreadValues({}, state), {
        stagedActionIds: state.stagedActionIds,
        actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
        computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
      });
      this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, sanitizedLiftedState, this.getExtensionConfig(this.config)));
    }
  }
  createChangesObservable() {
    if (!this.devtoolsExtension) {
      return EMPTY;
    }
    return new Observable((subscriber) => {
      const connection = this.zoneConfig.connectInZone ? (
        // To reduce change detection cycles, we need to run the `connect` method
        // outside of the Angular zone. The `connect` method adds a `message`
        // event listener to communicate with an extension using `window.postMessage`
        // and handle message events.
        this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config)))
      ) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
      this.extensionConnection = connection;
      connection.init();
      connection.subscribe((change) => subscriber.next(change));
      return connection.unsubscribe;
    });
  }
  createActionStreams() {
    const changes$ = this.createChangesObservable().pipe(share());
    const start$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.START));
    const stop$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.STOP));
    const liftedActions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.DISPATCH), map((change) => this.unwrapAction(change.payload)), concatMap((action2) => {
      if (action2.type === IMPORT_STATE) {
        return this.dispatcher.pipe(filter((action3) => action3.type === UPDATE), timeout(1e3), debounceTime(1e3), map(() => action2), catchError(() => of(action2)), take(1));
      } else {
        return of(action2);
      }
    }));
    const actions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.ACTION), map((change) => this.unwrapAction(change.payload)));
    const actionsUntilStop$ = actions$.pipe(takeUntil(stop$));
    const liftedUntilStop$ = liftedActions$.pipe(takeUntil(stop$));
    this.start$ = start$.pipe(takeUntil(stop$));
    this.actions$ = this.start$.pipe(switchMap(() => actionsUntilStop$));
    this.liftedActions$ = this.start$.pipe(switchMap(() => liftedUntilStop$));
  }
  unwrapAction(action) {
    return typeof action === "string" ? eval(`(${action})`) : action;
  }
  getExtensionConfig(config) {
    const extensionOptions = {
      name: config.name,
      features: config.features,
      serialize: config.serialize,
      autoPause: config.autoPause ?? false,
      trace: config.trace ?? false,
      traceLimit: config.traceLimit ?? 75
      // The action/state sanitizers are not added to the config
      // because sanitation is done in this class already.
      // It is done before sending it to the devtools extension for consistency:
      // - If we call extensionConnection.send(...),
      //   the extension would call the sanitizers.
      // - If we call devtoolsExtension.send(...) (aka full state update),
      //   the extension would NOT call the sanitizers, so we have to do it ourselves.
    };
    if (config.maxAge !== false) {
      extensionOptions.maxAge = config.maxAge;
    }
    return extensionOptions;
  }
  sendToReduxDevtools(send) {
    try {
      send();
    } catch (err) {
      console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", err);
    }
  }
};
_DevtoolsExtension.\u0275fac = function DevtoolsExtension_Factory(t) {
  return new (t || _DevtoolsExtension)(\u0275\u0275inject(REDUX_DEVTOOLS_EXTENSION), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG), \u0275\u0275inject(DevtoolsDispatcher));
};
_DevtoolsExtension.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DevtoolsExtension,
  factory: _DevtoolsExtension.\u0275fac
});
var DevtoolsExtension = _DevtoolsExtension;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsExtension, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REDUX_DEVTOOLS_EXTENSION]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }, {
    type: DevtoolsDispatcher
  }], null);
})();
var INIT_ACTION = {
  type: INIT
};
var RECOMPUTE = "@ngrx/store-devtools/recompute";
var RECOMPUTE_ACTION = {
  type: RECOMPUTE
};
function computeNextEntry(reducer, action2, state, error, errorHandler) {
  if (error) {
    return {
      state,
      error: "Interrupted by an error up the chain"
    };
  }
  let nextState = state;
  let nextError;
  try {
    nextState = reducer(state, action2);
  } catch (err) {
    nextError = err.toString();
    errorHandler.handleError(err);
  }
  return {
    state: nextState,
    error: nextError
  };
}
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }
  const nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  const lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
  for (let i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
    const actionId = stagedActionIds[i];
    const action2 = actionsById[actionId].action;
    const previousEntry = nextComputedStates[i - 1];
    const previousState = previousEntry ? previousEntry.state : committedState;
    const previousError = previousEntry ? previousEntry.error : void 0;
    const shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    const entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action2, previousState, previousError, errorHandler);
    nextComputedStates.push(entry);
  }
  if (isPaused) {
    nextComputedStates.push(computedStates[computedStates.length - 1]);
  }
  return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
  return {
    monitorState: monitorReducer(void 0, {}),
    nextActionId: 1,
    actionsById: {
      0: liftAction(INIT_ACTION)
    },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: false,
    isPaused: false
  };
}
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer, options = {}) {
  return (reducer) => (liftedState, liftedAction) => {
    let {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    } = liftedState || initialLiftedState;
    if (!liftedState) {
      actionsById = Object.create(actionsById);
    }
    function commitExcessActions(n) {
      let excess = n;
      let idsToDelete = stagedActionIds.slice(1, excess + 1);
      for (let i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }
      skippedActionIds = skippedActionIds.filter((id) => idsToDelete.indexOf(id) === -1);
      stagedActionIds = [0, ...stagedActionIds.slice(excess + 1)];
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }
    function commitChanges() {
      actionsById = {
        0: liftAction(INIT_ACTION)
      };
      nextActionId = 1;
      stagedActionIds = [0];
      skippedActionIds = [];
      committedState = computedStates[currentStateIndex].state;
      currentStateIndex = 0;
      computedStates = [];
    }
    let minInvalidatedStateIndex = 0;
    switch (liftedAction.type) {
      case LOCK_CHANGES: {
        isLocked = liftedAction.status;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case PAUSE_RECORDING: {
        isPaused = liftedAction.status;
        if (isPaused) {
          stagedActionIds = [...stagedActionIds, nextActionId];
          actionsById[nextActionId] = new PerformAction({
            type: "@ngrx/devtools/pause"
          }, +Date.now());
          nextActionId++;
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
          if (currentStateIndex === stagedActionIds.length - 2) {
            currentStateIndex++;
          }
          minInvalidatedStateIndex = Infinity;
        } else {
          commitChanges();
        }
        break;
      }
      case RESET: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        committedState = initialCommittedState;
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case COMMIT: {
        commitChanges();
        break;
      }
      case ROLLBACK: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case TOGGLE_ACTION: {
        const {
          id: actionId
        } = liftedAction;
        const index = skippedActionIds.indexOf(actionId);
        if (index === -1) {
          skippedActionIds = [actionId, ...skippedActionIds];
        } else {
          skippedActionIds = skippedActionIds.filter((id) => id !== actionId);
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
        break;
      }
      case SET_ACTIONS_ACTIVE: {
        const {
          start,
          end,
          active
        } = liftedAction;
        const actionIds = [];
        for (let i = start; i < end; i++)
          actionIds.push(i);
        if (active) {
          skippedActionIds = difference(skippedActionIds, actionIds);
        } else {
          skippedActionIds = [...skippedActionIds, ...actionIds];
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(start);
        break;
      }
      case JUMP_TO_STATE: {
        currentStateIndex = liftedAction.index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case JUMP_TO_ACTION: {
        const index = stagedActionIds.indexOf(liftedAction.actionId);
        if (index !== -1)
          currentStateIndex = index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case SWEEP: {
        stagedActionIds = difference(stagedActionIds, skippedActionIds);
        skippedActionIds = [];
        currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
        break;
      }
      case PERFORM_ACTION: {
        if (isLocked) {
          return liftedState || initialLiftedState;
        }
        if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
          const lastState = computedStates[computedStates.length - 1];
          computedStates = [...computedStates.slice(0, -1), computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler)];
          minInvalidatedStateIndex = Infinity;
          break;
        }
        if (options.maxAge && stagedActionIds.length === options.maxAge) {
          commitExcessActions(1);
        }
        if (currentStateIndex === stagedActionIds.length - 1) {
          currentStateIndex++;
        }
        const actionId = nextActionId++;
        actionsById[actionId] = liftedAction;
        stagedActionIds = [...stagedActionIds, actionId];
        minInvalidatedStateIndex = stagedActionIds.length - 1;
        break;
      }
      case IMPORT_STATE: {
        ({
          monitorState,
          actionsById,
          nextActionId,
          stagedActionIds,
          skippedActionIds,
          committedState,
          currentStateIndex,
          computedStates,
          isLocked,
          isPaused
        } = liftedAction.nextLiftedState);
        break;
      }
      case INIT: {
        minInvalidatedStateIndex = 0;
        if (options.maxAge && stagedActionIds.length > options.maxAge) {
          computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          commitExcessActions(stagedActionIds.length - options.maxAge);
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      case UPDATE: {
        const stateHasErrors = computedStates.filter((state) => state.error).length > 0;
        if (stateHasErrors) {
          minInvalidatedStateIndex = 0;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
            commitExcessActions(stagedActionIds.length - options.maxAge);
            minInvalidatedStateIndex = Infinity;
          }
        } else {
          if (!isPaused && !isLocked) {
            if (currentStateIndex === stagedActionIds.length - 1) {
              currentStateIndex++;
            }
            const actionId = nextActionId++;
            actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
            stagedActionIds = [...stagedActionIds, actionId];
            minInvalidatedStateIndex = stagedActionIds.length - 1;
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          }
          computedStates = computedStates.map((cmp) => __spreadProps(__spreadValues({}, cmp), {
            state: reducer(cmp.state, RECOMPUTE_ACTION)
          }));
          currentStateIndex = stagedActionIds.length - 1;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            commitExcessActions(stagedActionIds.length - options.maxAge);
          }
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      default: {
        minInvalidatedStateIndex = Infinity;
        break;
      }
    }
    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    };
  };
}
var _StoreDevtools = class _StoreDevtools {
  constructor(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState, config) {
    const liftedInitialState = liftInitialState(initialState, config.monitor);
    const liftReducer = liftReducerWith(initialState, liftedInitialState, errorHandler, config.monitor, config);
    const liftedAction$ = merge(merge(actions$.asObservable().pipe(skip(1)), extension.actions$).pipe(map(liftAction)), dispatcher, extension.liftedActions$).pipe(observeOn(queueScheduler));
    const liftedReducer$ = reducers$.pipe(map(liftReducer));
    const zoneConfig = injectZoneConfig(config.connectInZone);
    const liftedStateSubject = new ReplaySubject(1);
    this.liftedStateSubscription = liftedAction$.pipe(
      withLatestFrom(liftedReducer$),
      // The extension would post messages back outside of the Angular zone
      // because we call `connect()` wrapped with `runOutsideAngular`. We run change
      // detection only once at the end after all the required asynchronous tasks have
      // been processed (for instance, `setInterval` scheduled by the `timeout` operator).
      // We have to re-enter the Angular zone before the `scan` since it runs the reducer
      // which must be run within the Angular zone.
      emitInZone(zoneConfig),
      scan(({
        state: liftedState
      }, [action2, reducer]) => {
        let reducedLiftedState = reducer(liftedState, action2);
        if (action2.type !== PERFORM_ACTION && shouldFilterActions(config)) {
          reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
        }
        extension.notify(action2, reducedLiftedState);
        return {
          state: reducedLiftedState,
          action: action2
        };
      }, {
        state: liftedInitialState,
        action: null
      })
    ).subscribe(({
      state,
      action: action2
    }) => {
      liftedStateSubject.next(state);
      if (action2.type === PERFORM_ACTION) {
        const unliftedAction = action2.action;
        scannedActions.next(unliftedAction);
      }
    });
    this.extensionStartSubscription = extension.start$.pipe(emitInZone(zoneConfig)).subscribe(() => {
      this.refresh();
    });
    const liftedState$ = liftedStateSubject.asObservable();
    const state$ = liftedState$.pipe(map(unliftState));
    Object.defineProperty(state$, "state", {
      value: toSignal(state$, {
        manualCleanup: true,
        requireSync: true
      })
    });
    this.dispatcher = dispatcher;
    this.liftedState = liftedState$;
    this.state = state$;
  }
  ngOnDestroy() {
    this.liftedStateSubscription.unsubscribe();
    this.extensionStartSubscription.unsubscribe();
  }
  dispatch(action2) {
    this.dispatcher.next(action2);
  }
  next(action2) {
    this.dispatcher.next(action2);
  }
  error(error) {
  }
  complete() {
  }
  performAction(action2) {
    this.dispatch(new PerformAction(action2, +Date.now()));
  }
  refresh() {
    this.dispatch(new Refresh());
  }
  reset() {
    this.dispatch(new Reset(+Date.now()));
  }
  rollback() {
    this.dispatch(new Rollback(+Date.now()));
  }
  commit() {
    this.dispatch(new Commit(+Date.now()));
  }
  sweep() {
    this.dispatch(new Sweep());
  }
  toggleAction(id) {
    this.dispatch(new ToggleAction(id));
  }
  jumpToAction(actionId) {
    this.dispatch(new JumpToAction(actionId));
  }
  jumpToState(index) {
    this.dispatch(new JumpToState(index));
  }
  importState(nextLiftedState) {
    this.dispatch(new ImportState(nextLiftedState));
  }
  lockChanges(status) {
    this.dispatch(new LockChanges(status));
  }
  pauseRecording(status) {
    this.dispatch(new PauseRecording(status));
  }
};
_StoreDevtools.\u0275fac = function StoreDevtools_Factory(t) {
  return new (t || _StoreDevtools)(\u0275\u0275inject(DevtoolsDispatcher), \u0275\u0275inject(ActionsSubject), \u0275\u0275inject(ReducerObservable), \u0275\u0275inject(DevtoolsExtension), \u0275\u0275inject(ScannedActionsSubject), \u0275\u0275inject(ErrorHandler), \u0275\u0275inject(INITIAL_STATE), \u0275\u0275inject(STORE_DEVTOOLS_CONFIG));
};
_StoreDevtools.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StoreDevtools,
  factory: _StoreDevtools.\u0275fac
});
var StoreDevtools = _StoreDevtools;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtools, [{
    type: Injectable
  }], () => [{
    type: DevtoolsDispatcher
  }, {
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: DevtoolsExtension
  }, {
    type: ScannedActionsSubject
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }], null);
})();
function emitInZone({
  ngZone,
  connectInZone
}) {
  return (source) => connectInZone ? new Observable((subscriber) => source.subscribe({
    next: (value) => ngZone.run(() => subscriber.next(value)),
    error: (error) => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  })) : source;
}
var IS_EXTENSION_OR_MONITOR_PRESENT = new InjectionToken("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function createIsExtensionOrMonitorPresent(extension, config) {
  return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
  const extensionKey = "__REDUX_DEVTOOLS_EXTENSION__";
  if (typeof window === "object" && typeof window[extensionKey] !== "undefined") {
    return window[extensionKey];
  } else {
    return null;
  }
}
function provideStoreDevtools(options = {}) {
  return makeEnvironmentProviders([DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
    provide: INITIAL_OPTIONS,
    useValue: options
  }, {
    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
    useFactory: createIsExtensionOrMonitorPresent
  }, {
    provide: REDUX_DEVTOOLS_EXTENSION,
    useFactory: createReduxDevtoolsExtension
  }, {
    provide: STORE_DEVTOOLS_CONFIG,
    deps: [INITIAL_OPTIONS],
    useFactory: createConfig
  }, {
    provide: StateObservable,
    deps: [StoreDevtools],
    useFactory: createStateObservable
  }, {
    provide: ReducerManagerDispatcher,
    useExisting: DevtoolsDispatcher
  }]);
}
function createStateObservable(devtools) {
  return devtools.state;
}
var _StoreDevtoolsModule = class _StoreDevtoolsModule {
  static instrument(options = {}) {
    return {
      ngModule: _StoreDevtoolsModule,
      providers: [provideStoreDevtools(options)]
    };
  }
};
_StoreDevtoolsModule.\u0275fac = function StoreDevtoolsModule_Factory(t) {
  return new (t || _StoreDevtoolsModule)();
};
_StoreDevtoolsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreDevtoolsModule
});
_StoreDevtoolsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var StoreDevtoolsModule = _StoreDevtoolsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtoolsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// src/config/global.ts
var GLOBAL = {
  appTitle: "CSDR-app",
  i18n: {
    i18nService: {
      defaultLanguage: "en",
      languages: [
        {
          code: "en",
          label: "English"
        },
        {
          code: "fr",
          label: "Fran\xE7ais"
        }
      ]
    },
    i18nLoader: {
      i18nFolders: [
        "i18n-eui",
        "i18n",
        "i18n-ecl"
      ]
    }
  },
  user: {
    defaultUserPreferences: {
      dashboard: {},
      lang: "en"
    }
  }
};

// src/config/modules.ts
var MODULES = {
  core: {
    base: "/api"
  }
};

// src/config/index.ts
var appConfig = {
  global: GLOBAL,
  modules: MODULES
};

// src/environments/environment.ts
var environment = {
  production: true,
  enableDevToolRedux: false,
  envDynamicConfig: {
    uri: "assets/env-json-config.json",
    deepMerge: true,
    merge: ["modules"]
  }
};

// node_modules/ngrx-store-freeze/es6/src/index.js
var deepFreeze = require_deep_freeze_strict();
function storeFreeze(reducer) {
  return function freeze(state, action2) {
    state = state || {};
    deepFreeze(state);
    if (action2.payload) {
      deepFreeze(action2.payload);
    }
    var nextState = reducer(state, action2);
    deepFreeze(nextState);
    return nextState;
  };
}

// src/app/core/reducers/index.ts
var REDUCER_TOKEN = new InjectionToken("Registered Reducers");
var rootReducer = Object.assign({}, coreReducers, {
  // [fromTaskManager.namespace]: fromTaskManager.reducers,
});
var getReducers = () => rootReducer;
var metaReducers = !environment.production ? [localStorageSync, storeFreeze] : [localStorageSync];

// src/app/core/core.module.ts
var _CoreModule = class _CoreModule {
};
_CoreModule.\u0275fac = function CoreModule_Factory(t) {
  return new (t || _CoreModule)();
};
_CoreModule.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _CoreModule });
_CoreModule.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ providers: [
  {
    provide: REDUCER_TOKEN,
    deps: [],
    useFactory: getReducers
  },
  {
    provide: EUI_CONFIG_TOKEN,
    useValue: { appConfig, environment }
  },
  {
    // Sets the withCredentials on Ajax Request to send the JSESSIONID cookie to another domain.
    // This is necessary when a request is being made to another domain that is protected by EU Login.
    provide: HTTP_INTERCEPTORS,
    useClass: CorsSecurityInterceptor,
    multi: true
  },
  {
    // WARNING: in case of OpenID this is not needed since OpenID is stateless therefore no revalidation needed.
    // When the authentication session is invalid, we need to re-authenticate. The browser refreshes the current URL,
    // and lets the EU Login client redirect to the official EU Login page.
    provide: HTTP_INTERCEPTORS,
    useClass: EuLoginSessionTimeoutHandlingInterceptor,
    multi: true
  },
  {
    // Adds HTTP header to each Ajax request that ensures the request is set by a piece of JavaScript code in the application.
    // This prevents dynamically-loaded content from forging a request in the name of the currently logged-in user.
    // Be aware that this assumes that cross-site scripting (XSS) is already put in place, (default setting in Angular).
    provide: HTTP_INTERCEPTORS,
    useClass: CsrfPreventionInterceptor,
    multi: true
  },
  {
    // Asks the intermediate proxies not to return a cache copy of the resource.
    // In matter of fact forces each server in the chain to validate the freshness of the resource.
    provide: HTTP_INTERCEPTORS,
    useClass: CachePreventionInterceptor,
    multi: true
  }
], imports: [
  EuiLayoutModule,
  SharedModule,
  HttpClientModule,
  CoreModule.forRoot(),
  EffectsModule.forRoot([...CoreModuleEffects]),
  TranslateModule.forRoot(translateConfig),
  StoreModule.forRoot(REDUCER_TOKEN, { metaReducers }),
  !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  EuiLayoutModule,
  SharedModule
] });
var CoreModule2 = _CoreModule;

// src/app/mock-user-details.ts
var mockUserDetails = {
  userId: "123",
  firstName: "Audrey",
  lastName: "Masamba"
  // Add more properties as needed
};

// src/app/app-starter.service.ts
var _AppStarterService = class _AppStarterService {
  constructor(userService, i18nService, config, http) {
    this.userService = userService;
    this.i18nService = i18nService;
    this.config = config;
    this.http = http;
  }
  // eslint-disable-next-line
  start() {
    return zip(this.initUserService().pipe(switchMap((userStatus) => {
      console.log(userStatus);
      return this.i18nService.init();
    })));
  }
  /**
   * Fetches user details,
   * create user: UserState object
   * then initialise to the UserService on run time
   */
  // eslint-disable-next-line
  initUserService() {
    return zip(this.fetchUserDetails()).pipe(switchMap(([userDetails]) => this.userService.init(userDetails)));
  }
  /**
   * Fetches user details
   */
  // private fetchUserDetails(): Observable<UserDetails> {
  //     // const url = this.config.modules.your_custom_module.your_custom_endpoint
  //     const moduleCoreApi = this.config.modules.core;
  //     const url = `${moduleCoreApi.base}${moduleCoreApi.userDetails}`;
  //     const user = { userId: 'anonymous' };
  //     if (!url) {
  //         return of(user);
  //     }
  //     return this.http.get<UserDetails>(url);
  // }
  /** Fetching MOCK DATA **/
  fetchUserDetails() {
    return of(mockUserDetails);
  }
};
_AppStarterService.\u0275fac = function AppStarterService_Factory(t) {
  return new (t || _AppStarterService)(\u0275\u0275inject(UserService), \u0275\u0275inject(I18nService), \u0275\u0275inject(CONFIG_TOKEN), \u0275\u0275inject(HttpClient));
};
_AppStarterService.\u0275prov = /** @pureOrBreakMyCode */
\u0275\u0275defineInjectable({ token: _AppStarterService, factory: _AppStarterService.\u0275fac, providedIn: "root" });
var AppStarterService = _AppStarterService;

// src/app/app.module.ts
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.\u0275mod = /** @pureOrBreakMyCode */
\u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /** @pureOrBreakMyCode */
\u0275\u0275defineInjector({ providers: [
  AppStarterService,
  {
    provide: APP_INITIALIZER,
    useFactory: (appStarterService) => () => new Promise((resolve) => {
      appStarterService.start().subscribe(() => resolve());
    }),
    deps: [AppStarterService],
    multi: true
  }
], imports: [
  BrowserModule,
  BrowserAnimationsModule,
  CoreModule2,
  AppRoutingModule
] });
var AppModule = _AppModule;

// src/main.ts
if (environment.production) {
  enableProdMode();
}
preInitApp(environment).then(() => platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err)));
window.global = window;
