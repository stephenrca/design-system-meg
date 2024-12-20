"use strict";(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[3407],{"./libs/rca-design-system-library/src/lib/docs/doc-components/margin-padding-demo/margin-padding-demo.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExemplesMargin:()=>ExemplesMargin,ListeDesClass:()=>ListeDesClass,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Styles/Margin-padding",decorators:[(0,__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs").moduleMetadata)({imports:[]})]},ExemplesMargin=(()=>({styles:["\n    .example-box {\n        height: 10rem;\n        margin: var(--spacing-m);\n        align-content: stretch;\n        align-items: stretch;\n    }\n    \n    .example-box > div {\n        width: 100%;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .margin-and-padding-example {\n        background-image: linear-gradient(to bottom, rgba(27, 156, 178, 1) 0%, rgba(27, 156, 178, 1) 100%), linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);\n        background-clip: content-box, padding-box;\n    }\n  "],template:'\n  <div class="gridlayout-3 has-layout-gutter">\n    <div>\n      <div\n        class="example-box display-flex flex-align-items-center flex-justify-content-center primary-100-background-color"\n      >\n        <div class="margin-0 secondary-500-background-color display-flex body-1-font">\n          .margin-0\n        </div>\n      </div>\n    </div>\n    <div>\n      <div\n        class="example-box display-flex flex-align-items-center flex-justify-content-center primary-100-background-color"\n      >\n        <div class="margin-s secondary-500-background-color display-flex body-1-font">\n          .margin-s\n        </div>\n      </div>\n    </div>\n    <div>\n      <div\n        class="example-box display-flex flex-align-items-center flex-justify-content-center primary-100-background-color"\n      >\n        <div class="margin-left-s secondary-500-background-color display-flex body-1-font">\n          .margin-left-s\n        </div>\n      </div>\n    </div>\n    <div>\n      <div\n        class="example-box display-flex flex-align-items-center flex-justify-content-center primary-100-background-color"\n      >\n        <div class="margin-right-s secondary-500-background-color display-flex body-1-font">\n          .margin-right-s\n        </div>\n      </div>\n    </div>\n    <div>\n      <div\n        class="example-box display-flex flex-align-items-center flex-justify-content-center primary-100-background-color"\n      >\n        <div class="margin-top-s secondary-500-background-color display-flex body-1-font">\n          .margin-top-s\n        </div>\n      </div>\n    </div>\n    <div>\n      <div\n        class="example-box display-flex flex-align-items-center flex-justify-content-center primary-100-background-color"\n      >\n        <div class="margin-bottom-s secondary-500-background-color display-flex body-1-font">\n          .margin-bottom-s\n        </div>\n      </div>\n    </div>\n    <div>\n      <div\n        class="example-box display-flex flex-align-items-center flex-justify-content-center primary-100-background-color"\n      >\n        <div\n          class="margin-xl margin-lg-s margin-md-l margin-sm-0 secondary-500-background-color display-flex body-1-font"\n        >\n          .margin-xl + .margin-lg-s + .margin-sm-0\n        </div>\n      </div>\n    </div>\n    <div>\n      <div\n        class="example-box display-flex flex-align-items-center flex-justify-content-center primary-100-background-color"\n      >\n        <div class="margin-xl padding-s secondary-500-background-color display-flex margin-and-padding-example">\n            <p class="display-block white-text-color body-1-font">.margin-l + .padding-s</p>\n        </div>\n      </div>\n    </div>\n  </div>'})).bind({}),ListeDesClass=(args=>({styles:["\n    .tableau-margin-padding {\n        border-spacing: 0;\n    }\n    \n    .tableau-margin-padding th,\n    .tableau-margin-padding td {\n        border-bottom: 1px solid var(--super-light-grey);\n        padding: var(--spacing-xxxs);\n        text-align: left;\n    }\n  "],template:'\n    <table class="tableau-margin-padding">\n        <caption class="sr-only">Liste des class</caption>\n        <thead>\n            <th></th>\n            <th scope="col">sans préfixe</th>\n            <th scope="col">lg (< 1024px)</th>\n            <th scope="col">md (<768px)</th>\n            <th scope="col">sm(<376px)</th>\n        </thead>\n        <tbody>\n            <tr *ngFor="let size of sizes">\n              <th scope="row">{{size.px}}<br />{{size.suffix}}</th>\n              <td>\n                <ul class="no-bullet margin-left-0">\n                  <li *ngFor="let side of sides">.margin{{side}}-{{size.suffix}}</li>\n                </ul>\n              </td>\n              <td>\n                <ul class="no-bullet">\n                  <li *ngFor="let side of sides">.margin{{side}}-lg-{{size.suffix}}</li>\n                </ul>\n              </td>\n              <td>\n                <ul class="no-bullet">\n                  <li *ngFor="let side of sides">.margin{{side}}-md-{{size.suffix}}</li>\n                </ul>\n              </td>\n              <td>\n                <ul class="no-bullet">\n                  <li *ngFor="let side of sides">.margin{{side}}-sm-{{size.suffix}}</li>\n                </ul>\n              </td>\n            </tr>\n        </tbody>\n    </table>',props:args})).bind({});class MarginPaddingExample{constructor(suffix,px=""){this.suffix=suffix,this.px=px}}ListeDesClass.args={sizes:[new MarginPaddingExample("0"),new MarginPaddingExample("xxxxs","4px"),new MarginPaddingExample("xxxs","6px"),new MarginPaddingExample("xxs","8px"),new MarginPaddingExample("xs","12px"),new MarginPaddingExample("s","16px"),new MarginPaddingExample("m","20px"),new MarginPaddingExample("l","24px"),new MarginPaddingExample("xl","32px"),new MarginPaddingExample("xxl","40px"),new MarginPaddingExample("xxxl","48px"),new MarginPaddingExample("xxxxl","64px"),new MarginPaddingExample("xxxxxl","80px")],sides:["","-top","-bottom","-left","-right"]}},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);