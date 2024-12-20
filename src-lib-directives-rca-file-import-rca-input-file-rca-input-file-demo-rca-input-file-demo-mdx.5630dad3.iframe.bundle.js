/*! For license information please see src-lib-directives-rca-file-import-rca-input-file-rca-input-file-demo-rca-input-file-demo-mdx.5630dad3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[7757,9929],{"./libs/rca-design-system-library/src/lib/directives/rca-file-import/rca-input-file/rca-input-file-demo/rca-input-file-demo.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defaut:()=>Defaut,Extension:()=>Extension,Mime:()=>Mime,Multiselection:()=>Multiselection,Size:()=>Size,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_storybook_utils_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/storybook-utils/src/index.ts"),_angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_common_http__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/rca-design-system-library/src/lib/icons/index.ts"),_components_rca_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/rca-design-system-library/src/lib/components/rca-button/index.ts"),_angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/material/fesm2022/tabs.mjs"),_rca_file_import_module__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/rca-design-system-library/src/lib/directives/rca-file-import/rca-file-import.module.ts"),_services_file_import_service__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/rca-design-system-library/src/lib/directives/rca-file-import/services/file-import.service.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Formulaire/Input/Files",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.JF,_icons__WEBPACK_IMPORTED_MODULE_2__.i,_components_rca_button__WEBPACK_IMPORTED_MODULE_3__.Nf,_angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.Nh,_rca_file_import_module__WEBPACK_IMPORTED_MODULE_4__.E],providers:[_services_file_import_service__WEBPACK_IMPORTED_MODULE_5__.l]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.provideAnimations)(),_storybook_utils_src__WEBPACK_IMPORTED_MODULE_1__.Le]})]},Defaut=(args=>(args.onFilesChange=result=>{args.defaultResult=result},args.printFiles=()=>args.defaultResult?.validFiles?[`Fichier sélectionné : ${args.defaultResult.validFiles.map((file=>file.name))}`]:["Aucun fichier sélectionné"],{template:'\n    <div class="demo-test-frame">\n      <button rca-button rcaInputFile id="input-file-default" (filesChange)="onFilesChange($event)">Importer</button>\n      <p>{{ printFiles() }}</p></div>',props:args})).bind({});Defaut.args;const Multiselection=(args=>(args.onFilesChange=result=>{args.defaultResult=result},args.printFiles=()=>args.defaultResult?.validFiles?[`Fichier sélectionné : ${args.defaultResult.validFiles.map((file=>file.name))}`]:["Aucun fichier sélectionné"],{template:'\n    <div class="demo-test-frame">\n      <button rca-button rcaInputFile id="input-file-multiselection" [rcaInputFileConfig]="multiselectionConfig" (filesChange)="onFilesChange($event)">Importer</button>\n      <p>{{ printFiles() }}</p></div>',props:args})).bind({});Multiselection.args={multiselectionConfig:{multiple:!0}};const Size=(args=>(args.onFilesChange=result=>{args.defaultResult=result},args.printFiles=()=>args.defaultResult?.validFiles?args.defaultResult.validFiles.length>0?[`Fichier sélectionné : ${args.defaultResult.validFiles.map((file=>file.name))}`]:[`Fichier en erreur : ${args.defaultResult.errors.fileSize.map((file=>file.name))}`]:["Aucun fichier sélectionné"],{template:'\n          <div class="demo-test-frame">\n      <button\n        rca-button\n        rcaInputFile\n        appearance="ghost"\n        id="input-file-maxsize"\n        [rcaInputFileConfig]="maxSizeConfig"\n        (filesChange)="onFilesChange($event)">\n        Importer\n      </button>\n      <p>\n        {{ printFiles() }}\n      </p>\n</div>',props:args})).bind({});Size.args={maxSizeConfig:{maxFileSizeMo:1}};const Extension=(args=>(args.onFilesChange=result=>{args.defaultResult=result},args.printFiles=()=>args.defaultResult?.validFiles?args.defaultResult.validFiles.length>0?[`Fichier sélectionné : ${args.defaultResult.validFiles.map((file=>file.name))}`]:[`Fichier en erreur : ${args.defaultResult.errors.type.map((file=>file.name))}`]:["Aucun fichier sélectionné"],{template:'\n    <div class="demo-test-frame">\n      <button\n        rca-button\n        rcaInputFile\n        icon="rca-icon-add"\n        format="icon-only"\n        id="input-file-extension"\n        [rcaInputFileConfig]="extensionConfig"\n        (filesChange)="onFilesChange($event)"\n      ></button>\n      <p>\n        {{ printFiles() }}\n              </p>\n    </div>',props:args})).bind({});Extension.args={extensionConfig:{allowedExtensions:[".jpg",".PNG"]}};const Mime=(args=>(args.onFilesChange=result=>{args.defaultResult=result},args.printFiles=()=>args.defaultResult?.validFiles?args.defaultResult.validFiles.length>0?[`Fichier sélectionné : ${args.defaultResult.validFiles.map((file=>file.name))}`]:[`Fichier en erreur : ${args.defaultResult.errors.type.map((file=>file.name))}`]:["Aucun fichier sélectionné"],{template:'\n    <div class="demo-test-frame">\n      <button\n        rca-button\n        rcaInputFile\n        icon="rca-icon-add"\n        appearance="outline"\n        color="secondary"\n        id="input-file-mime-1"\n        [rcaInputFileConfig]="mimeConfig"\n         (filesChange)="onFilesChange($event)"\n      >\n        Importer\n      </button>\n      <p>\n        {{ printFiles() }}\n        </p>\n    </div>',props:args})).bind({});Mime.args={mimeConfig:{multiple:!0,allowedMimeTypes:["image/jpeg","image/png"]}}},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,ZX:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/rca-design-system-library/src/lib/directives/rca-file-import/rca-input-file/rca-input-file-demo/rca-input-file-demo.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_rca_input_file_demo_component_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/rca-design-system-library/src/lib/directives/rca-file-import/rca-input-file/rca-input-file-demo/rca-input-file-demo.component.stories.ts"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",code:"code",ul:"ul",li:"li",h2:"h2"},(0,_home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{of:_rca_input_file_demo_component_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"points-importants-",children:"Points importants :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["La directive ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rcaInputFile"})," permet de gérer l'import de fichier via l'API HTML 5 en\ngardant un style de bouton ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rca-button"}),".\nLes options suivantes sont disponibles pour proposer un sélecteur personnalisé:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Sélection unique ou multiple (unique par défaut) ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"multiple?: boolean"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Validation de la taille de chaque fichier (optionnelle) ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"maxFileSizeMo?: number;"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Filtre et validation de l'extension de fichier (optionnel) ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"allowedExtensions?: string[];"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Filtre et validation du type mime de fichier (optionnel) ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"allowedMimeTypes?: string[];"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"À noter que les fichiers vides sont considérés comme étant en erreur."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["À la sélection de fichier, l'évènement ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fileChange"})," est envoyé avec un objet ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FileImportResult"})," séparant les fichiers valides et invalides."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"sélecteur-de-fichier-par-défaut",children:"Sélecteur de fichier par défaut"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_rca_input_file_demo_component_stories__WEBPACK_IMPORTED_MODULE_2__.Defaut}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"sélecteur-de-fichier-personnalisé-multisélection",children:"Sélecteur de fichier personnalisé (multisélection)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_rca_input_file_demo_component_stories__WEBPACK_IMPORTED_MODULE_2__.Multiselection}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"contrainte-de-taille-1mo-par-fichier",children:"Contrainte de taille (1Mo par fichier)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_rca_input_file_demo_component_stories__WEBPACK_IMPORTED_MODULE_2__.Size}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"contrainte-dextension-jpg-png",children:"Contrainte d'extension (JPG, PNG)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_rca_input_file_demo_component_stories__WEBPACK_IMPORTED_MODULE_2__.Extension}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"contrainte-de-type-mime-imagejpeg-imagepng",children:"Contrainte de type MIME (image/jpeg, image/png)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_rca_input_file_demo_component_stories__WEBPACK_IMPORTED_MODULE_2__.Mime})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);