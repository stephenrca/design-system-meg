/*! For license information please see src-lib-stylesheets-legacy-doc-icon-doc-demo-icon-demo-mdx.e4a22884.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[1085,1564],{"./libs/rca-design-system-library/src/lib/stylesheets/legacy/doc/icon-doc-demo/icon-demo.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,TailleIcones:()=>TailleIcones,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Z-Legacy/Doc/Icones",decorators:[(0,__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs").moduleMetadata)({imports:[]})]},Demo=(args=>({template:'\n        <h3 class="h3-like margin-bottom-s">Icons</h3>\n        <ul class="gridlayout-4 has-layout-gutter-l margin-bottom-xl no-bullet">\n            <li *ngFor="let rcaIcon of RcaIconsList">\n                <div class="display-flex flex-justify-content-center padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color">\n                    <span class="{{ rcaIcon }}"></span>\n                </div>\n                <p class="body-2-font text-align-center">{{ rcaIcon }}</p>\n            </li>\n        </ul>\n\n        <h3 class="h3-like margin-bottom-s">Logos</h3>\n        <ul class="gridlayout-4 has-layout-gutter-l margin-bottom-xl no-bullet">\n            <li *ngFor="let rcaIconApp of RcaIconsAppList">\n                <div class="display-flex flex-justify-content-center padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color">\n                     <span class="{{ rcaIconApp }}"></span>\n                </div>\n                <p class="body-font text-align-center">{{ rcaIconApp }}</p>\n            </li>\n        </ul>\n\n        <h3 class="h3-like margin-bottom-s">Logos Gamme Conseil</h3>\n         <ul class="gridlayout-4 has-layout-gutter-l no-bullet">\n            <li *ngFor="let logoGammeConseil of LogosGammeConseilList" class="icon-container">\n                <div class="display-flex flex-justify-content-center padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color">\n                     <span class="{{ logoGammeConseil }}"></span>\n                </div>\n                <p class="body-2-font text-align-center">{{ logoGammeConseil }}</p>\n            </li>\n        </ul>\n    ',props:args})).bind({});Demo.args={RcaIconsList:["rca-icon-actu","rca-icon-add","rca-icon-add-folder","rca-icon-add-list","rca-icon-add-user","rca-icon-affpiece","rca-icon-alarm","rca-icon-alert","rca-icon-approve-file","rca-icon-arrow-left","rca-icon-arrow-left-double","rca-icon-arrow-right","rca-icon-arrow-right-double","rca-icon-attach","rca-icon-attach-done","rca-icon-attach-lost","rca-icon-avoid-reload","rca-icon-bank","rca-icon-bill","rca-icon-block","rca-icon-broken-chain","rca-icon-business","rca-icon-cabinet","rca-icon-caisse","rca-icon-calculation","rca-icon-calendar","rca-icon-cancel","rca-icon-catalog","rca-icon-chain","rca-icon-chart","rca-icon-chat","rca-icon-check","rca-icon-check-circle","rca-icon-close","rca-icon-cloud-upload","rca-icon-contact","rca-icon-credit-card","rca-icon-dashboard","rca-icon-dematbox","rca-icon-document","rca-icon-documents","rca-icon-down-arrow","rca-icon-down-arrow-circle","rca-icon-down-arrow-stat","rca-icon-drag-drop","rca-icon-duplicate","rca-icon-edit","rca-icon-edit-file","rca-icon-email","rca-icon-equal","rca-icon-euro","rca-icon-excel","rca-icon-expand-less","rca-icon-expand-more","rca-icon-export","rca-icon-export-doc","rca-icon-factuneo","rca-icon-filter","rca-icon-folder","rca-icon-fr","rca-icon-go-to","rca-icon-group","rca-icon-help","rca-icon-history","rca-icon-home","rca-icon-hourglass","rca-icon-image","rca-icon-import","rca-icon-info","rca-icon-interface-menu","rca-icon-label","rca-icon-layer-print","rca-icon-less","rca-icon-less-simple","rca-icon-licence-free","rca-icon-licence-premium","rca-icon-list","rca-icon-loader","rca-icon-location","rca-icon-lock-folder","rca-icon-lock-key","rca-icon-logout","rca-icon-menu","rca-icon-mobile","rca-icon-multi-actions","rca-icon-multiple-payment","rca-icon-ndf","rca-icon-neutral-arrow","rca-icon-new-document","rca-icon-new-file","rca-icon-no-preview","rca-icon-onboarding","rca-icon-open-window","rca-icon-pause","rca-icon-pdf","rca-icon-pdp","rca-icon-photo","rca-icon-preview","rca-icon-printer","rca-icon-purchase","rca-icon-reload","rca-icon-remove-document","rca-icon-resize","rca-icon-save","rca-icon-scissors","rca-icon-search","rca-icon-setting","rca-icon-shift","rca-icon-shipping","rca-icon-supervision","rca-icon-switch","rca-icon-time-off","rca-icon-total","rca-icon-trash","rca-icon-undo","rca-icon-unlock-key","rca-icon-up-arrow","rca-icon-up-arrow-stat","rca-icon-upload","rca-icon-user","rca-icon-vente","rca-icon-warning","rca-icon-waving-hand","rca-icon-word"],RcaIconsAppList:["rca-icon-app-achat","rca-icon-app-banque","rca-icon-app-caisse","rca-icon-app-dematbox","rca-icon-app-export","rca-icon-app-facturation","rca-icon-app-note-de-frais","rca-icon-app-progbat","rca-icon-app-supervision","rca-icon-app-tableau-de-bord","rca-icon-app-tresorerie","rca-icon-app-tva","rca-icon-app-vente","rca-icon-app-vente-importee"],LogosGammeConseilList:["rca-icon-logo-analyse-cout-revient","rca-icon-logo-bilan-image","rca-icon-logo-choix-financement","rca-icon-logo-devis-flash","rca-icon-logo-e-creation","rca-icon-logo-evaluation-flash","rca-icon-logo-gestion-relation-client","rca-icon-logo-indicateurs-flash","rca-icon-logo-meg","rca-icon-logo-meg-bnc","rca-icon-logo-meg-premium","rca-icon-logo-prevision-flash","rca-icon-logo-ratios-sectoriels","rca-icon-logo-simul-auto","rca-icon-logo-simul-immo","rca-icon-logo-suivi-com","rca-icon-logo-tableau-de-bord-flash"]};const TailleIcones=(()=>({template:'\n     <ul class="gridlayout has-layout-gutter margin-bottom-xl no-bullet">\n      <li>\n        <div class="display-flex flex-justify-content-center padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color">\n          <span class="rca-icon-actu" aria-hidden="true"></span>\n        </div>\n        <p class="body-font text-align-center">.rca-icon-actu</p>\n      </li>\n      <li>\n        <div class="display-flex flex-justify-content-center padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color">\n          <span class="rca-icon-actu size-l" aria-hidden="true"></span>\n        </div>\n        <p class="body-font text-align-center">.rca-icon-actu .size-l</p>\n      </li>\n      <li>\n        <div class="display-flex flex-justify-content-center padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color">\n          <span\n            class="rca-icon-app-facturation-beta size-l"\n            aria-hidden="true"\n          ></span>\n        </div>\n        <p class="body-font text-align-center">.rca-icon-app-facturation-beta .size-l</p>\n      </li>\n      <li>\n        <div class="display-flex flex-justify-content-center padding-top-l padding-bottom-l border-all-radius-small secondary-200-background-color">\n          <span\n            class="rca-icon-app-facturation-beta size-l warning-500-text-color"\n            aria-hidden="true"\n          ></span>\n        </div>\n        <p class="body-font text-align-center">.rca-icon-app-facturation-beta .size-l .warning-500-text-color</p>\n      </li>\n    </ul>\n\n  '})).bind({})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,ZX:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/rca-design-system-library/src/lib/stylesheets/legacy/doc/icon-doc-demo/icon-demo.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_icon_demo_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/rca-design-system-library/src/lib/stylesheets/legacy/doc/icon-doc-demo/icon-demo.stories.ts"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre"},(0,_home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_icon_demo_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Dx,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"... côté legacy"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details",{className:"sb-accordion",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("summary",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"️-accessibilité",children:"♿️ Accessibilité"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"si-licône-est-seule-et-quelle-donne-une-info-",children:"Si l'icône est seule et qu'elle donne une info :"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["ajouter ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'un title="mon truc" aria-hidden="true"'})," (ou un tooltip, voir avec le design)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["en dessous, ajouter un ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'<span class="sr-only">mon truc</span>'})]}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'Exemple : page "Liste des cabinets / sites" sur Portail : les licences sont représentées par l\'icône\ncorrespondante :'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<li>\n    <span title="Caisse" class="rca-icon-app-caisse" aria-hidden="true"></span>\n    <span class="sr-only">Caisse</span>\n</li>\n'})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"si-au-contraire-licône-est-juste-là-en-décoration-mais-quelle-napporte-pas-dinformation-aria-hiddentrue-",children:["Si, au contraire, l'icône est juste là en décoration mais qu'elle n'apporte pas d'information, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'aria-hidden="true"'})," :"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<span class="rca-icon-actu" aria-hidden="true"></span>\n'})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Ca peut être le cas avec les boutons qui sont en icône + texte, où l'icône ne donne pas + d'informations que le texte en lui-même."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"comment-les-utiliser-",children:"Comment les utiliser ?"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Les icônes sont par défaut sur le ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:":before"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Pour insérer une icône, utilisez un ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"span"})," auquel vous ajouterez la class de l’icône.\nPour l'ajouter en étant sûr de son ♿️ ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"accessibilité"}),", voir ci-dessus 😉"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Par défaut, l'icône est en 20x20. Si elle doit être en 24x24, il faut lui ajouter la class ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".size-l"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Si l'icône est seule et doit avoir par exemple la couleur error, on utilisera les class de couleurs de texte."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_icon_demo_stories__WEBPACK_IMPORTED_MODULE_2__.TailleIcones}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"liste-des-icônes",children:"Liste des icônes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_icon_demo_stories__WEBPACK_IMPORTED_MODULE_2__.Demo})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);