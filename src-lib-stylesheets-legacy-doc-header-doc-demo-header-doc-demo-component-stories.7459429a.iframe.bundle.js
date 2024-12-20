"use strict";(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[7707],{"./libs/storybook-utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q_:()=>components.q,Le:()=>HIGHLIGHT_JS_PROVIDER,Oy:()=>components.O,VM:()=>get_figma_params_utils.V,L2:()=>openInFigma});var components=__webpack_require__("./libs/storybook-utils/src/lib/components/index.ts");const HIGHLIGHT_JS_PROVIDER={provide:__webpack_require__("./node_modules/ngx-highlightjs/fesm2020/ngx-highlightjs.mjs").rN,useValue:{coreLibraryLoader:()=>__webpack_require__.e(5168).then(__webpack_require__.bind(__webpack_require__,"./node_modules/highlight.js/es/core.js")),lineNumbersLoader:()=>__webpack_require__.e(9815).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/highlightjs-line-numbers.js/src/highlightjs-line-numbers.js",23)),languages:{typescript:()=>__webpack_require__.e(9996).then(__webpack_require__.bind(__webpack_require__,"./node_modules/highlight.js/es/languages/typescript.js")),css:()=>__webpack_require__.e(5016).then(__webpack_require__.bind(__webpack_require__,"./node_modules/highlight.js/es/languages/css.js")),xml:()=>__webpack_require__.e(6282).then(__webpack_require__.bind(__webpack_require__,"./node_modules/highlight.js/es/languages/xml.js"))}}},openInFigma=nodeId=>({title:"Ouvrir sur Figma",onClick:()=>{window.open("https://www.figma.com/","_blank")}});var get_figma_params_utils=__webpack_require__("./libs/storybook-utils/src/lib/utils/get-figma-params.utils.ts")},"./libs/storybook-utils/src/lib/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>A11yKeySupportTemplate,O:()=>KeySupportComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table=__webpack_require__("./node_modules/@angular/material/fesm2022/table.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let KeySupportComponent=class KeySupportComponent{constructor(){this.keySupports=[],this.displayedColumns=["key","utilities"]}isArray(keySupport){return Array.isArray(keySupport.key)}static#_=this.propDecorators={keySupports:[{type:core.Input,args:[{required:!0}]}],keySupportsTitle:[{type:core.Input}]}};KeySupportComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"rca-key-support",template:'<h4 *ngIf="keySupportsTitle" class="h4-like">{{ keySupportsTitle }}</h4>\n<table\n  class="demo-table-frame rca-dsl-table"\n  mat-table\n  [dataSource]="keySupports"\n>\n  <caption class="sr-only">\n    <p>{{ keySupportsTitle }}</p>\n  </caption>\n  <ng-container matColumnDef="key">\n    <th class="demo-key-column" scope="col" mat-header-cell *matHeaderCellDef>\n      Clé\n    </th>\n    <th class="demo-key-column" scope="row" mat-cell *matCellDef="let element">\n      <ng-container *ngIf="isArray(element); else simpleKey">\n        <ng-container *ngFor="let key of element.key; let last = last">\n          <kbd>{{ key }}</kbd>\n          <span *ngIf="!last"> {{ element.keySeparator || \'+\' }} </span>\n        </ng-container>\n      </ng-container>\n      <ng-template #simpleKey>\n        <kbd>{{ element.key }}</kbd>\n      </ng-template>\n    </th>\n  </ng-container>\n  <ng-container matColumnDef="utilities">\n    <th scope="col " mat-header-cell *matHeaderCellDef>Fonction</th>\n    <td mat-cell *matCellDef="let element">\n      <ul *ngIf="element.utilities.length > 1; else uniqueUtility">\n        <li\n          *ngFor="let utility of element.utilities"\n          [innerHTML]="utility"\n        ></li>\n      </ul>\n      <ng-template #uniqueUtility>\n        <p>{{ element.utilities[0] }}</p>\n      </ng-template>\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\n  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\n</table>\n',standalone:!0,imports:[table.p0,common.NgIf,common.NgForOf],host:{class:"display-block"}})],KeySupportComponent);const A11yKeySupportTemplate=args=>({component:KeySupportComponent,props:args,template:'<rca-key-support [keySupports]="keySupports" />'})},"./libs/storybook-utils/src/lib/utils/get-figma-params.utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getFigmaParams});const getFigmaParams=nodeId=>({design:{name:"Figma",type:"figspec",url:"https://www.figma.com/proto/",accessToken:""}})},"./libs/rca-design-system-library/src/lib/stylesheets/legacy/doc/header-doc-demo/header-doc-demo.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_storybook_utils_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/storybook-utils/src/index.ts"),_legacy_doc_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/rca-design-system-library/src/lib/stylesheets/legacy/doc/legacy-doc.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Z-Legacy/Doc/Header",component:__webpack_require__("./libs/rca-design-system-library/src/lib/stylesheets/legacy/doc/header-doc-demo/header-doc-demo.component.ts").I,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_legacy_doc_module__WEBPACK_IMPORTED_MODULE_2__.s]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[_storybook_utils_src__WEBPACK_IMPORTED_MODULE_1__.Le]})]},Primary=(args=>({props:args})).bind({});Primary.args={}}}]);