/*! For license information please see src-lib-directives-rca-throttle-click-rca-throttle-click-demo-rca-throttle-click-demo-stories.8e592f11.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[5507,1323],{"./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n:host:not(.underlined) {\n  text-decoration-line: none;\n}\n:host:not(.underlined):hover {\n  text-decoration-line: none;\n}\n:host .rca-dsl-button {\n  border: 1px solid;\n  padding: calc((var(--spacing-xxs)) - 1px) var(--spacing-s);\n  white-space: nowrap;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-auto-flow: column;\n  grid-gap: var(--spacing-xxxxs);\n  height: 100%;\n  width: 100%;\n}\n:host .rca-dsl-button:not(.icon-only) .mat-icon {\n  margin-left: calc(var(--spacing-xxxxs) * -1);\n}\n:host .rca-dsl-button.primary.full {\n  background-color: var(--primary-500);\n  color: var(--primary-contrast-500);\n  border-color: var(--primary-500);\n}\n:host .rca-dsl-button.primary.full.has-loader {\n  background-color: var(--primary-200);\n  color: var(--primary-contrast-500);\n  border-color: var(--primary-200);\n}\n:host .rca-dsl-button.primary.full:not(.has-loader):hover {\n  background-color: var(--primary-700);\n  color: var(--primary-contrast-700);\n  border-color: var(--primary-700);\n}\n:host .rca-dsl-button.primary.outline, :host .rca-dsl-button.primary.ghost {\n  color: var(--primary-500);\n}\n:host .rca-dsl-button.primary.outline.has-loader, :host .rca-dsl-button.primary.ghost.has-loader {\n  color: var(--primary-200);\n}\n:host .rca-dsl-button.primary.outline:not(.has-loader):hover, :host .rca-dsl-button.primary.ghost:not(.has-loader):hover {\n  background-color: var(--primary-50);\n}\n:host .rca-dsl-button.primary.outline {\n  border-color: var(--primary-500);\n}\n:host .rca-dsl-button.primary.outline.has-loader {\n  border-color: var(--primary-200);\n}\n:host .rca-dsl-button.primary.underlined {\n  color: var(--primary-500);\n  padding: var(--spacing-xxxxs) var(--spacing-xxs);\n}\n:host .rca-dsl-button.primary.underlined:hover {\n  color: var(--primary-700);\n}\n:host .rca-dsl-button.primary.ghost {\n  border-color: var(--white);\n}\n:host .rca-dsl-button.primary.ghost:focus:focus-visible, :host .rca-dsl-button.primary.ghost:hover {\n  border-color: var(--primary-50);\n}\n:host .rca-dsl-button.primary.minimal, :host .rca-dsl-button.primary.plain {\n  border-color: transparent;\n  color: var(--black);\n}\n:host .rca-dsl-button.secondary.full {\n  background-color: var(--secondary-500);\n  color: var(--secondary-contrast-500);\n  border-color: var(--secondary-500);\n}\n:host .rca-dsl-button.secondary.full.has-loader {\n  background-color: var(--secondary-400);\n  color: var(--secondary-contrast-500);\n  border-color: var(--secondary-400);\n}\n:host .rca-dsl-button.secondary.full:not(.has-loader):hover {\n  background-color: var(--secondary-700);\n  color: var(--secondary-contrast-700);\n  border-color: var(--secondary-700);\n}\n:host .rca-dsl-button.secondary.outline, :host .rca-dsl-button.secondary.ghost {\n  color: var(--secondary-500);\n}\n:host .rca-dsl-button.secondary.outline.has-loader, :host .rca-dsl-button.secondary.ghost.has-loader {\n  color: var(--secondary-400);\n}\n:host .rca-dsl-button.secondary.outline:not(.has-loader):hover, :host .rca-dsl-button.secondary.ghost:not(.has-loader):hover {\n  background-color: var(--secondary-50);\n}\n:host .rca-dsl-button.secondary.outline {\n  border-color: var(--secondary-500);\n}\n:host .rca-dsl-button.secondary.outline.has-loader {\n  border-color: var(--secondary-400);\n}\n:host .rca-dsl-button.secondary.underlined {\n  color: var(--secondary-500);\n  padding: var(--spacing-xxxxs) var(--spacing-xxs);\n}\n:host .rca-dsl-button.secondary.underlined:hover {\n  color: var(--secondary-700);\n}\n:host .rca-dsl-button.secondary.ghost {\n  border-color: var(--white);\n}\n:host .rca-dsl-button.secondary.ghost:focus:focus-visible, :host .rca-dsl-button.secondary.ghost:hover {\n  border-color: var(--secondary-50);\n}\n:host .rca-dsl-button.secondary.minimal, :host .rca-dsl-button.secondary.plain {\n  border-color: transparent;\n  color: var(--black);\n}\n:host .rca-dsl-button.error.full {\n  background-color: var(--error-500);\n  color: var(--error-contrast-500);\n  border-color: var(--error-500);\n}\n:host .rca-dsl-button.error.full.has-loader {\n  background-color: var(--error-100);\n  color: var(--error-contrast-500);\n  border-color: var(--error-100);\n}\n:host .rca-dsl-button.error.full:not(.has-loader):hover {\n  background-color: var(--error-700);\n  color: var(--error-contrast-500);\n  border-color: var(--error-700);\n}\n:host .rca-dsl-button.error.outline, :host .rca-dsl-button.error.ghost {\n  color: var(--error-500);\n}\n:host .rca-dsl-button.error.outline.has-loader, :host .rca-dsl-button.error.ghost.has-loader {\n  color: var(--error-100);\n}\n:host .rca-dsl-button.error.outline:not(.has-loader):hover, :host .rca-dsl-button.error.ghost:not(.has-loader):hover {\n  background-color: var(--error-100);\n}\n:host .rca-dsl-button.error.outline {\n  border-color: var(--error-500);\n}\n:host .rca-dsl-button.error.outline.has-loader {\n  border-color: var(--error-100);\n}\n:host .rca-dsl-button.error.underlined {\n  color: var(--error-500);\n  padding: var(--spacing-xxxxs) var(--spacing-xxs);\n}\n:host .rca-dsl-button.error.underlined:hover {\n  color: var(--error-700);\n}\n:host .rca-dsl-button.error.ghost {\n  border-color: var(--white);\n}\n:host .rca-dsl-button.error.ghost:focus:focus-visible, :host .rca-dsl-button.error.ghost:hover {\n  border-color: var(--error-100);\n}\n:host .rca-dsl-button.error.minimal, :host .rca-dsl-button.error.plain {\n  border-color: transparent;\n  color: var(--black);\n}\n:host .rca-dsl-button.outline, :host .rca-dsl-button.ghost {\n  background-color: var(--white);\n}\n:host .rca-dsl-button.underlined {\n  border: none;\n  background: none;\n  text-decoration-line: underline;\n}\n:host .rca-dsl-button.icon-only {\n  padding: calc((var(--spacing-xxs)) - 1px);\n  grid-gap: 0;\n}\n:host:not(:focus:focus-visible) .minimal:not(:hover),\n:host:not(:focus:focus-visible) .plain:not(:hover) {\n  background-color: transparent;\n}\n:host:focus:focus-visible .minimal,\n:host:focus:focus-visible .plain, :host:hover .minimal,\n:host:hover .plain {\n  background-color: var(--secondary-300);\n  color: var(--secondary-contrast-300);\n}\n:host:disabled {\n  pointer-events: none;\n}\n:host:disabled .rca-dsl-button.primary:not(.has-loader), :host:disabled .rca-dsl-button.secondary:not(.has-loader), :host:disabled .rca-dsl-button.error:not(.has-loader) {\n  color: var(--light-grey);\n  border-color: transparent;\n  text-decoration-line: none;\n  cursor: auto;\n}\n:host:disabled .rca-dsl-button.primary:not(.has-loader):not(.plain):not(.minimal), :host:disabled .rca-dsl-button.secondary:not(.has-loader):not(.plain):not(.minimal), :host:disabled .rca-dsl-button.error:not(.has-loader):not(.plain):not(.minimal) {\n  background-color: var(--ultra-light-grey);\n}\n:host:disabled .rca-dsl-button.primary:not(.has-loader):hover, :host:disabled .rca-dsl-button.secondary:not(.has-loader):hover, :host:disabled .rca-dsl-button.error:not(.has-loader):hover {\n  background-color: var(--ultra-light-grey);\n  color: var(--light-grey);\n}\n:host:disabled .rca-dsl-button.minimal, :host:disabled .rca-dsl-button.plain {\n  color: var(--super-light-grey);\n}\n:host:disabled .rca-dsl-button.minimal:not(.has-loader), :host:disabled .rca-dsl-button.plain:not(.has-loader) {\n  color: var(--super-light-grey);\n}\n:host .has-loader.disabled:not(.outline) {\n  border-color: transparent;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--light-grey);\n  background-color: var(--white);\n  border: 1px solid var(--mega-light-grey);\n  border-radius: var(--border-radius-small);\n  padding: var(--spacing-xxs) var(--spacing-s);\n}\n:host.active.primary {\n  background-color: var(--primary-50);\n}\n:host.active.secondary {\n  background-color: var(--secondary-100);\n}\n:host.active.error {\n  background-color: var(--error-color-light);\n}\n:host.open.primary, :host.active.primary {\n  color: var(--primary-500);\n  border-color: var(--primary-500);\n}\n:host.open.secondary, :host.active.secondary {\n  color: var(--secondary-500);\n  border-color: var(--secondary-500);\n}\n:host.open.error, :host.active.error {\n  color: var(--error-color);\n  border-color: var(--error-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/rca-design-system-library/src/lib/components/rca-button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Nf:()=>_rca_button_module__WEBPACK_IMPORTED_MODULE_0__.N,oK:()=>_rca_button_rca_button_component__WEBPACK_IMPORTED_MODULE_1__.o});var _rca_button_module__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-button.module.ts"),_rca_button_rca_button_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.ts");__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.ts")},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-button.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>RcaButtonModule});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_material_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),_angular_material_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_rca_button_rca_button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.ts"),_rca_menu_button_rca_menu_button_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.ts");let RcaButtonModule=class RcaButtonModule{};RcaButtonModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.si,_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.ot,_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.Ps],declarations:[_rca_button_rca_button_component__WEBPACK_IMPORTED_MODULE_0__.o,_rca_menu_button_rca_menu_button_component__WEBPACK_IMPORTED_MODULE_1__.C],exports:[_rca_button_rca_button_component__WEBPACK_IMPORTED_MODULE_0__.o,_rca_menu_button_rca_menu_button_component__WEBPACK_IMPORTED_MODULE_1__.C],providers:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.jv]})],RcaButtonModule)},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>RcaButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var rca_button_componentngResource=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.scss?ngResource"),rca_button_componentngResource_default=__webpack_require__.n(rca_button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let RcaButtonComponent=class RcaButtonComponent{constructor(){this._format="default",this.appearance="full",this.color="primary",this.icon="",this.disabled=null,this.isActionEnCours=!1,this.disabledButton=null,this.loaderMargin=" margin-xxxxs"}set format(value){this._format=value,this.loaderMargin="icon-only"===value?" margin-xxxxs":" margin-right-xxxxs"}get format(){return this._format}ngOnChanges(){this.disabledButton=this.disabled||this.isActionEnCours||null}static#_=this.propDecorators={appearance:[{type:core.Input}],color:[{type:core.Input}],icon:[{type:core.Input}],disabled:[{type:core.Input}],isActionEnCours:[{type:core.Input}],disabledButton:[{type:core.HostBinding,args:["attr.disabled"]}],format:[{type:core.Input}]}};RcaButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"button[rca-button][id],a[rca-button][id]",changeDetection:core.ChangeDetectionStrategy.OnPush,template:'<span\n  matRipple\n  [matRippleDisabled]="appearance === \'underlined\' || appearance === \'minimal\'"\n  class="rca-dsl-button {{ appearance }} {{ color }} {{\n    format\n  }} button-font border-all-radius-small"\n  [class.elevation-small]="\n    appearance !== \'minimal\' &&\n    (appearance === \'ghost\' || (format === \'icon-only\' && appearance !== \'plain\'))\n  "\n  [class.has-loader]="isActionEnCours"\n>\n  <mat-icon *ngIf="icon && !isActionEnCours" [svgIcon]="icon" aria-hidden="true"></mat-icon>\n  <span *ngIf="isActionEnCours" class="button-loader" [class]="loaderMargin"></span>\n  <ng-container *ngIf="format === \'icon-only\'; else content">\n    <span class="sr-only">\n      <ng-container *ngTemplateOutlet="content"></ng-container>\n    </span>\n  </ng-container>\n\n  <ng-template #content>\n    <ng-content></ng-content>\n  </ng-template>\n</span>\n',styles:[rca_button_componentngResource_default()]})],RcaButtonComponent)},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>RcaMenuButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_rca_menu_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.scss?ngResource"),_rca_menu_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_rca_menu_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let RcaMenuButtonComponent=class RcaMenuButtonComponent{constructor(){this.icon="",this.color="primary",this.isOpen=!1,this.isActive=!1}static#_=this.propDecorators={icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.open"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],isActive:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]}};RcaMenuButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"button[rca-menu-button][id]",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,template:'<ng-content></ng-content><mat-icon [svgIcon]="icon"></mat-icon>',styles:[_rca_menu_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],RcaMenuButtonComponent)},"./libs/rca-design-system-library/src/lib/directives/rca-throttle-click/rca-throttle-click.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>RcaThrottleClickDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js");let RcaThrottleClickDirective=class RcaThrottleClickDirective{constructor(){this.throttleTime=500,this.rcaThrottleClick=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.clicksSubject=new rxjs__WEBPACK_IMPORTED_MODULE_1__.x}ngOnInit(){this.subscription=this.clicksSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.p)(this.throttleTime)).subscribe((event=>this.rcaThrottleClick.emit(event)))}ngOnDestroy(){this.subscription.unsubscribe()}clickEvent(event){event.preventDefault(),event.stopPropagation(),this.clicksSubject.next(event)}static#_=this.propDecorators={throttleTime:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],rcaThrottleClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],clickEvent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["click",["$event"]]}]}};RcaThrottleClickDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[rcaThrottleClick]",standalone:!0})],RcaThrottleClickDirective)},"./libs/storybook-utils/src/lib/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>A11yKeySupportTemplate,O:()=>KeySupportComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table=__webpack_require__("./node_modules/@angular/material/fesm2022/table.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let KeySupportComponent=class KeySupportComponent{constructor(){this.keySupports=[],this.displayedColumns=["key","utilities"]}isArray(keySupport){return Array.isArray(keySupport.key)}static#_=this.propDecorators={keySupports:[{type:core.Input,args:[{required:!0}]}],keySupportsTitle:[{type:core.Input}]}};KeySupportComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"rca-key-support",template:'<h4 *ngIf="keySupportsTitle" class="h4-like">{{ keySupportsTitle }}</h4>\n<table\n  class="demo-table-frame rca-dsl-table"\n  mat-table\n  [dataSource]="keySupports"\n>\n  <caption class="sr-only">\n    <p>{{ keySupportsTitle }}</p>\n  </caption>\n  <ng-container matColumnDef="key">\n    <th class="demo-key-column" scope="col" mat-header-cell *matHeaderCellDef>\n      Clé\n    </th>\n    <th class="demo-key-column" scope="row" mat-cell *matCellDef="let element">\n      <ng-container *ngIf="isArray(element); else simpleKey">\n        <ng-container *ngFor="let key of element.key; let last = last">\n          <kbd>{{ key }}</kbd>\n          <span *ngIf="!last"> {{ element.keySeparator || \'+\' }} </span>\n        </ng-container>\n      </ng-container>\n      <ng-template #simpleKey>\n        <kbd>{{ element.key }}</kbd>\n      </ng-template>\n    </th>\n  </ng-container>\n  <ng-container matColumnDef="utilities">\n    <th scope="col " mat-header-cell *matHeaderCellDef>Fonction</th>\n    <td mat-cell *matCellDef="let element">\n      <ul *ngIf="element.utilities.length > 1; else uniqueUtility">\n        <li\n          *ngFor="let utility of element.utilities"\n          [innerHTML]="utility"\n        ></li>\n      </ul>\n      <ng-template #uniqueUtility>\n        <p>{{ element.utilities[0] }}</p>\n      </ng-template>\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\n  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\n</table>\n',standalone:!0,imports:[table.p0,common.NgIf,common.NgForOf],host:{class:"display-block"}})],KeySupportComponent);const A11yKeySupportTemplate=args=>({component:KeySupportComponent,props:args,template:'<rca-key-support [keySupports]="keySupports" />'})},"./libs/rca-design-system-library/src/lib/directives/rca-throttle-click/rca-throttle-click-demo/rca-throttle-click-demo.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>rca_throttle_click_demo_stories});var http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),components=__webpack_require__("./libs/storybook-utils/src/lib/components/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fr=__webpack_require__("./node_modules/@angular/common/locales/fr.mjs");(0,common.registerLocaleData)(fr.Z);let RcaThrottleClickDemoComponent=class RcaThrottleClickDemoComponent{constructor(){this.throttleTime=500,this.dates=[]}hasBeenClicked(){this.dates.push((0,common.formatDate)(new Date,"ss:SS","fr-FR"))}static#_=this.propDecorators={throttleTime:[{type:core.Input}]}};RcaThrottleClickDemoComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"rca-throttle-click-demo",template:'\n    <button\n      rca-button\n      id="throttled-click"\n      (rcaThrottleClick)="hasBeenClicked()"\n      [throttleTime]="throttleTime"\n    >\n      Cliquez plusieurs fois\n    </button>\n    <br />\n    <pre>\n    Vous avez cliqué à (secondes:milisecondes):\n    <ng-container *ngFor="let date of dates">\n      {{ date }}\n    </ng-container>\n  </pre>\n  '})],RcaThrottleClickDemoComponent);var rca_button=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/index.ts"),rca_throttle_click_directive=__webpack_require__("./libs/rca-design-system-library/src/lib/directives/rca-throttle-click/rca-throttle-click.directive.ts");const rca_throttle_click_demo_stories={title:"Standard/Throttle Click",decorators:[(0,dist.moduleMetadata)({imports:[http.JF,components.O,rca_button.Nf,rca_throttle_click_directive.t],declarations:[RcaThrottleClickDemoComponent]})],parameters:{docs:{description:{component:"**Throttle click** - Directive permettant de laisser un laps de temps entre plusieurs clics pour éviter, par exemple, le flood au back"}}}},Primary=(args=>({component:RcaThrottleClickDemoComponent,template:'<rca-throttle-click-demo [throttleTime]="throttleTime"/>',props:args})).bind({});Primary.args={throttleTime:500}},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/@angular/common/locales/fr.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const u=void 0;const __WEBPACK_DEFAULT_EXPORT__=["fr",[["AM","PM"],u,u],u,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]],u,[["av. J.-C.","ap. J.-C."],u,["avant Jésus-Christ","après Jésus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1}, {0}","{1} 'à' {0}",u],[","," ",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0 %","#,##0.00 ¤","#E0"],"EUR","€","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BYN:[u,"р."],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[u,"¥"],COP:["$CO","$"],CYP:["£CY"],EGP:[u,"£E"],FJD:["$FJ","$"],FKP:["£FK","£"],FRF:["F"],GBP:["£GB","£"],GIP:["£GI","£"],HKD:[u,"$"],IEP:["£IE"],ILP:["£IL"],ITL:["₤IT"],JPY:[u,"¥"],KMF:[u,"FC"],LBP:["£LB","£L"],MTP:["£MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[u,"$C"],NZD:["$NZ","$"],PHP:[u,"₱"],RHD:["$RH"],RON:[u,"L"],RWF:[u,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TOP:[u,"$T"],TTD:["$TT","$"],TWD:[u,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["$WS"],XCD:[u,"$"],XPF:["FCFP"],ZMW:[u,"Kw"]},"ltr",function plural(val){const i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length,e=parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return 0===i||1===i?1:0===e&&0!==i&&i%1e6==0&&0===v||!(e>=0&&e<=5)?4:5}]},"./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>throttleTime});var scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function throttleTime(duration,scheduler,config){void 0===scheduler&&(scheduler=scheduler_async.z);var duration$=(0,timer.H)(duration,scheduler);return function throttle(durationSelector,config){return(0,lift.e)((function(source,subscriber){var _a=null!=config?config:{},_b=_a.leading,leading=void 0===_b||_b,_c=_a.trailing,trailing=void 0!==_c&&_c,hasValue=!1,sendValue=null,throttled=null,isComplete=!1,endThrottling=function(){null==throttled||throttled.unsubscribe(),throttled=null,trailing&&(send(),isComplete&&subscriber.complete())},cleanupThrottling=function(){throttled=null,isComplete&&subscriber.complete()},startThrottle=function(value){return throttled=(0,innerFrom.Xf)(durationSelector(value)).subscribe((0,OperatorSubscriber.x)(subscriber,endThrottling,cleanupThrottling))},send=function(){if(hasValue){hasValue=!1;var value=sendValue;sendValue=null,subscriber.next(value),!isComplete&&startThrottle(value)}};source.subscribe((0,OperatorSubscriber.x)(subscriber,(function(value){hasValue=!0,sendValue=value,(!throttled||throttled.closed)&&(leading?send():startThrottle(value))}),(function(){isComplete=!0,(!(trailing&&hasValue&&throttled)||throttled.closed)&&subscriber.complete()})))}))}((function(){return duration$}),config)}}}]);