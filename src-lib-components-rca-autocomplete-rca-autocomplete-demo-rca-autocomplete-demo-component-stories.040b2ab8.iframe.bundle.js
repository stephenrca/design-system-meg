(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[769],{"./libs/rca-design-system-library/src/lib/components/rca-autocomplete/rca-autocomplete.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host-context(.uppercase-chips) .rca-chips-row {\n  text-transform: uppercase;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/rca-design-system-library/src/lib/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>_rca_icons_module__WEBPACK_IMPORTED_MODULE_0__.i});var _rca_icons_module__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-icons.module.ts")},"./libs/rca-design-system-library/src/lib/icons/rca-icons.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>RCA_ICONS_URL,W:()=>RCA_ICONS});const RCA_ICONS=["rca-icon-actu","rca-icon-add-folder","rca-icon-add-list","rca-icon-add","rca-icon-add-user","rca-icon-affpiece","rca-icon-alarm","rca-icon-alert","rca-icon-approve-file","rca-icon-arrow-left","rca-icon-arrow-left-double","rca-icon-arrow-right","rca-icon-arrow-right-double","rca-icon-attach","rca-icon-attach-done","rca-icon-attach-lost","rca-icon-avoid-reload","rca-icon-bank","rca-icon-bill","rca-icon-block","rca-icon-broken-chain","rca-icon-business","rca-icon-cabinet","rca-icon-caisse","rca-icon-calculation","rca-icon-calendar","rca-icon-cancel","rca-icon-catalog","rca-icon-chain","rca-icon-chart","rca-icon-chat","rca-icon-check","rca-icon-check-circle","rca-icon-close","rca-icon-cloud-upload","rca-icon-contact","rca-icon-credit-card","rca-icon-dashboard","rca-icon-documents","rca-icon-document","rca-icon-down-arrow","rca-icon-down-arrow-circle","rca-icon-down-arrow-stat","rca-icon-drag-drop","rca-icon-duplicate","rca-icon-edit-file","rca-icon-edit","rca-icon-email","rca-icon-equal","rca-icon-euro","rca-icon-excel","rca-icon-expand-less","rca-icon-expand-more","rca-icon-export","rca-icon-export-doc","rca-icon-filter","rca-icon-folder","rca-icon-factuneo","rca-icon-fr","rca-icon-go-to","rca-icon-group","rca-icon-help","rca-icon-history","rca-icon-home","rca-icon-hourglass","rca-icon-image","rca-icon-import","rca-icon-info","rca-icon-interface-menu","rca-icon-label","rca-icon-layer-print","rca-icon-less","rca-icon-less-simple","rca-icon-licence-free","rca-icon-licence-premium","rca-icon-list","rca-icon-location","rca-icon-lock-folder","rca-icon-lock-key","rca-icon-logout","rca-icon-menu","rca-icon-mobile","rca-icon-multi-actions","rca-icon-multiple-payment","rca-icon-ndf","rca-icon-neutral-arrow","rca-icon-new-document","rca-icon-new-file","rca-icon-no-preview","rca-icon-onboarding","rca-icon-open-window","rca-icon-pause","rca-icon-pdf","rca-icon-pdp","rca-icon-photo","rca-icon-preview","rca-icon-printer","rca-icon-purchase","rca-icon-reload","rca-icon-remove-document","rca-icon-resize","rca-icon-save","rca-icon-scissors","rca-icon-search","rca-icon-setting","rca-icon-shift","rca-icon-shipping","rca-icon-switch","rca-icon-time-off","rca-icon-total","rca-icon-trash","rca-icon-undo","rca-icon-unlock-key","rca-icon-up-arrow","rca-icon-up-arrow-stat","rca-icon-upload","rca-icon-user","rca-icon-warning","rca-icon-waving-hand","rca-icon-word"],RCA_ICONS_URL=name=>`${name}.svg`},"./libs/rca-design-system-library/src/lib/icons/rca-icons.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>RcaIconsModule});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-icons.constant.ts"),_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-logos-gamme-conseil.constant.ts"),_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/rca-logos-meg.constant.ts");let RcaIconsModule=class RcaIconsModule{constructor(registry,sanitizer){this.registry=registry,this.sanitizer=sanitizer,_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__.W.forEach((nom=>this.addSvgIcon(nom))),_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__.z.forEach((nom=>this.addSvgLogoGammeConseil(nom))),_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__.w.forEach((nom=>this.addSvgLogoMeg(nom)))}addSvgIcon(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_icons_constant__WEBPACK_IMPORTED_MODULE_0__.Q)(name)))}addSvgLogoGammeConseil(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_logos_gamme_conseil_constant__WEBPACK_IMPORTED_MODULE_1__.a)(name)))}addSvgLogoMeg(name){this.registry.addSvgIcon(name,this.sanitizer.bypassSecurityTrustResourceUrl((0,_rca_logos_meg_constant__WEBPACK_IMPORTED_MODULE_2__.N)(name)))}static#_=this.ctorParameters=()=>[{type:_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv},{type:_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer}]};RcaIconsModule=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({imports:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps],exports:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps],providers:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv]}),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:paramtypes",[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.jv,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer])],RcaIconsModule)},"./libs/rca-design-system-library/src/lib/icons/rca-logos-gamme-conseil.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>RCA_LOGOS_GAMME_CONSEIL_URL,z:()=>RCA_LOGOS_GAMME_CONSEIL});const RCA_LOGOS_GAMME_CONSEIL=["logo-analyse-cout-revient","logo-bilan-image","logo-choix-financement","logo-devis-flash","logo-e-creation","logo-evaluation-flash","logo-gestion-relation-client","logo-indicateurs-flash","logo-meg-bnc","logo-meg-premium","logo-meg","logo-prevision-flash","logo-ratios-sectoriels","logo-simul-auto","logo-simul-immo","logo-suivi-com","logo-tableau-de-bord-flash"],RCA_LOGOS_GAMME_CONSEIL_URL=name=>`${name}.svg`},"./libs/rca-design-system-library/src/lib/icons/rca-logos-meg.constant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>RCA_LOGOS_MEG_URL,w:()=>RCA_LOGOS_MEG});const RCA_LOGOS_MEG=["app-achat","app-banque","app-caisse","app-dematbox","app-export","app-facturation","app-vente-importee","app-note-de-frais","app-progbat","app-supervision","app-tableau-de-bord","app-tresorerie","app-tva","app-vente"],RCA_LOGOS_MEG_URL=name=>`${name}.svg`},"./libs/storybook-utils/src/lib/utils/get-figma-params.utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>getFigmaParams});const getFigmaParams=nodeId=>({design:{name:"Figma",type:"figspec",url:"https://www.figma.com/proto/",accessToken:""}})},"./libs/rca-design-system-library/src/lib/components/rca-autocomplete/rca-autocomplete-demo/rca-autocomplete-demo.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllAutocomplete:()=>AllAutocomplete,Base:()=>Base,BaseDisabled:()=>BaseDisabled,BaseError:()=>BaseError,BaseFilled:()=>BaseFilled,BaseReadonly:()=>BaseReadonly,BaseWithProps:()=>BaseWithProps,Chips:()=>Chips,ChipsDisabled:()=>ChipsDisabled,ChipsError:()=>ChipsError,ChipsFilled:()=>ChipsFilled,ChipsReadonly:()=>ChipsReadonly,ChipsWithProps:()=>ChipsWithProps,default:()=>rca_autocomplete_demo_component_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),get_figma_params_utils=__webpack_require__("./libs/storybook-utils/src/lib/utils/get-figma-params.utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var rca_autocomplete_componentngResource=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-autocomplete/rca-autocomplete.component.scss?ngResource"),rca_autocomplete_componentngResource_default=__webpack_require__.n(rca_autocomplete_componentngResource),keycodes=__webpack_require__("./node_modules/@angular/cdk/fesm2022/keycodes.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),noop=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js"),debounceTime=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),startWith=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");let RcaAutocompleteComponent=class RcaAutocompleteComponent{constructor(){this.destroyRef=(0,core.inject)(core.DestroyRef),this._options=[],this.type="default",this.separatorKeysCodes=[keycodes.K5,keycodes.OC],this.canAddManual=!0,this.readonly=!1,this.placeholder="",this.inputChange=new core.EventEmitter,this.values=[],this.onTouched=()=>null,this.disabled=!1,this.inputControl=new fesm2022_forms.NI(""),this.injector=(0,core.inject)(core.Injector),this.filteredOptions=this.inputControl.valueChanges.pipe((0,startWith.O)(""),(0,map.U)((val=>this.filter(val))))}set chipGrid(chipGrid){chipGrid&&(chipGrid._onChange=noop.Z)}set options(options){this._options=this.updateOptions(options,"chips"===this.type?this.values:[this.value])}get options(){return this._options}get control(){return this.ngControl.control}get inputChipsStyleDisplay(){return(this.disabled||this.readonly)&&this.values.length?"none":""}compareWith(value1,value2){return Boolean(void 0!==value1&&void 0!==value2&&(this.propValue&&value1&&value2?value1[this.propValue]===value2[this.propValue]:value1===value2))}ngOnInit(){this.ngControl=this.injector.get(fesm2022_forms.a5),this.ngControl.valueAccessor=this,this.inputControl.validator=this.control.validator,this.inputControl.valueChanges.pipe((0,rxjs_interop.sL)(this.destroyRef),(0,debounceTime.b)(200)).subscribe((newValue=>{this.inputChange.emit(newValue)}))}addChip(event){if("chips"!==this.type||!this.canAddManual)return;const value=(event.value||"").trim();value&&!this.isChipsAlreadySelected(value)&&(this.propValue&&this.propLabel?this.values=[...this.values,{[this.propValue]:value,[this.propLabel]:value}]:this.values=[...this.values,value]),event.chipInput.clear(),this.onChange?.(this.values),this.inputControl.setValue(null)}removeChip(option){this.readonly||this.disabled||(this.values=this.values.filter((optionSelected=>!this.compareWith(optionSelected,option))),this.onChange?.(this.values))}getLabelFromOption(option){return this.propLabel?option[this.propLabel]:option}isChipsAlreadySelected(option){return"chips"===this.type&&this.values.some((value=>this.compareWith(value,option)))}isDefaultAlreadySelected(option){return"default"===this.type&&this.inputControl.value===option}select(event){if("default"===this.type)this.setDefaultValue(event.option.value),this.onChange?.(event.option.value);else if("chips"===this.type){const value=event.option.value;this.isChipsAlreadySelected(value)?this.clearInput():(this.setChipsValues([...this.values,event.option.value]),this.onChange?.(this.values))}}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(isDisabled){this.disabled=isDisabled,isDisabled?this.inputControl.disable():this.inputControl.enable()}setDefaultValue(option){this.value=option;const label=this.getLabelFromOption(option);this.inputControl.setValue(label)}setChipsValues(values){this.values=values,this.clearInput()}clearInput(){this.inputControl.setValue(""),this.inputRef&&(this.inputRef.nativeElement.value="")}writeValue(value){if("default"===this.type){const singleValue=value;this._options=this.updateOptions(this.options,[singleValue]),this.setDefaultValue(singleValue)}else if("chips"===this.type){const arrayValue=value;this._options=this.updateOptions(this.options,arrayValue),this.setChipsValues(arrayValue)}}updateOptions(options,values){const newOptions=[...options];return values.reverse().forEach((value=>{value&&!newOptions.find((option=>this.compareWith(option,value)))&&newOptions.unshift(value)})),newOptions}filter(val){return"chips"===this.type?this.options.filter((option=>this.propValue&&this.propLabel?option[this.propLabel]?.toLowerCase().includes(val?.toLowerCase()):option.toLowerCase().includes(val?.toLowerCase()||""))):this.options}static#_=this.propDecorators={inputRef:[{type:core.ViewChild,args:["inputRef"]}],chipGrid:[{type:core.ViewChild,args:["chipGrid",{static:!1}]}],type:[{type:core.Input}],separatorKeysCodes:[{type:core.Input}],errorMessage:[{type:core.Input}],canAddManual:[{type:core.Input}],options:[{type:core.Input}],propValue:[{type:core.Input}],readonly:[{type:core.Input,args:[{transform:core.booleanAttribute}]}],propLabel:[{type:core.Input}],label:[{type:core.Input}],placeholder:[{type:core.Input}],inputChange:[{type:core.Output}]}};RcaAutocompleteComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"rca-autocomplete",template:'<mat-form-field\n  class="rca-dsl-autocomplete"\n  [class.mat-form-field-disabled]="disabled || readonly"\n  [class.rca-dsl-autocomplete--read-only]="readonly"\n>\n  <button\n    *ngIf="inputControl.value && !disabled && !readonly"\n    type="button"\n    matSuffix\n    mat-icon-button\n    aria-label="Effacer recherche"\n    color="primary"\n    (click)="clearInput()"\n  >\n    <mat-icon svgIcon="rca-icon-close" />\n  </button>\n  <mat-label *ngIf="label">{{ label }}</mat-label>\n  <ng-container *ngIf="type === \'chips\'">\n    <mat-chip-grid\n      #chipGrid\n      aria-label="sélection"\n      [formControl]="control"\n      [disabled]="disabled"\n      [class.margin-bottom-xs]="values.length && !disabled && !readonly"\n      (click)="inputRef.focus()"\n    >\n      <mat-chip-row\n        *ngFor="let value of values"\n        class="rca-chips-row"\n        (removed)="removeChip(value)"\n        (click)="removeChip(value)"\n        (keydown.enter)="removeChip(value)"\n        (keydown.space)="removeChip(value)"\n        [class.mat-mdc-chip--read-only]="readonly"\n      >\n        {{ getLabelFromOption(value) }}\n        <mat-icon *ngIf="!readonly" matChipRemove [svgIcon]="\'rca-icon-close\'" />\n      </mat-chip-row>\n    </mat-chip-grid>\n    <input\n      #inputRef\n      matInput\n      [formControl]="inputControl"\n      [placeholder]="placeholder"\n      [readonly]="readonly"\n      [style.display]="inputChipsStyleDisplay"\n      [matAutocomplete]="auto"\n      [matChipInputFor]="chipGrid"\n      [matChipInputAddOnBlur]="false"\n      [matChipInputSeparatorKeyCodes]="separatorKeysCodes"\n      (matChipInputTokenEnd)="addChip($event)"\n    />\n  </ng-container>\n\n  <input\n    *ngIf="type === \'default\'"\n    #inputRef\n    matInput\n    [formControl]="inputControl"\n    [placeholder]="placeholder"\n    [matAutocomplete]="auto"\n    [readonly]="readonly"\n  />\n  <mat-autocomplete\n    #auto="matAutocomplete"\n    class="rca-dsl-autocomplete-panel {{\n      type === \'chips\' ? \'rca-dsl-autocomplete-panel--chips\' : \'\'\n    }}"\n    (optionSelected)="select($event)"\n  >\n    <mat-option\n      *ngFor="let option of filteredOptions | async"\n      class="flex-direction-row-reverse"\n      [class.mdc-list-item--selected]="isDefaultAlreadySelected(option)"\n      [value]="option"\n      [disabled]="isChipsAlreadySelected(option)"\n      >{{ getLabelFromOption(option) }}\n      <mat-icon\n        *ngIf="isChipsAlreadySelected(option)"\n        class="margin-0"\n        svgIcon="rca-icon-check"\n      ></mat-icon>\n    </mat-option>\n  </mat-autocomplete>\n  <ng-content></ng-content>\n  <mat-error>{{ errorMessage || \'Une erreur est survenue\' }}</mat-error>\n</mat-form-field>\n',styles:[rca_autocomplete_componentngResource_default()]})],RcaAutocompleteComponent);var http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),autocomplete=__webpack_require__("./node_modules/@angular/material/fesm2022/autocomplete.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),chips=__webpack_require__("./node_modules/@angular/material/fesm2022/chips.mjs"),form_field=__webpack_require__("./node_modules/@angular/material/fesm2022/form-field.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),tabs=__webpack_require__("./node_modules/@angular/material/fesm2022/tabs.mjs"),icons=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/index.ts");let RcaAutocompleteModule=class RcaAutocompleteModule{};RcaAutocompleteModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[RcaAutocompleteComponent],exports:[RcaAutocompleteComponent],imports:[common.CommonModule,fesm2022_forms.u5,fesm2022_forms.UX,input.c,icon.Ps,fesm2022_button.ot,http.JF,icons.i,tabs.Nh,autocomplete.Bb,chips.Hi],providers:[{provide:fesm2022_forms.JU,useExisting:RcaAutocompleteComponent,multi:!0},{provide:fesm2022_forms.Cf,useExisting:RcaAutocompleteComponent,multi:!0},{provide:form_field.o2,useValue:{appearance:"outline"}}]})],RcaAutocompleteModule);const rca_autocomplete_demo_component_stories={title:"Formulaire/Autocomplete",component:RcaAutocompleteComponent,decorators:[(0,dist.moduleMetadata)({imports:[RcaAutocompleteModule,fesm2022_forms.UX,fesm2022_forms.u5,common.CommonModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)()]})]};function validate(items){return items.value?.length<=1?{validate:{valid:!1,errorMessage:"Sélectionnez deux items ou plus"}}:null}const AllAutocomplete=(args=>({props:args,styles:["\ntable {\n  border-spacing: 0;\n  width: min(80%, 700px);\n\n  td {\n    padding: 5px;\n  }\n}\n"],template:'<table>\n <caption class="sr-only">Autocomplete par défaut, remplis, en erreur, en lecture seule, et désactivés</caption>\n <thead>\n    <tr>\n      <th></th>\n      <th scope="col">Chips</th>\n      <th scope="col">Basic</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Default</th>\n      <td>\n        <rca-autocomplete\n          type="chips"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          [options]="options"\n          [formControl]="ctrlChipsDefault"\n          />\n      </td>\n      <td>\n        <rca-autocomplete\n          type="default"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          [options]="options"\n          [formControl]="ctrlDefault"\n          />\n      </td>\n    </tr>\n    <tr>\n      <th scope="row">Filled</th>\n      <td>\n        <rca-autocomplete\n          type="chips"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          [options]="options"\n          [formControl]="ctrlChipsFilled"\n          />\n      </td>\n      <td>\n        <rca-autocomplete\n          type="default"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          [options]="options"\n          [formControl]="ctrlFilled"\n          />\n      </td>\n    </tr>\n    <tr>\n      <th scope="row">Error</th>\n      <td>\n        <rca-autocomplete\n          type="chips"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          errorMessage="Sélectionnez deux items ou plus"\n          [options]="options"\n          [formControl]="ctrlChipsError"\n          />\n      </td>\n      <td>\n        <rca-autocomplete\n          type="default"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          errorMessage="Message d\'erreur"\n          [options]="options"\n          [formControl]="ctrlError"\n          />\n      </td>\n    </tr>\n    <tr>\n      <th scope="row">Read-only</th>\n      <td>\n        <rca-autocomplete\n          type="chips"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          readonly\n          [options]="options"\n          [formControl]="ctrlChipsReadonly"\n          />\n      </td>\n      <td>\n        <rca-autocomplete\n          type="default"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          readonly\n          [options]="options"\n          [formControl]="ctrlReadonly"\n          />\n      </td>\n    </tr>\n    <tr>\n      <th scope="row">Désactivé</th>\n      <td>\n        <rca-autocomplete\n          type="chips"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          [options]="options"\n          [formControl]="ctrlChipsDisabled"\n          />\n      </td>\n      <td>\n        <rca-autocomplete\n          type="default"\n          label="Label"\n          placeholder="Ecrivez un mot clé"\n          [options]="options"\n          [formControl]="ctrlDisabled"\n          />\n      </td>\n    </tr>\n  </tbody>\n</table>\n'})).bind({});AllAutocomplete.args={ctrlDefault:new fesm2022_forms.NI(""),ctrlFilled:new fesm2022_forms.NI("Text 1"),ctrlError:new fesm2022_forms.NI("",[fesm2022_forms.kI.required]),ctrlReadonly:new fesm2022_forms.NI("Text 1"),ctrlDisabled:new fesm2022_forms.NI({value:"",disabled:!0}),ctrlChipsDefault:new fesm2022_forms.NI([]),ctrlChipsFilled:new fesm2022_forms.NI(["Text 1"]),ctrlChipsError:new fesm2022_forms.NI(["Text 1"],[fesm2022_forms.kI.required,validate]),ctrlChipsReadonly:new fesm2022_forms.NI(["Text 1"]),ctrlChipsDisabled:new fesm2022_forms.NI({value:[],disabled:!0}),options:["Text 1","Text 2","Text 3","Text 4"]},AllAutocomplete.parameters=(0,get_figma_params_utils.V)("31160-2207");const Template=args=>({component:RcaAutocompleteComponent,props:args,template:'\n    <rca-autocomplete\n      [type]="type"\n      [label]="label"\n      [placeholder]="placeholder"\n      [options]="options"\n      [formControl]="ctrl"\n      [errorMessage]="errorMessage"\n      [readonly]="readonly"/>\n    {{ctrl.getRawValue()}}\n  '}),baseArgs={options:["item1","item2","item3","item4"],label:"Label",type:"default",placeholder:"Ecrivez un mot clé",errorMessage:"Error Message",ctrl:new fesm2022_forms.NI(""),readonly:!1},Base=Template.bind({});Base.args={...baseArgs},Base.parameters=(0,get_figma_params_utils.V)("31170-4238");const BaseFilled=Template.bind({});BaseFilled.args={...baseArgs,ctrl:new fesm2022_forms.NI("item1")},BaseFilled.parameters=(0,get_figma_params_utils.V)("31170-4250");const BaseError=Template.bind({});BaseError.args={...baseArgs,ctrl:new fesm2022_forms.NI("",[fesm2022_forms.kI.required])},BaseError.parameters=(0,get_figma_params_utils.V)("31170-4574");const BaseReadonly=Template.bind({});BaseReadonly.args={...baseArgs,readonly:!0,ctrl:new fesm2022_forms.NI("item1")},BaseReadonly.parameters=(0,get_figma_params_utils.V)("31170-4592");const BaseDisabled=Template.bind({});BaseDisabled.args={...baseArgs,ctrl:new fesm2022_forms.NI({value:"",disabled:!0})},BaseDisabled.parameters=(0,get_figma_params_utils.V)("31170-4609");const Chips=Template.bind({});Chips.args={...baseArgs,type:"chips",ctrl:new fesm2022_forms.NI([])},Chips.parameters=(0,get_figma_params_utils.V)("31160-2200");const ChipsFilled=Template.bind({});ChipsFilled.args={...baseArgs,type:"chips",ctrl:new fesm2022_forms.NI(["item0"])},ChipsFilled.parameters=(0,get_figma_params_utils.V)("31160-2201");const ChipsError=Template.bind({});ChipsError.args={...baseArgs,type:"chips",ctrl:new fesm2022_forms.NI(["item0"],[fesm2022_forms.kI.required,validate])},ChipsError.parameters=(0,get_figma_params_utils.V)("31160-2204");const ChipsReadonly=Template.bind({});ChipsReadonly.args={...baseArgs,type:"chips",readonly:!0,ctrl:new fesm2022_forms.NI(["item0"])},ChipsReadonly.parameters=(0,get_figma_params_utils.V)("31160-2206");const ChipsDisabled=Template.bind({});ChipsDisabled.args={...baseArgs,type:"chips",ctrl:new fesm2022_forms.NI({value:[],disabled:!0})},ChipsDisabled.parameters=(0,get_figma_params_utils.V)("31160-2203");const TemplateWithProps=args=>({component:RcaAutocompleteComponent,props:args,template:'\n    <rca-autocomplete\n    [type]="type"\n    [label]="label"\n    [placeholder]="placeholder"\n    [options]="optionsWithProps"\n    [formControl]="ctrl"\n    [propValue]="\'id\'"\n    [propLabel]="\'label\'"\n    [readonly]="readonly"\n    />\n    {{ctrl.getRawValue().label}}\n  '}),BaseWithProps=TemplateWithProps.bind({}),optionsWithProps=[{id:"id_item1",label:"item1"},{id:"id_item2",label:"item2"},{id:"id_item3",label:"item3"}];BaseWithProps.args={...baseArgs,options:void 0,optionsWithProps,ctrl:new fesm2022_forms.NI({id:"id_item0",label:"item0"})};const ChipsWithProps=TemplateWithProps.bind({});ChipsWithProps.args={...baseArgs,options:void 0,optionsWithProps,type:"chips",ctrl:new fesm2022_forms.NI([{id:"id_item0",label:"item0"}])}}}]);