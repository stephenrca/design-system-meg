"use strict";(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[3556],{"./libs/rca-design-system-library/src/lib/stylesheets/legacy/doc/table-flex-demo/table-flex-demo.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TableFlexDemoComptesComptables:()=>TableFlexDemoComptesComptables,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Z-Legacy/Doc/Table-Flex",decorators:[(0,__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs").moduleMetadata)({imports:[]})]},TableFlexDemoComptesComptables=(()=>({template:'\n  <div class="table-flex table-input-lines">\n      <div class="table-row table-header">\n        <div class="table-row-item max-width-col">&nbsp;</div>\n        <div class="table-row-item u-flex-grow1">\n          Compte comptable <sup class="required-asterisque">*</sup>\n        </div>\n        <div class="table-row-item u-flex-grow2">\n          Libellé <sup class="required-asterisque">*</sup>\n        </div>\n        <div class="table-row-item u-flex-grow1">\n          Nature <sup class="required-asterisque">*</sup>\n        </div>\n        <div class="table-row-item max-width-col">&nbsp;</div>\n      </div>\n      <div class="tableLineContent">\n        <ul class="list-none margin-bottom-0 no-border rca-legacy">\n          <li class="rca-legacy">\n            <div class="table-row highlighted-table-line">\n              <div class="table-row-item justify-center dragContent cursor-move">\n                <div class="drag rca-icon-drag-drop" title="Déplacer la ligne"></div>\n              </div>\n              <div class="table-row-item u-flex-grow1" data-header="Compte comptable">\n                <div class="col-width inline-flex">\n                  <div>\n                    <div class="input-with-icon-inside form-element-material-container">\n                      <label for="compte-comptable-0" class="sr-only rca-legacy">Compte comptable</label>\n                      <input id="compte-comptable-0"  class="rca-legacy" type="text" name="compteComptable" title="7060000" maxlength="15" required=""  placeholder=" " readonly="readonly" style="">\n                      <div class="container--icon-and-button-in-form-element">\n                        <button type="button"  class="rca-legacy ghost icon-only rca-icon-interface-menu" title="Ajouter compte comptable" aria-label="Ajouter compte comptable" ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item u-flex-grow2" data-header="Libellé">\n                <div class="col-width inline-flex">\n                  <div class="width-100">\n                    <label for="vente-libelle-0" class="sr-only rca-legacy">Libellé</label>\n                    <input ng-model="vente.libelle" type="text" name="libelle" title="Prestations de services" maxlength="255" required="" class="rca-legacy" id="vente-libelle-0" placeholder=" ">\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item u-flex-grow1" data-header="Taux de TVA">\n                <div class="col-width inline-flex">\n                  <div class="width-100">\n                    <span class="sr-only rca-legacy">Taux de TVA</span>\n                    <select-tva id="taux-tva-classification-0" label="Taux de TVA" sr-only="true" tvas="$ctrl.listeTvaCollectees"  name="tva" rca-stop-event="touchend">\n                      <div class="form-element-material-container">\n                        <select id="select-tva-64" class="rca-legacy"  ng-class="{\'with-label\': !$ctrl.srOnly}" ng-change="$ctrl.onChange({$event:{idTva:$ctrl.idTva}})" required="required">\n                          <option label="20% - Normale" value="number:4586999" selected="selected">20% - Normale</option>\n                          <option label="10% - Réduite" value="number:4586997">10% - Réduite</option>\n                          <option label="5.5% - Réduite" value="number:4586995">5.5% - Réduite</option>\n                          <option label="7% - Réduite" value="number:4586993">7% - Réduite</option>\n                          <option label="0% - Exonérée" value="number:4586991">0% - Exonérée</option>\n                          <option label="8.5% - Réduite" value="number:4586989">8.5% - Réduite</option>\n                        </select>\n                        <label class="rca-legacy sr-only" for="select-tva-64">Taux de TVA</label>\n                      </div>\n                      </select-tva>\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item justify-center medium-justify-end max-width-col">\n                <button type="button" class="rca-icon rca-icon-trash icon-only rca-legacy ghost" title="Supprimer">\n                  <span class="sr-only">Supprimer</span>\n                </button>\n              </div>\n            </div>\n          </li>\n           <li class="rca-legacy">\n            <div class="table-row highlighted-table-line">\n              <div class="table-row-item justify-center dragContent cursor-move">\n                <div class="drag rca-icon-drag-drop" title="Déplacer la ligne"></div>\n              </div>\n              <div class="table-row-item u-flex-grow1" data-header="Compte comptable">\n                <div class="col-width inline-flex">\n                  <div>\n                    <div class="input-with-icon-inside form-element-material-container">\n                      <label for="compte-comptable-0" class="sr-only rca-legacy">Compte comptable</label>\n                      <input id="compte-comptable-0"  class="rca-legacy" type="text" name="compteComptable" title="7060000" maxlength="15" required=""  placeholder=" " readonly="readonly" style="">\n                      <div class="container--icon-and-button-in-form-element">\n                        <button type="button"  class="rca-legacy ghost icon-only rca-icon-interface-menu" title="Ajouter compte comptable" aria-label="Ajouter compte comptable" ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item u-flex-grow2" data-header="Libellé">\n                <div class="col-width inline-flex">\n                  <div class="width-100">\n                    <label for="vente-libelle-0" class="sr-only rca-legacy">Libellé</label>\n                    <input ng-model="vente.libelle" type="text" name="libelle" title="Prestations de services" maxlength="255" required="" class="rca-legacy" id="vente-libelle-0" placeholder=" ">\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item u-flex-grow1" data-header="Taux de TVA">\n                <div class="col-width inline-flex">\n                  <div class="width-100">\n                    <span class="sr-only rca-legacy">Taux de TVA</span>\n                    <select-tva id="taux-tva-classification-0" label="Taux de TVA" sr-only="true" tvas="$ctrl.listeTvaCollectees"  name="tva" rca-stop-event="touchend">\n                      <div class="form-element-material-container">\n                        <select id="select-tva-64" class="rca-legacy"  ng-class="{\'with-label\': !$ctrl.srOnly}" ng-change="$ctrl.onChange({$event:{idTva:$ctrl.idTva}})" required="required">\n                          <option label="20% - Normale" value="number:4586999" selected="selected">20% - Normale</option>\n                          <option label="10% - Réduite" value="number:4586997">10% - Réduite</option>\n                          <option label="5.5% - Réduite" value="number:4586995">5.5% - Réduite</option>\n                          <option label="7% - Réduite" value="number:4586993">7% - Réduite</option>\n                          <option label="0% - Exonérée" value="number:4586991">0% - Exonérée</option>\n                          <option label="8.5% - Réduite" value="number:4586989">8.5% - Réduite</option>\n                        </select>\n                        <label class="rca-legacy sr-only" for="select-tva-64">Taux de TVA</label>\n                      </div>\n                      </select-tva>\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item justify-center medium-justify-end max-width-col">\n                <button type="button" class="rca-icon rca-icon-trash icon-only rca-legacy ghost" title="Supprimer">\n                  <span class="sr-only">Supprimer</span>\n                </button>\n              </div>\n            </div>\n          </li>\n           <li class="rca-legacy">\n            <div class="table-row highlighted-table-line">\n              <div class="table-row-item justify-center dragContent cursor-move">\n                <div class="drag rca-icon-drag-drop" title="Déplacer la ligne"></div>\n              </div>\n              <div class="table-row-item u-flex-grow1" data-header="Compte comptable">\n                <div class="col-width inline-flex">\n                  <div>\n                    <div class="input-with-icon-inside form-element-material-container">\n                      <label for="compte-comptable-0" class="sr-only rca-legacy">Compte comptable</label>\n                      <input id="compte-comptable-0"  class="rca-legacy" type="text" name="compteComptable" title="7060000" maxlength="15" required=""  placeholder=" " readonly="readonly" style="">\n                      <div class="container--icon-and-button-in-form-element">\n                        <button type="button"  class="rca-legacy ghost icon-only rca-icon-interface-menu" title="Ajouter compte comptable" aria-label="Ajouter compte comptable" ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item u-flex-grow2" data-header="Libellé">\n                <div class="col-width inline-flex">\n                  <div class="width-100">\n                    <label for="vente-libelle-0" class="sr-only rca-legacy">Libellé</label>\n                    <input ng-model="vente.libelle" type="text" name="libelle" title="Prestations de services" maxlength="255" required="" class="rca-legacy" id="vente-libelle-0" placeholder=" ">\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item u-flex-grow1" data-header="Taux de TVA">\n                <div class="col-width inline-flex">\n                  <div class="width-100">\n                    <span class="sr-only rca-legacy">Taux de TVA</span>\n                    <select-tva id="taux-tva-classification-0" label="Taux de TVA" sr-only="true" tvas="$ctrl.listeTvaCollectees"  name="tva" rca-stop-event="touchend">\n                      <div class="form-element-material-container">\n                        <select id="select-tva-64" class="rca-legacy"  ng-class="{\'with-label\': !$ctrl.srOnly}" ng-change="$ctrl.onChange({$event:{idTva:$ctrl.idTva}})" required="required">\n                          <option label="20% - Normale" value="number:4586999" selected="selected">20% - Normale</option>\n                          <option label="10% - Réduite" value="number:4586997">10% - Réduite</option>\n                          <option label="5.5% - Réduite" value="number:4586995">5.5% - Réduite</option>\n                          <option label="7% - Réduite" value="number:4586993">7% - Réduite</option>\n                          <option label="0% - Exonérée" value="number:4586991">0% - Exonérée</option>\n                          <option label="8.5% - Réduite" value="number:4586989">8.5% - Réduite</option>\n                        </select>\n                        <label class="rca-legacy sr-only" for="select-tva-64">Taux de TVA</label>\n                      </div>\n                      </select-tva>\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item justify-center medium-justify-end max-width-col">\n                <button type="button" class="rca-icon rca-icon-trash icon-only rca-legacy ghost" title="Supprimer">\n                  <span class="sr-only">Supprimer</span>\n                </button>\n              </div>\n            </div>\n          </li>\n           <li class="rca-legacy">\n            <div class="table-row highlighted-table-line">\n              <div class="table-row-item justify-center dragContent cursor-move">\n                <div class="drag rca-icon-drag-drop" title="Déplacer la ligne"></div>\n              </div>\n              <div class="table-row-item u-flex-grow1" data-header="Compte comptable">\n                <div class="col-width inline-flex">\n                  <div>\n                    <div class="input-with-icon-inside form-element-material-container">\n                      <label for="compte-comptable-0" class="sr-only rca-legacy">Compte comptable</label>\n                      <input id="compte-comptable-0"  class="rca-legacy" type="text" name="compteComptable" title="7060000" maxlength="15" required=""  placeholder=" " readonly="readonly" style="">\n                      <div class="container--icon-and-button-in-form-element">\n                        <button type="button"  class="rca-legacy ghost icon-only rca-icon-interface-menu" title="Ajouter compte comptable" aria-label="Ajouter compte comptable" ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item u-flex-grow2" data-header="Libellé">\n                <div class="col-width inline-flex">\n                  <div class="width-100">\n                    <label for="vente-libelle-0" class="sr-only rca-legacy">Libellé</label>\n                    <input ng-model="vente.libelle" type="text" name="libelle" title="Prestations de services" maxlength="255" required="" class="rca-legacy" id="vente-libelle-0" placeholder=" ">\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item u-flex-grow1" data-header="Taux de TVA">\n                <div class="col-width inline-flex">\n                  <div class="width-100">\n                    <span class="sr-only rca-legacy">Taux de TVA</span>\n                    <select-tva id="taux-tva-classification-0" label="Taux de TVA" sr-only="true" tvas="$ctrl.listeTvaCollectees"  name="tva" rca-stop-event="touchend">\n                      <div class="form-element-material-container">\n                        <select id="select-tva-64" class="rca-legacy"  ng-class="{\'with-label\': !$ctrl.srOnly}" ng-change="$ctrl.onChange({$event:{idTva:$ctrl.idTva}})" required="required">\n                          <option label="20% - Normale" value="number:4586999" selected="selected">20% - Normale</option>\n                          <option label="10% - Réduite" value="number:4586997">10% - Réduite</option>\n                          <option label="5.5% - Réduite" value="number:4586995">5.5% - Réduite</option>\n                          <option label="7% - Réduite" value="number:4586993">7% - Réduite</option>\n                          <option label="0% - Exonérée" value="number:4586991">0% - Exonérée</option>\n                          <option label="8.5% - Réduite" value="number:4586989">8.5% - Réduite</option>\n                        </select>\n                        <label class="rca-legacy sr-only" for="select-tva-64">Taux de TVA</label>\n                      </div>\n                      </select-tva>\n                  </div>\n                </div>\n              </div>\n              <div class="table-row-item justify-center medium-justify-end max-width-col">\n                <button type="button" class="rca-icon rca-icon-trash icon-only rca-legacy ghost" title="Supprimer">\n                  <span class="sr-only">Supprimer</span>\n                </button>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  '})).bind({})},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);