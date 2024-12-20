/*! For license information please see src-lib-docs-accessibilite-stories-mdx.284a762d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_rca_design_system_library=self.webpackChunk_rca_design_system_library||[]).push([[8470],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/rca-design-system-library/src/lib/docs/accessibilite.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",strong:"strong",code:"code",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,_home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Accessibilite/Accessibilité"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"introduction",children:"Introduction"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"L'accessibilité regroupe un ensemble de bonnes pratiques pour rendre l'application accessible à tous.\nCe site propose un liste de ces bonnes pratiques : https://design-accessible.fr/checklist"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Aurélie a également fait une présentation qui précise les principales pratiques à appliquer chez RCA : https://docs.google.com/presentation/d/1LNZZ-6WVc0WEnB77nwEDGxxDh7XbaAi6beuXJYFs9Mc/edit"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"directives-générales",children:"Directives générales"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"directives-de-couleur",children:"Directives de couleur"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"La couleur et le contraste peuvent être utilisés pour aider les utilisateurs à voir et à interpréter le contenu de l'application, à interagir avec les bons éléments et à comprendre les actions."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Nous suivons deux directives strictes pour l'accessibilité des couleurs :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Ne jamais utiliser la couleur comme seul moyen de fournir des informations ou de demander une action\nLes combinaisons de texte et leurs couleurs d'arrière-plan ne doivent pas tomber en dessous du rapport ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"seuil recommandé par les WCAG"})," de ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"4,5: 1 pour le texte standard"})," ou petit et ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"3: 1 pour le texte plus grand"})," (à 14 px gras / 18 px régulier et plus) ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"et graphiques"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"texte-alternatif",children:"Texte alternatif"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Toutes les images, icônes et SVG doivent avoir une alternative textuelle qui décrit le contenu. Sauf s'ils ne sont pas porteur de sens.\nExemple : ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'<img src="url" alt="texte descriptif de l\'image">'})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"prise-en-charge-du-lecteur-décran",children:"Prise en charge du lecteur d'écran"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Bien penser la hiérarchie visuelle (ex : structure HTML descendante)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"S'assurer de l'ordre dans lequel les éléments reçoivent le focus"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"S'assurer que l'ordre de tabulation dans les formulaires est sensible et clair"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Associer un label à l'élément de formulaire, même s'il n'apparaît pas visuellement (cf partie code)"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"les-cibles-tactiles",children:"Les cibles tactiles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Pour la plupart des plates-formes, il faut créer des cibles tactiles d'au moins ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"48 x 48 px"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Dans la plupart des cas, les cibles tactiles séparées par 8px d'espace ou plus favorisent une densité d'informations et une facilité d'utilisation équilibrées."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ordre-visuel",children:"Ordre visuel"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Dans le cas de formulaires sur 2 colonnes, pensez à la tabulation qui doit fonctionner de gauche à droite en priorité."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Ainsi ce code HTML est à éviter (car la navigation par tabulation va faire 1 => 3 => 2 => 4)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<div class="gridlayout-2">\n    <div class="colonne-gauche">\n        <div>\n            champ 1\n        </div>\n        <div>\n            champ 3\n        </div>\n    </div>\n    <div class="colonne-droite">\n        <div>\n            champ 2\n        </div>\n        <div>\n            champ 4\n        </div>\n    </div>\n</div>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Il faut privilégier une navigation tab dans l'ordre d'affichage :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<div class="gridlayout-2">\n    <div>\n        champ 1\n    </div>\n    <div>\n        champ 2\n    </div>\n    <div>\n        champ 3\n    </div>\n    <div>\n        champ 4\n    </div>\n</div>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ressources-additionnelles",children:"Ressources additionnelles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Une excellente ressource pour vous aider à en savoir plus sur l'accessibilité du Web est le ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Web Content Accessibility Guidelines (WCAG) 2.0"}),". Cela vous aide à offrir la meilleure et la plus simple expérience possible à la communauté des personnes handicapées."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Visitez le site ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.essentialaccessibility.com/blog/web-content-accessibility-guidelines-wcag/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Web Accessibility Initiative"})," du World Wide Web Consortium (W3C) pour en savoir plus."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Le site sur l'",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://material.io/design/usability/accessibility.html#understanding-accessibility",target:"_blank",rel:"nofollow noopener noreferrer",children:"accessibilité de Material Design"})," est également une bonne source d'information."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Les ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/alsacreations/guidelines/blob/master/Guidelines-Accessibilite.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"bonnes pratiques et recommandations d'accessibilité"})," de l'agence Alsacréation."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Outils pratiques :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"WAVE Evaluation Tool (pour les tests WCAG)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh",target:"_blank",rel:"nofollow noopener noreferrer",children:"Extension Chrome"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://addons.mozilla.org/fr/firefox/addon/wave-accessibility-to",target:"_blank",rel:"nofollow noopener noreferrer",children:"Extension Firefox"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Web Developer Toolbar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=fr",target:"_blank",rel:"nofollow noopener noreferrer",children:"Extension Chrome"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://addons.mozilla.org/fr/firefox/addon/web-developer/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Extension Firefox"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"classe-css-pour-laccessibilité",children:"Classe CSS pour l'accessibilité"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["La classe ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".sr-only"})," (screen reader only) permet de n'afficher un élément que pour le cas du lecteur d'écran.\nExemple d'utilisation :"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<label for="libelle-email" class="sr-only">Votre identifiant mail : renseigner votre identifiant (exemple : prenom.nom) et il sera automatiquement complété par "@nimporte.ou.fr"</label>\n<input type="text" id="libelle-email">\n<span>@nimporte.ou.fr</span>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"composants",children:"Composants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Les points d'accessibilité propres à un composant sont décrits directement sur la page du composant."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Pour les composants qui n'ont pas de page dédiée :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h2,{id:"les-titres-h1---h7",children:["Les titres (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<h1>"})," - ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<h7>"}),")"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Les titres doivent suivre la hiérarchie décrite ci-dessous pour pouvoir être correctement interprétés par les lecteurs d'écran. Le niveau doit refléter l'importance du titre, comme dans un sommaire, et ne doit pas être choisi pour son style."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<h1>"})," est réservé pour le titre de l'application.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<h2>"})," servira de titre de page ou de titre de popup.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<h3>"})," sera le premier niveau des titres/sections dans la page, h4 pour les sous-titres, ..."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Si le niveau souhaité ne correspond pas graphiquement, il ne faut pas changer le niveau du titre, mais lui ajouter une classe ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"h3-like"})," pour lui donner l'apparence souhaitée tout en gardant le niveau de titre correct."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"La Web Developer Toolbar  permet de vérifier la hiérarchie des titres d'une page, dans l'onglet Informations, View Document Outline.\nhttps://chrispederick.com/work/web-developer/"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"les-boutons-et-les-liens",children:"Les boutons et les liens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"si-laction-amène-lutilisateur-vers-une-autre-page",children:"Si l'action amène l'utilisateur vers une autre page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Il faut utiliser la balise ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<a>"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"si-laction-reste-sur-la-même-page",children:"Si l'action reste sur la même page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Il faut utiliser la balise ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<button>"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Si l'on veut styliser un lien en bouton, ou un bouton en lien, utiliser les classes décrites sur la page ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://storybook.int.rcacloud.it/?path=/story/legacy-doc-button--primary",target:"_blank",rel:"nofollow noopener noreferrer",children:"boutons legacy"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"les-groupes-de-champs-avec-fieldset",children:"Les groupes de champs avec Fieldset"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Dans le cas ou plusieurs champs d'un formulaire font partie d'un groupe commun (boutons radio ou checkbox), ou qu'ils sont liés à un même sujet (input, textarea), il faut créer un fieldset qui va les regrouper."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Exemple de fieldset pour un nom/prénom (avec utilisation de ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sr-only"})," pour la légende dans ce cas) :"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form>\n   <fieldset>\n     <legend class="sr-only">Identité</legend>\n     <div>\n       <label for="nom">Nom</label>\n       <input type="text" id="nom">\n     </div>\n     <div>\n       <label for="prenom">Prénom</label>\n       <input type="text" id="prenom">\n     </div>\n  </fieldset>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Pour un groupe de boutons radio ou checkbox on laissera la légende visible :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'   <fieldset>\n     <legend class="body-1-font">Avez-vous une carte bancaire ?</legend>\n     <div class="gridlayout">\n       <div>\n         <input type="radio" id="ouiCB">\n         <label for="ouiCB">Oui</label>\n       </div>\n       <div>\n         <input type="radio" id="nonCB">\n         <label for="nonCB">Non</label>\n       </div>\n     </div>\n  </fieldset>\n'})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Accessibilite/Accessibilité",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_stclo_workspace_rca_design_system_library_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);