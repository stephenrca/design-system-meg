(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[3970,1323],{"./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n:host:not(.underlined) {\n  text-decoration-line: none;\n}\n:host:not(.underlined):hover {\n  text-decoration-line: none;\n}\n:host .rca-dsl-button {\n  border: 1px solid;\n  padding: calc((var(--spacing-xxs)) - 1px) var(--spacing-s);\n  white-space: nowrap;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-auto-flow: column;\n  grid-gap: var(--spacing-xxxxs);\n  height: 100%;\n  width: 100%;\n}\n:host .rca-dsl-button:not(.icon-only) .mat-icon {\n  margin-left: calc(var(--spacing-xxxxs) * -1);\n}\n:host .rca-dsl-button.primary.full {\n  background-color: var(--primary-500);\n  color: var(--primary-contrast-500);\n  border-color: var(--primary-500);\n}\n:host .rca-dsl-button.primary.full.has-loader {\n  background-color: var(--primary-200);\n  color: var(--primary-contrast-500);\n  border-color: var(--primary-200);\n}\n:host .rca-dsl-button.primary.full:not(.has-loader):hover {\n  background-color: var(--primary-700);\n  color: var(--primary-contrast-700);\n  border-color: var(--primary-700);\n}\n:host .rca-dsl-button.primary.outline, :host .rca-dsl-button.primary.ghost {\n  color: var(--primary-500);\n}\n:host .rca-dsl-button.primary.outline.has-loader, :host .rca-dsl-button.primary.ghost.has-loader {\n  color: var(--primary-200);\n}\n:host .rca-dsl-button.primary.outline:not(.has-loader):hover, :host .rca-dsl-button.primary.ghost:not(.has-loader):hover {\n  background-color: var(--primary-50);\n}\n:host .rca-dsl-button.primary.outline {\n  border-color: var(--primary-500);\n}\n:host .rca-dsl-button.primary.outline.has-loader {\n  border-color: var(--primary-200);\n}\n:host .rca-dsl-button.primary.underlined {\n  color: var(--primary-500);\n  padding: var(--spacing-xxxxs) var(--spacing-xxs);\n}\n:host .rca-dsl-button.primary.underlined:hover {\n  color: var(--primary-700);\n}\n:host .rca-dsl-button.primary.ghost {\n  border-color: var(--white);\n}\n:host .rca-dsl-button.primary.ghost:focus:focus-visible, :host .rca-dsl-button.primary.ghost:hover {\n  border-color: var(--primary-50);\n}\n:host .rca-dsl-button.primary.minimal, :host .rca-dsl-button.primary.plain {\n  border-color: transparent;\n  color: var(--black);\n}\n:host .rca-dsl-button.secondary.full {\n  background-color: var(--secondary-500);\n  color: var(--secondary-contrast-500);\n  border-color: var(--secondary-500);\n}\n:host .rca-dsl-button.secondary.full.has-loader {\n  background-color: var(--secondary-400);\n  color: var(--secondary-contrast-500);\n  border-color: var(--secondary-400);\n}\n:host .rca-dsl-button.secondary.full:not(.has-loader):hover {\n  background-color: var(--secondary-700);\n  color: var(--secondary-contrast-700);\n  border-color: var(--secondary-700);\n}\n:host .rca-dsl-button.secondary.outline, :host .rca-dsl-button.secondary.ghost {\n  color: var(--secondary-500);\n}\n:host .rca-dsl-button.secondary.outline.has-loader, :host .rca-dsl-button.secondary.ghost.has-loader {\n  color: var(--secondary-400);\n}\n:host .rca-dsl-button.secondary.outline:not(.has-loader):hover, :host .rca-dsl-button.secondary.ghost:not(.has-loader):hover {\n  background-color: var(--secondary-50);\n}\n:host .rca-dsl-button.secondary.outline {\n  border-color: var(--secondary-500);\n}\n:host .rca-dsl-button.secondary.outline.has-loader {\n  border-color: var(--secondary-400);\n}\n:host .rca-dsl-button.secondary.underlined {\n  color: var(--secondary-500);\n  padding: var(--spacing-xxxxs) var(--spacing-xxs);\n}\n:host .rca-dsl-button.secondary.underlined:hover {\n  color: var(--secondary-700);\n}\n:host .rca-dsl-button.secondary.ghost {\n  border-color: var(--white);\n}\n:host .rca-dsl-button.secondary.ghost:focus:focus-visible, :host .rca-dsl-button.secondary.ghost:hover {\n  border-color: var(--secondary-50);\n}\n:host .rca-dsl-button.secondary.minimal, :host .rca-dsl-button.secondary.plain {\n  border-color: transparent;\n  color: var(--black);\n}\n:host .rca-dsl-button.error.full {\n  background-color: var(--error-500);\n  color: var(--error-contrast-500);\n  border-color: var(--error-500);\n}\n:host .rca-dsl-button.error.full.has-loader {\n  background-color: var(--error-100);\n  color: var(--error-contrast-500);\n  border-color: var(--error-100);\n}\n:host .rca-dsl-button.error.full:not(.has-loader):hover {\n  background-color: var(--error-700);\n  color: var(--error-contrast-500);\n  border-color: var(--error-700);\n}\n:host .rca-dsl-button.error.outline, :host .rca-dsl-button.error.ghost {\n  color: var(--error-500);\n}\n:host .rca-dsl-button.error.outline.has-loader, :host .rca-dsl-button.error.ghost.has-loader {\n  color: var(--error-100);\n}\n:host .rca-dsl-button.error.outline:not(.has-loader):hover, :host .rca-dsl-button.error.ghost:not(.has-loader):hover {\n  background-color: var(--error-100);\n}\n:host .rca-dsl-button.error.outline {\n  border-color: var(--error-500);\n}\n:host .rca-dsl-button.error.outline.has-loader {\n  border-color: var(--error-100);\n}\n:host .rca-dsl-button.error.underlined {\n  color: var(--error-500);\n  padding: var(--spacing-xxxxs) var(--spacing-xxs);\n}\n:host .rca-dsl-button.error.underlined:hover {\n  color: var(--error-700);\n}\n:host .rca-dsl-button.error.ghost {\n  border-color: var(--white);\n}\n:host .rca-dsl-button.error.ghost:focus:focus-visible, :host .rca-dsl-button.error.ghost:hover {\n  border-color: var(--error-100);\n}\n:host .rca-dsl-button.error.minimal, :host .rca-dsl-button.error.plain {\n  border-color: transparent;\n  color: var(--black);\n}\n:host .rca-dsl-button.outline, :host .rca-dsl-button.ghost {\n  background-color: var(--white);\n}\n:host .rca-dsl-button.underlined {\n  border: none;\n  background: none;\n  text-decoration-line: underline;\n}\n:host .rca-dsl-button.icon-only {\n  padding: calc((var(--spacing-xxs)) - 1px);\n  grid-gap: 0;\n}\n:host:not(:focus:focus-visible) .minimal:not(:hover),\n:host:not(:focus:focus-visible) .plain:not(:hover) {\n  background-color: transparent;\n}\n:host:focus:focus-visible .minimal,\n:host:focus:focus-visible .plain, :host:hover .minimal,\n:host:hover .plain {\n  background-color: var(--secondary-300);\n  color: var(--secondary-contrast-300);\n}\n:host:disabled {\n  pointer-events: none;\n}\n:host:disabled .rca-dsl-button.primary:not(.has-loader), :host:disabled .rca-dsl-button.secondary:not(.has-loader), :host:disabled .rca-dsl-button.error:not(.has-loader) {\n  color: var(--light-grey);\n  border-color: transparent;\n  text-decoration-line: none;\n  cursor: auto;\n}\n:host:disabled .rca-dsl-button.primary:not(.has-loader):not(.plain):not(.minimal), :host:disabled .rca-dsl-button.secondary:not(.has-loader):not(.plain):not(.minimal), :host:disabled .rca-dsl-button.error:not(.has-loader):not(.plain):not(.minimal) {\n  background-color: var(--ultra-light-grey);\n}\n:host:disabled .rca-dsl-button.primary:not(.has-loader):hover, :host:disabled .rca-dsl-button.secondary:not(.has-loader):hover, :host:disabled .rca-dsl-button.error:not(.has-loader):hover {\n  background-color: var(--ultra-light-grey);\n  color: var(--light-grey);\n}\n:host:disabled .rca-dsl-button.minimal, :host:disabled .rca-dsl-button.plain {\n  color: var(--super-light-grey);\n}\n:host:disabled .rca-dsl-button.minimal:not(.has-loader), :host:disabled .rca-dsl-button.plain:not(.has-loader) {\n  color: var(--super-light-grey);\n}\n:host .has-loader.disabled:not(.outline) {\n  border-color: transparent;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--light-grey);\n  background-color: var(--white);\n  border: 1px solid var(--mega-light-grey);\n  border-radius: var(--border-radius-small);\n  padding: var(--spacing-xxs) var(--spacing-s);\n}\n:host.active.primary {\n  background-color: var(--primary-50);\n}\n:host.active.secondary {\n  background-color: var(--secondary-100);\n}\n:host.active.error {\n  background-color: var(--error-color-light);\n}\n:host.open.primary, :host.active.primary {\n  color: var(--primary-500);\n  border-color: var(--primary-500);\n}\n:host.open.secondary, :host.active.secondary {\n  color: var(--secondary-500);\n  border-color: var(--secondary-500);\n}\n:host.open.error, :host.active.error {\n  color: var(--error-color);\n  border-color: var(--error-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-button.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>RcaButtonModule});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_material_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),_angular_material_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_rca_button_rca_button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.ts"),_rca_menu_button_rca_menu_button_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.ts");let RcaButtonModule=class RcaButtonModule{};RcaButtonModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.si,_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.ot,_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.Ps],declarations:[_rca_button_rca_button_component__WEBPACK_IMPORTED_MODULE_0__.o,_rca_menu_button_rca_menu_button_component__WEBPACK_IMPORTED_MODULE_1__.C],exports:[_rca_button_rca_button_component__WEBPACK_IMPORTED_MODULE_0__.o,_rca_menu_button_rca_menu_button_component__WEBPACK_IMPORTED_MODULE_1__.C],providers:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.jv]})],RcaButtonModule)},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>RcaButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var rca_button_componentngResource=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.scss?ngResource"),rca_button_componentngResource_default=__webpack_require__.n(rca_button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let RcaButtonComponent=class RcaButtonComponent{constructor(){this._format="default",this.appearance="full",this.color="primary",this.icon="",this.disabled=null,this.isActionEnCours=!1,this.disabledButton=null,this.loaderMargin=" margin-xxxxs"}set format(value){this._format=value,this.loaderMargin="icon-only"===value?" margin-xxxxs":" margin-right-xxxxs"}get format(){return this._format}ngOnChanges(){this.disabledButton=this.disabled||this.isActionEnCours||null}static#_=this.propDecorators={appearance:[{type:core.Input}],color:[{type:core.Input}],icon:[{type:core.Input}],disabled:[{type:core.Input}],isActionEnCours:[{type:core.Input}],disabledButton:[{type:core.HostBinding,args:["attr.disabled"]}],format:[{type:core.Input}]}};RcaButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"button[rca-button][id],a[rca-button][id]",changeDetection:core.ChangeDetectionStrategy.OnPush,template:'<span\n  matRipple\n  [matRippleDisabled]="appearance === \'underlined\' || appearance === \'minimal\'"\n  class="rca-dsl-button {{ appearance }} {{ color }} {{\n    format\n  }} button-font border-all-radius-small"\n  [class.elevation-small]="\n    appearance !== \'minimal\' &&\n    (appearance === \'ghost\' || (format === \'icon-only\' && appearance !== \'plain\'))\n  "\n  [class.has-loader]="isActionEnCours"\n>\n  <mat-icon *ngIf="icon && !isActionEnCours" [svgIcon]="icon" aria-hidden="true"></mat-icon>\n  <span *ngIf="isActionEnCours" class="button-loader" [class]="loaderMargin"></span>\n  <ng-container *ngIf="format === \'icon-only\'; else content">\n    <span class="sr-only">\n      <ng-container *ngTemplateOutlet="content"></ng-container>\n    </span>\n  </ng-container>\n\n  <ng-template #content>\n    <ng-content></ng-content>\n  </ng-template>\n</span>\n',styles:[rca_button_componentngResource_default()]})],RcaButtonComponent)},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>RcaMenuButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_rca_menu_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-menu-button/rca-menu-button.component.scss?ngResource"),_rca_menu_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_rca_menu_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let RcaMenuButtonComponent=class RcaMenuButtonComponent{constructor(){this.icon="",this.color="primary",this.isOpen=!1,this.isActive=!1}static#_=this.propDecorators={icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.open"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],isActive:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]}};RcaMenuButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"button[rca-menu-button][id]",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,template:'<ng-content></ng-content><mat-icon [svgIcon]="icon"></mat-icon>',styles:[_rca_menu_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],RcaMenuButtonComponent)},"./libs/rca-design-system-library/src/lib/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>_rca_icons_module__WEBPACK_IMPORTED_MODULE_0__.i});var _rca_icons_module__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-icons.module.ts")},"./libs/rca-design-system-library/src/lib/icons/rca-icons.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>RCA_ICONS_URL,W:()=>RCA_ICONS});const RCA_ICONS=["rca-icon-actu","rca-icon-add-folder","rca-icon-add-list","rca-icon-add","rca-icon-add-user","rca-icon-affpiece","rca-icon-alarm","rca-icon-alert","rca-icon-approve-file","rca-icon-arrow-left","rca-icon-arrow-left-double","rca-icon-arrow-right","rca-icon-arrow-right-double","rca-icon-attach","rca-icon-attach-done","rca-icon-attach-lost","rca-icon-avoid-reload","rca-icon-bank","rca-icon-bill","rca-icon-block","rca-icon-broken-chain","rca-icon-business","rca-icon-cabinet","rca-icon-caisse","rca-icon-calculation","rca-icon-calendar","rca-icon-cancel","rca-icon-catalog","rca-icon-chain","rca-icon-chart","rca-icon-chat","rca-icon-check","rca-icon-check-circle","rca-icon-close","rca-icon-cloud-upload","rca-icon-contact","rca-icon-credit-card","rca-icon-dashboard","rca-icon-documents","rca-icon-document","rca-icon-down-arrow","rca-icon-down-arrow-circle","rca-icon-down-arrow-stat","rca-icon-drag-drop","rca-icon-duplicate","rca-icon-edit-file","rca-icon-edit","rca-icon-email","rca-icon-equal","rca-icon-euro","rca-icon-excel","rca-icon-expand-less","rca-icon-expand-more","rca-icon-export","rca-icon-export-doc","rca-icon-filter","rca-icon-folder","rca-icon-factuneo","rca-icon-fr","rca-icon-go-to","rca-icon-group","rca-icon-help","rca-icon-history","rca-icon-home","rca-icon-hourglass","rca-icon-image","rca-icon-import","rca-icon-info","rca-icon-interface-menu","rca-icon-label","rca-icon-layer-print","rca-icon-less","rca-icon-less-simple","rca-icon-licence-free","rca-icon-licence-premium","rca-icon-list","rca-icon-location","rca-icon-lock-folder","rca-icon-lock-key","rca-icon-logout","rca-icon-menu","rca-icon-mobile","rca-icon-multi-actions","rca-icon-multiple-payment","rca-icon-ndf","rca-icon-neutral-arrow","rca-icon-new-document","rca-icon-new-file","rca-icon-no-preview","rca-icon-onboarding","rca-icon-open-window","rca-icon-pause","rca-icon-pdf","rca-icon-pdp","rca-icon-photo","rca-icon-preview","rca-icon-printer","rca-icon-purchase","rca-icon-reload","rca-icon-remove-document","rca-icon-resize","rca-icon-save","rca-icon-scissors","rca-icon-search","rca-icon-setting","rca-icon-shift","rca-icon-shipping","rca-icon-switch","rca-icon-time-off","rca-icon-total","rca-icon-trash","rca-icon-undo","rca-icon-unlock-key","rca-icon-up-arrow","rca-icon-up-arrow-stat","rca-icon-upload","rca-icon-user","rca-icon-warning","rca-icon-waving-hand","rca-icon-word"],RCA_ICONS_URL=name=>`${name}.svg`},"./libs/rca-design-system-library/src/lib/icons/rca-icons.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>RcaIconsModule});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-icons.constant.ts"),_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-logos-gamme-conseil.constant.ts"),_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-logos-meg.constant.ts");let RcaIconsModule=class RcaIconsModule{constructor(registry,sanitizer){this.registry=registry,this.sanitizer=sanitizer,_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__.W.forEach((nom=>this.addSvgIcon(nom))),_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__.z.forEach((nom=>this.addSvgLogoGammeConseil(nom))),_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__.w.forEach((nom=>this.addSvgLogoMeg(nom)))}addSvgIcon(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__.Q)(name)))}addSvgLogoGammeConseil(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__.a)(name)))}addSvgLogoMeg(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__.N)(name)))}static#_=this.ctorParameters=()=>[{type:_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv},{type:_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer}]};RcaIconsModule=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({imports:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps],exports:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps],providers:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv]}),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:paramtypes",[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer])],RcaIconsModule)},"./libs/rca-design-system-library/src/lib/icons/rca-logos-gamme-conseil.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>RCA_LOGOS_GAMME_CONSEIL_URL,z:()=>RCA_LOGOS_GAMME_CONSEIL});const RCA_LOGOS_GAMME_CONSEIL=["logo-analyse-cout-revient","logo-bilan-image","logo-choix-financement","logo-devis-flash","logo-e-creation","logo-evaluation-flash","logo-gestion-relation-client","logo-indicateurs-flash","logo-meg-bnc","logo-meg-premium","logo-meg","logo-prevision-flash","logo-ratios-sectoriels","logo-simul-auto","logo-simul-immo","logo-suivi-com","logo-tableau-de-bord-flash"],RCA_LOGOS_GAMME_CONSEIL_URL=name=>`${name}.svg`},"./libs/rca-design-system-library/src/lib/icons/rca-logos-meg.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>RCA_LOGOS_MEG_URL,w:()=>RCA_LOGOS_MEG});const RCA_LOGOS_MEG=["app-achat","app-banque","app-caisse","app-dematbox","app-export","app-facturation","app-vente-importee","app-note-de-frais","app-progbat","app-supervision","app-tableau-de-bord","app-tresorerie","app-tva","app-vente"],RCA_LOGOS_MEG_URL=name=>`${name}.svg`},"./libs/storybook-utils/src/lib/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>A11yKeySupportTemplate,O:()=>KeySupportComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table=__webpack_require__("./node_modules/@angular/material/fesm2022/table.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let KeySupportComponent=class KeySupportComponent{constructor(){this.keySupports=[],this.displayedColumns=["key","utilities"]}isArray(keySupport){return Array.isArray(keySupport.key)}static#_=this.propDecorators={keySupports:[{type:core.Input,args:[{required:!0}]}],keySupportsTitle:[{type:core.Input}]}};KeySupportComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"rca-key-support",template:'<h4 *ngIf="keySupportsTitle" class="h4-like">{{ keySupportsTitle }}</h4>\n<table\n  class="demo-table-frame rca-dsl-table"\n  mat-table\n  [dataSource]="keySupports"\n>\n  <caption class="sr-only">\n    <p>{{ keySupportsTitle }}</p>\n  </caption>\n  <ng-container matColumnDef="key">\n    <th class="demo-key-column" scope="col" mat-header-cell *matHeaderCellDef>\n      Clé\n    </th>\n    <th class="demo-key-column" scope="row" mat-cell *matCellDef="let element">\n      <ng-container *ngIf="isArray(element); else simpleKey">\n        <ng-container *ngFor="let key of element.key; let last = last">\n          <kbd>{{ key }}</kbd>\n          <span *ngIf="!last"> {{ element.keySeparator || \'+\' }} </span>\n        </ng-container>\n      </ng-container>\n      <ng-template #simpleKey>\n        <kbd>{{ element.key }}</kbd>\n      </ng-template>\n    </th>\n  </ng-container>\n  <ng-container matColumnDef="utilities">\n    <th scope="col " mat-header-cell *matHeaderCellDef>Fonction</th>\n    <td mat-cell *matCellDef="let element">\n      <ul *ngIf="element.utilities.length > 1; else uniqueUtility">\n        <li\n          *ngFor="let utility of element.utilities"\n          [innerHTML]="utility"\n        ></li>\n      </ul>\n      <ng-template #uniqueUtility>\n        <p>{{ element.utilities[0] }}</p>\n      </ng-template>\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\n  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\n</table>\n',standalone:!0,imports:[table.p0,common.NgIf,common.NgForOf],host:{class:"display-block"}})],KeySupportComponent);const A11yKeySupportTemplate=args=>({component:KeySupportComponent,props:args,template:'<rca-key-support [keySupports]="keySupports" />'})},"./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button-demo/rca-button-demo.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccessibilityKeySupport:()=>AccessibilityKeySupport,AllButtons:()=>AllButtons,Buttons:()=>Buttons,Links:()=>Links,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),storybook_utils_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/storybook-utils/src/lib/components/index.ts"),_icons_rca_icons_constant__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-icons.constant.ts"),_rca_button_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-button.module.ts"),_rca_button_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/rca-button/rca-button.component.ts"),_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Standard/Buttons",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.JF,storybook_utils_components__WEBPACK_IMPORTED_MODULE_1__.O,_rca_button_module__WEBPACK_IMPORTED_MODULE_2__.N,_icons__WEBPACK_IMPORTED_MODULE_4__.i]})],args:{color:"primary",appearance:"full",icon:"rca-icon-add",format:"default",isActionEnCours:!1,disabled:!1},argTypes:{color:{options:["primary","secondary","error"],control:{type:"select"},description:"Couleur du bouton.",defaultValue:"primary",table:{defaultValue:{summary:"primary"}}},appearance:{options:["full","outline","ghost","plain","underlined","minimal"],control:{type:"select"},description:"Apparence du bouton.",defaultValue:"full",table:{defaultValue:{summary:"full"}}},format:{options:["default","icon-only"],control:{type:"select"},description:"Apparence du bouton.",defaultValue:"default",table:{defaultValue:{summary:"default"}}},icon:{options:["",..._icons_rca_icons_constant__WEBPACK_IMPORTED_MODULE_6__.W],control:{type:"select",labels:{"":"Pas d'icône"}},description:"Icône du bouton."},isActionEnCours:{description:"Indique si une action est en cours.",defaultValue:!1,table:{defaultValue:{summary:!1}}},disabled:{description:"Indique si le bouton est disable.",defaultValue:!1,table:{defaultValue:{summary:!1}}}}},Buttons=(args=>({component:_rca_button_component__WEBPACK_IMPORTED_MODULE_3__.o,props:args,template:'\n    <button\n      rca-button\n      id="sandbox-button"\n      [color]="color"\n      [appearance]="appearance"\n      [isActionEnCours]="isActionEnCours"\n      [icon]="icon"\n      [format]="format"\n      [disabled]="disabled"\n    >\n      Button\n    </button>\n'})).bind({});Buttons.args={};const Links=(args=>({component:_rca_button_component__WEBPACK_IMPORTED_MODULE_3__.o,props:args,template:'\n    <a\n      rca-button\n      id="sandbox-link"\n      class="display-block width-20"\n      [color]="color"\n      [appearance]="appearance"\n      [isActionEnCours]="isActionEnCours"\n      [icon]="icon"\n      [format]="format"\n      [disabled]="disabled"\n    >\n      Link\n    </a>\n'})).bind({});Links.args={};const AllButtons=(args=>({component:_rca_button_component__WEBPACK_IMPORTED_MODULE_3__.o,props:args,template:'\n<table *ngFor="let format of formats" class="demo-table-frame rca-dsl-table width-100">\n  <caption class="sr-only">\n    Liste de tous les boutons\n  </caption>\n  <thead>\n    <tr>\n      <th></th>\n      <th scope="row" *ngFor="let color of colors">{{ color }}</th>\n      <th scope="row" *ngFor="let color of colors">{{ color }} avec loader</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor="let type of types">\n      <th scope="col">{{type}}</th>\n      <td *ngFor="let color of colors" class="text-align-center">\n        <button\n          rca-button\n          [id]="\'sandbox-all-buttons-\' + format + \'-\' + type + \'-\' + color"\n          [color]="color !== \'disabled\' ? color : \'primary\'"\n          [appearance]="type"\n          [icon]="icon"\n          [format]="format"\n          [disabled]="color === \'disabled\'"\n        >\n          button\n        </button>\n      </td>\n      <td *ngFor="let color of colors" class="text-align-center">\n        <button\n          rca-button\n          [id]="\'sandbox-all-buttons-loading-\' + format + \'-\' + type + \'-\' + color"\n          [color]="color"\n          [appearance]="type"\n          [icon]="icon"\n          [format]="format"\n          [isActionEnCours]="true"\n          [disabled]="color === \'disabled\'"\n        >button</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n'})).bind({});AllButtons.args={types:["full","outline","ghost","plain","underlined","minimal"],colors:["primary","secondary","error","disabled"],formats:["default","icon-only"]};const AccessibilityKeySupport=storybook_utils_components__WEBPACK_IMPORTED_MODULE_1__.q.bind({});AccessibilityKeySupport.args={keySupports:[{key:"Espace",utilities:["activer le bouton"]},{key:"Entrée",utilities:["activer le bouton"]}]}},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}}}]);