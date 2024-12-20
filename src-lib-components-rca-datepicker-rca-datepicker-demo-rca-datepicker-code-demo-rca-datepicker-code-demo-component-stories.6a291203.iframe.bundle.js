"use strict";(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[6034],{"./libs/storybook-utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q_:()=>components.q,Le:()=>HIGHLIGHT_JS_PROVIDER,Oy:()=>components.O,VM:()=>get_figma_params_utils.V,L2:()=>openInFigma});var components=__webpack_require__("./libs/storybook-utils/src/lib/components/index.ts");const HIGHLIGHT_JS_PROVIDER={provide:__webpack_require__("./node_modules/ngx-highlightjs/fesm2020/ngx-highlightjs.mjs").rN,useValue:{coreLibraryLoader:()=>__webpack_require__.e(5168).then(__webpack_require__.bind(__webpack_require__,"./node_modules/highlight.js/es/core.js")),lineNumbersLoader:()=>__webpack_require__.e(9815).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/highlightjs-line-numbers.js/src/highlightjs-line-numbers.js",23)),languages:{typescript:()=>__webpack_require__.e(9996).then(__webpack_require__.bind(__webpack_require__,"./node_modules/highlight.js/es/languages/typescript.js")),css:()=>__webpack_require__.e(5016).then(__webpack_require__.bind(__webpack_require__,"./node_modules/highlight.js/es/languages/css.js")),xml:()=>__webpack_require__.e(6282).then(__webpack_require__.bind(__webpack_require__,"./node_modules/highlight.js/es/languages/xml.js"))}}},openInFigma=nodeId=>({title:"Ouvrir sur Figma",onClick:()=>{window.open("https://www.figma.com/","_blank")}});var get_figma_params_utils=__webpack_require__("./libs/storybook-utils/src/lib/utils/get-figma-params.utils.ts")},"./libs/storybook-utils/src/lib/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>A11yKeySupportTemplate,O:()=>KeySupportComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table=__webpack_require__("./node_modules/@angular/material/fesm2022/table.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let KeySupportComponent=class KeySupportComponent{constructor(){this.keySupports=[],this.displayedColumns=["key","utilities"]}isArray(keySupport){return Array.isArray(keySupport.key)}static#_=this.propDecorators={keySupports:[{type:core.Input,args:[{required:!0}]}],keySupportsTitle:[{type:core.Input}]}};KeySupportComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"rca-key-support",template:'<h4 *ngIf="keySupportsTitle" class="h4-like">{{ keySupportsTitle }}</h4>\n<table\n  class="demo-table-frame rca-dsl-table"\n  mat-table\n  [dataSource]="keySupports"\n>\n  <caption class="sr-only">\n    <p>{{ keySupportsTitle }}</p>\n  </caption>\n  <ng-container matColumnDef="key">\n    <th class="demo-key-column" scope="col" mat-header-cell *matHeaderCellDef>\n      Clé\n    </th>\n    <th class="demo-key-column" scope="row" mat-cell *matCellDef="let element">\n      <ng-container *ngIf="isArray(element); else simpleKey">\n        <ng-container *ngFor="let key of element.key; let last = last">\n          <kbd>{{ key }}</kbd>\n          <span *ngIf="!last"> {{ element.keySeparator || \'+\' }} </span>\n        </ng-container>\n      </ng-container>\n      <ng-template #simpleKey>\n        <kbd>{{ element.key }}</kbd>\n      </ng-template>\n    </th>\n  </ng-container>\n  <ng-container matColumnDef="utilities">\n    <th scope="col " mat-header-cell *matHeaderCellDef>Fonction</th>\n    <td mat-cell *matCellDef="let element">\n      <ul *ngIf="element.utilities.length > 1; else uniqueUtility">\n        <li\n          *ngFor="let utility of element.utilities"\n          [innerHTML]="utility"\n        ></li>\n      </ul>\n      <ng-template #uniqueUtility>\n        <p>{{ element.utilities[0] }}</p>\n      </ng-template>\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\n  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\n</table>\n',standalone:!0,imports:[table.p0,common.NgIf,common.NgForOf],host:{class:"display-block"}})],KeySupportComponent);const A11yKeySupportTemplate=args=>({component:KeySupportComponent,props:args,template:'<rca-key-support [keySupports]="keySupports" />'})},"./libs/storybook-utils/src/lib/utils/get-figma-params.utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getFigmaParams});const getFigmaParams=nodeId=>({design:{name:"Figma",type:"figspec",url:"https://www.figma.com/proto/",accessToken:""}})},"./libs/rca-design-system-library/src/lib/components/rca-datepicker/rca-datepicker-demo/rca-datepicker-code-demo/rca-datepicker-code-demo.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,default:()=>rca_datepicker_code_demo_component_stories});var http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src=__webpack_require__("./libs/storybook-utils/src/index.ts"),icons=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),material_luxon_adapter=__webpack_require__("./node_modules/@angular/material-luxon-adapter/fesm2022/material-luxon-adapter.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),datepicker=__webpack_require__("./node_modules/@angular/material/fesm2022/datepicker.mjs"),form_field=__webpack_require__("./node_modules/@angular/material/fesm2022/form-field.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),menu=__webpack_require__("./node_modules/@angular/material/fesm2022/menu.mjs"),tabs=__webpack_require__("./node_modules/@angular/material/fesm2022/tabs.mjs"),ngx_highlightjs=__webpack_require__("./node_modules/ngx-highlightjs/fesm2020/ngx-highlightjs.mjs"),rca_button=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/index.ts"),rca_mat_date_range_picker_input_component=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-datepicker/rca-date-range-picker/rca-mat-date-range-picker-input/rca-mat-date-range-picker-input.component.ts"),rca_datepicker_module=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-datepicker/rca-datepicker.module.ts");var luxon=__webpack_require__("./node_modules/luxon/src/luxon.js"),date_format_constant=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-datepicker/constants/date-format.constant.ts"),rca_datepicker_header_component=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-datepicker/rca-datepicker-header/rca-datepicker-header.component.ts");let RcaDatepickerCodeDemoComponent=class RcaDatepickerCodeDemoComponent{constructor(){this.rcaHeader=rca_datepicker_header_component.c,this.formDate=new fesm2022_forms.cw({dateTest:new fesm2022_forms.NI(null)}),this.minDate=luxon.ou.fromFormat("10/04/2022",date_format_constant.I),this.dateDisabled=luxon.ou.now(),this.exampleHtml1='\n<form [formGroup]="formDate">\n  <div class="demo">\n    <mat-form-field appearance="outline" class="rca-dsl-datepicker body-2-font">\n      <mat-label>Date simple</mat-label>\n      <rca-mat-datepicker\n        formControlName="dateTest"\n        [matDatepicker]="picker"\n        [min]="minDate"\n        placeholder="JJ/MM/AAAA"\n      ></rca-mat-datepicker>\n      <mat-datepicker-toggle matSuffix [for]="picker">\n        <mat-icon svgIcon="rca-icon-calendar" matDatepickerToggleIcon></mat-icon>\n      </mat-datepicker-toggle>\n      <mat-datepicker\n        [calendarHeaderComponent]="rcaHeader"\n        panelClass="rca-dsl-datepicker-calendar"\n        #picker\n      ></mat-datepicker>\n      <mat-error *ngIf="formDate.controls.dateTest.errors?.min">\n        La date doit être postérieure au 10/04/2022\n      </mat-error>\n    </mat-form-field>\n  </div>\n</form>\n',this.exampleTs1="\npublic rcaHeader = RcaDatepickerHeaderComponent;\n\npublic formDate = new FormGroup({\n  dateTest: new FormControl(),\n});\n\npublic minDate = DateTime.fromFormat('10/04/2022', DATE_DISPLAY_FORMAT);\n  ",this.exampleModule1="\n  // À rajouter dans l'app.module de l'application\n  imports: [\n    ...\n    RcaDatepickerModule,\n    MatLuxonDateModule,\n  ],\n  providers: [\n      ...\n    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },\n    {\n      provide: MAT_LUXON_DATE_ADAPTER_OPTIONS,\n      useValue: { firstDayOfWeek: 1 },\n    },\n  ],"}ngOnInit(){this.formDate.controls.dateTest.disable()}};RcaDatepickerCodeDemoComponent=(0,tslib_es6.gn)([(0,fesm2022_core.Component)({selector:"rca-datepicker-code-demo",template:'<h1 class="h3-like secondary-color">DatePicker</h1>\n<h2 class="margin-top-s margin-bottom-s h4-like">Demo</h2>\n\n<form [formGroup]="formDate">\n  <div class="demo">\n    <mat-form-field appearance="outline" class="rca-dsl-datepicker body-2-font">\n      <mat-label>Date simple</mat-label>\n      <rca-mat-datepicker\n        formControlName="dateTest"\n        [matDatepicker]="picker"\n        [min]="minDate"\n        placeholder="JJ/MM/AAAA"\n      ></rca-mat-datepicker>\n      <mat-datepicker-toggle matSuffix [for]="picker">\n        <mat-icon svgIcon="rca-icon-calendar" matDatepickerToggleIcon></mat-icon>\n      </mat-datepicker-toggle>\n      <mat-datepicker\n        [calendarHeaderComponent]="rcaHeader"\n        panelClass="rca-dsl-datepicker-calendar"\n        #picker\n      ></mat-datepicker>\n      <mat-error *ngIf="formDate.controls.dateTest.errors?.min">\n        La date doit être postérieure au 10/04/2022\n      </mat-error>\n    </mat-form-field>\n  </div>\n</form>\n\n<div class="demo">\n  <mat-form-field appearance="outline" class="rca-dsl-datepicker body-2-font">\n    <mat-label>Date simple</mat-label>\n    <rca-mat-datepicker\n      [ngModel]="dateDisabled"\n      [matDatepicker]="dodo"\n      [min]="minDate"\n      placeholder="JJ/MM/AAAA"\n      disabled\n    ></rca-mat-datepicker>\n    <mat-datepicker-toggle matSuffix [for]="dodo">\n      <mat-icon svgIcon="rca-icon-calendar" matDatepickerToggleIcon></mat-icon>\n    </mat-datepicker-toggle>\n    <mat-datepicker\n      [calendarHeaderComponent]="rcaHeader"\n      panelClass="rca-dsl-datepicker-calendar"\n      #dodo\n    ></mat-datepicker>\n  </mat-form-field>\n</div>\n\n<h2 class="margin-top-s h4-like">Code</h2>\n<div>\n  <mat-tab-group class="rca-dsl-tabs">\n    <mat-tab label="Html">\n      <pre class="caption-font">\n          <code [languages]="[\'xml\']" [lineNumbers]="true" [highlight]="exampleHtml1"></code> </pre>\n    </mat-tab>\n    <mat-tab label="Ts">\n      <pre class="caption-font">\n          <code [languages]="[\'typescript\']" [lineNumbers]="true" [highlight]="exampleTs1"></code> </pre>\n    </mat-tab>\n    <mat-tab label="app.module.ts">\n      <pre class="caption-font">\n          <code [languages]="[\'typescript\']" [lineNumbers]="true" [highlight]="exampleModule1"></code> </pre>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n\n<div class="card-container padding-s elevation-small">\n  <h2 class="h3-like margin-top-s margin-bottom-s">👉 ♿ Accessibilité, les bonnes pratiques</h2>\n  <div class="margin-bottom-xs">\n    RCA utilise l\'élément <code>&lt;mat-datepicker&gt;</code> de la librairie Angular Material. Des\n    informations sur l\'accessibilité sont données dans leur documentation :\n    <a\n      href="https://material.angular.io/components/datepicker/overview#accessibility"\n      target="_blank"\n      rel="noopener"\n      >ici</a\n    >\n  </div>\n  <h2 class="h4-like margin-bottom-xxs">Points importants :</h2>\n  <ul class="body-2-font">\n    <li class="margin-bottom-xxs">\n      Ajoutez toujours un label pour l\'input du DatePicker avec un contenu descriptif en utilisant\n      soit la balise <code>&lt;mat-label&gt;</code>, soit un attribut <code>aria-label</code>,\n      <code>aria-labelledby</code> ou <code>MatDatepickerIntl</code>.\n    </li>\n    <li class="margin-bottom-xxs">\n      Communiquez toujours le format de date attendu via la balise <code>&lt;mat-hint&gt;</code>\n      ou en ajoutant un label supplémentaire, adjacent à l\'input. Sur MEG, nous avons fait le choix\n      d\'indiquer le format de la date en placeholder, au clic sur l\'input.\n    </li>\n    <li>\n      Il est recommandé d\'activer les boutons de confirmation via la balise\n      <code>&lt;mat-datepicker-actions&gt;</code>\n      comme décrit dans la doc\n      <a\n        href="https://material.angular.io/components/datepicker/overview#confirmation-action-buttons"\n        target="_blank"\n        rel="noopener"\n        >ici</a\n      >. Attention cependant, comme son rôle l\'indique, cette balise rajoute des boutons de\n      confirmation. Une action utilisateur supplémentaire est donc nécessaire. Sur MEG, nous avons\n      choisi de n\'activer cette option que dans le cas du choix d\'une période.\n    </li>\n  </ul>\n</div>\n'})],RcaDatepickerCodeDemoComponent);var tooltip=__webpack_require__("./node_modules/@angular/material/fesm2022/tooltip.mjs");let RcaDatepickerDemoModule=class RcaDatepickerDemoModule{};RcaDatepickerDemoModule=(0,tslib_es6.gn)([(0,fesm2022_core.NgModule)({declarations:[RcaDatepickerCodeDemoComponent],exports:[RcaDatepickerCodeDemoComponent],imports:[common.CommonModule,datepicker.FA,form_field.lN,input.c,icon.Ps,fesm2022_button.ot,tooltip.AV,menu.Tx,a11y.rt,rca_datepicker_module.b,fesm2022_forms.UX,tabs.Nh,ngx_highlightjs._l,material_luxon_adapter.En,fesm2022_forms.u5,rca_mat_date_range_picker_input_component.d,rca_button.Nf],providers:[{provide:core.Ad,useValue:"fr-FR"},{provide:material_luxon_adapter.vx,useValue:{firstDayOfWeek:1}}]})],RcaDatepickerDemoModule);const rca_datepicker_code_demo_component_stories={title:"Formulaire/DatePicker/Code",component:RcaDatepickerCodeDemoComponent,decorators:[(0,dist.moduleMetadata)({imports:[RcaDatepickerDemoModule,icons.i,http.JF],providers:[{provide:core.Ad,useValue:"fr-FR"}]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)(),src.Le]})]},Demo=(args=>({component:RcaDatepickerCodeDemoComponent,props:args})).bind({});Demo.args={}}}]);