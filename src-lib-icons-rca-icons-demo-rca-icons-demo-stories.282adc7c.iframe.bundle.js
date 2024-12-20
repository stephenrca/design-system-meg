"use strict";(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[2823],{"./libs/rca-design-system-library/src/lib/icons/rca-icons.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>RCA_ICONS_URL,W:()=>RCA_ICONS});const RCA_ICONS=["rca-icon-actu","rca-icon-add-folder","rca-icon-add-list","rca-icon-add","rca-icon-add-user","rca-icon-affpiece","rca-icon-alarm","rca-icon-alert","rca-icon-approve-file","rca-icon-arrow-left","rca-icon-arrow-left-double","rca-icon-arrow-right","rca-icon-arrow-right-double","rca-icon-attach","rca-icon-attach-done","rca-icon-attach-lost","rca-icon-avoid-reload","rca-icon-bank","rca-icon-bill","rca-icon-block","rca-icon-broken-chain","rca-icon-business","rca-icon-cabinet","rca-icon-caisse","rca-icon-calculation","rca-icon-calendar","rca-icon-cancel","rca-icon-catalog","rca-icon-chain","rca-icon-chart","rca-icon-chat","rca-icon-check","rca-icon-check-circle","rca-icon-close","rca-icon-cloud-upload","rca-icon-contact","rca-icon-credit-card","rca-icon-dashboard","rca-icon-documents","rca-icon-document","rca-icon-down-arrow","rca-icon-down-arrow-circle","rca-icon-down-arrow-stat","rca-icon-drag-drop","rca-icon-duplicate","rca-icon-edit-file","rca-icon-edit","rca-icon-email","rca-icon-equal","rca-icon-euro","rca-icon-excel","rca-icon-expand-less","rca-icon-expand-more","rca-icon-export","rca-icon-export-doc","rca-icon-filter","rca-icon-folder","rca-icon-factuneo","rca-icon-fr","rca-icon-go-to","rca-icon-group","rca-icon-help","rca-icon-history","rca-icon-home","rca-icon-hourglass","rca-icon-image","rca-icon-import","rca-icon-info","rca-icon-interface-menu","rca-icon-label","rca-icon-layer-print","rca-icon-less","rca-icon-less-simple","rca-icon-licence-free","rca-icon-licence-premium","rca-icon-list","rca-icon-location","rca-icon-lock-folder","rca-icon-lock-key","rca-icon-logout","rca-icon-menu","rca-icon-mobile","rca-icon-multi-actions","rca-icon-multiple-payment","rca-icon-ndf","rca-icon-neutral-arrow","rca-icon-new-document","rca-icon-new-file","rca-icon-no-preview","rca-icon-onboarding","rca-icon-open-window","rca-icon-pause","rca-icon-pdf","rca-icon-pdp","rca-icon-photo","rca-icon-preview","rca-icon-printer","rca-icon-purchase","rca-icon-reload","rca-icon-remove-document","rca-icon-resize","rca-icon-save","rca-icon-scissors","rca-icon-search","rca-icon-setting","rca-icon-shift","rca-icon-shipping","rca-icon-switch","rca-icon-time-off","rca-icon-total","rca-icon-trash","rca-icon-undo","rca-icon-unlock-key","rca-icon-up-arrow","rca-icon-up-arrow-stat","rca-icon-upload","rca-icon-user","rca-icon-warning","rca-icon-waving-hand","rca-icon-word"],RCA_ICONS_URL=name=>`${name}.svg`},"./libs/rca-design-system-library/src/lib/icons/rca-icons.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>RcaIconsModule});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-icons.constant.ts"),_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-logos-gamme-conseil.constant.ts"),_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-logos-meg.constant.ts");let RcaIconsModule=class RcaIconsModule{constructor(registry,sanitizer){this.registry=registry,this.sanitizer=sanitizer,_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__.W.forEach((nom=>this.addSvgIcon(nom))),_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__.z.forEach((nom=>this.addSvgLogoGammeConseil(nom))),_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__.w.forEach((nom=>this.addSvgLogoMeg(nom)))}addSvgIcon(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__.Q)(name)))}addSvgLogoGammeConseil(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__.a)(name)))}addSvgLogoMeg(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__.N)(name)))}static#_=this.ctorParameters=()=>[{type:_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv},{type:_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer}]};RcaIconsModule=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({imports:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps],exports:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps],providers:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv]}),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:paramtypes",[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer])],RcaIconsModule)},"./libs/rca-design-system-library/src/lib/icons/rca-logos-gamme-conseil.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>RCA_LOGOS_GAMME_CONSEIL_URL,z:()=>RCA_LOGOS_GAMME_CONSEIL});const RCA_LOGOS_GAMME_CONSEIL=["logo-analyse-cout-revient","logo-bilan-image","logo-choix-financement","logo-devis-flash","logo-e-creation","logo-evaluation-flash","logo-gestion-relation-client","logo-indicateurs-flash","logo-meg-bnc","logo-meg-premium","logo-meg","logo-prevision-flash","logo-ratios-sectoriels","logo-simul-auto","logo-simul-immo","logo-suivi-com","logo-tableau-de-bord-flash"],RCA_LOGOS_GAMME_CONSEIL_URL=name=>`${name}.svg`},"./libs/rca-design-system-library/src/lib/icons/rca-logos-meg.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>RCA_LOGOS_MEG_URL,w:()=>RCA_LOGOS_MEG});const RCA_LOGOS_MEG=["app-achat","app-banque","app-caisse","app-dematbox","app-export","app-facturation","app-vente-importee","app-note-de-frais","app-progbat","app-supervision","app-tableau-de-bord","app-tresorerie","app-tva","app-vente"],RCA_LOGOS_MEG_URL=name=>`${name}.svg`},"./libs/rca-design-system-library/src/lib/icons/rca-icons-demo/rca-icons-demo.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,TailleIcones:()=>TailleIcones,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_rca_icons_constant__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-icons.constant.ts"),_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-logos-gamme-conseil.constant.ts"),_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-logos-meg.constant.ts"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_rca_icons_module__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-icons.module.ts"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_common_http__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Standard/Icons",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.JF,_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.Ps,_rca_icons_module__WEBPACK_IMPORTED_MODULE_1__.i]})]},Demo=(args=>({template:'\n        <h3 class="h3-like margin-bottom-s">Icons</h3>\n        <ul class="gridlayout-4 has-layout-gutter-l margin-bottom-xl no-bullet">\n            <li *ngFor="let rcaIcon of RcaIconsList" class="icon-container">\n                <div class="padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color text-align-center">\n                     <div class="display-flex flex-justify-content-center">\n                        <mat-icon [svgIcon]="rcaIcon"></mat-icon>\n                     </div>\n                </div>\n                <p class="body-2-font icon-label text-align-center">{{ rcaIcon }}</p>\n            </li>\n        </ul>\n\n        <h3 class="h3-like margin-bottom-s">Logos Gamme Conseil</h3>\n         <ul class="gridlayout-4 has-layout-gutter-l margin-bottom-xl no-bullet">\n            <li *ngFor="let logoGammeConseil of LogosGammeConseilList" class="icon-container">\n                <div class="padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color text-align-center">\n                     <div class="display-flex flex-justify-content-center">\n                        <mat-icon [svgIcon]="logoGammeConseil"></mat-icon>\n                     </div>\n                </div>\n                <p class="body-2-font icon-label text-align-center">{{ logoGammeConseil }}</p>\n            </li>\n        </ul>\n\n        <h3 class="h3-like margin-bottom-s">Logos Meg</h3>\n        <ul class="gridlayout-4 has-layout-gutter-l no-bullet">\n            <li *ngFor="let logoMeg of RcaLogosMeg" class="icon-container">\n                <div class="padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color text-align-center">\n                     <div class="display-flex flex-justify-content-center">\n                        <mat-icon [svgIcon]="logoMeg"></mat-icon>\n                     </div>\n                </div>\n                <p class="body-font icon-label text-align-center">{{ rcaIconApp }}</p>\n            </li>\n        </ul>\n    ',props:args})).bind({});Demo.args={RcaIconsList:_rca_icons_constant__WEBPACK_IMPORTED_MODULE_5__.W,LogosGammeConseilList:_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_6__.z,RcaLogosMeg:_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_7__.w};const TailleIcones=(()=>({template:'\n     <ul class="gridlayout-4 has-layout-gutter-l margin-bottom-xl no-bullet">\n      <li>\n        <div class="padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color text-align-center">\n          <div class="display-flex flex-justify-content-center">\n            <mat-icon svgIcon="rca-icon-actu" aria-hidden="true"></mat-icon>\n          </div>\n        </div>\n        <p class="body-font icon-label text-align-center">svgIcon="rca-icon-actu"</p>\n      </li>\n      <li>\n        <div class="padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color text-align-center">\n          <div class="display-flex flex-justify-content-center">\n            <mat-icon class="size-l" svgIcon="rca-icon-actu" aria-hidden="true"></mat-icon>\n          </div>\n        </div>\n        <p class="body-font icon-label text-align-center">svgIcon="rca-icon-actu" <br /> class="size-l"</p>\n      </li>\n      <li>\n        <div class="padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color text-align-center">\n          <div class="display-flex flex-justify-content-center">\n            <mat-icon class="size-l" svgIcon="app-facturation-beta" aria-hidden="true"></mat-icon>\n          </div>\n        </div>\n        <p class="body-font icon-label text-align-center">svgIcon="app-facturation-beta" <br /> class="size-l"</p>\n      </li>\n      <li>\n        <div class="padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color text-align-center">\n          <div class="display-flex flex-justify-content-center">\n            <mat-icon class="size-l warning-500-text-color" svgIcon="app-facturation-beta" aria-hidden="true"></mat-icon>\n          </div>\n        </div>\n        <p class="body-font icon-label text-align-center"> svgIcon="app-facturation-beta" <br /> class="size-l warning-500-text-color"</p>\n      </li>\n    </ul>\n\n  '})).bind({})}}]);