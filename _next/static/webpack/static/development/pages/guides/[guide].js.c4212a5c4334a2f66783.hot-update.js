webpackHotUpdate("static/development/pages/guides/[guide].js",{

/***/ "./components/guide-body/index.js":
/*!****************************************!*\
  !*** ./components/guide-body/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_md_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/md-renderer */ "./components/md-renderer/index.js");
/* harmony import */ var components_share_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/share-page */ "./components/share-page/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/guide-body/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var GuideBody = function GuideBody(_ref) {
  var guide = _ref.guide;

  var GuideContent = __webpack_require__("./storage/guides sync recursive ^\\.\\/.*\\.md$")("./".concat(guide.fileName, ".md"))["default"];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__["GuideBodyWrap"], null, __jsx(components_md_renderer__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(GuideContent, null), guide.author && __jsx(components_share_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: guide.title,
    url: guide.url,
    twitterUsername: guide.author.twitter
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GuideBody);

/***/ }),

/***/ "./components/guide-body/style.js":
/*!****************************************!*\
  !*** ./components/guide-body/style.js ***!
  \****************************************/
/*! exports provided: GuideBodyWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideBodyWrap", function() { return GuideBodyWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var GuideBodyWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__GuideBodyWrap",
  componentId: "sc-1fx3kue-0"
})(["position:relative;max-width:750px;margin:0 auto;padding:0 20px;min-height:300px;p:first-child,h1,h2,h3,h4,h5,h6,img,blockquote{margin-top:0;}"]);

/***/ }),

/***/ "./components/helmet/index.js":
/*!************************************!*\
  !*** ./components/helmet/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var prepareTitle = function prepareTitle(givenTitle) {
  givenTitle = givenTitle || storage_site__WEBPACK_IMPORTED_MODULE_2__.title;
  return "".concat(givenTitle, " - ").concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.name);
};

var prepareDescription = function prepareDescription(givenDescription) {
  return givenDescription || storage_site__WEBPACK_IMPORTED_MODULE_2__.description;
};

var Helmet = function Helmet(props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    charSet: "UTF-8"
  }), __jsx("title", null, prepareTitle(props.title)), __jsx("meta", {
    name: "description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    name: "author",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.author
  }), __jsx("meta", {
    name: "keywords",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.keywords.join(',')
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"
  }), __jsx("link", {
    rel: "canonical",
    href: storage_site__WEBPACK_IMPORTED_MODULE_2__.url.web
  }), __jsx("meta", {
    httpEquiv: "Content-Language",
    content: "en"
  }), __jsx("meta", {
    property: "og:title",
    content: prepareTitle(props.title)
  }), __jsx("meta", {
    property: "og:description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    property: "og:image",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.logo
  }), __jsx("meta", {
    property: "og:url",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.url.web
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    property: "article:publisher",
    content: "https://facebook.com/".concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.facebook)
  }), __jsx("meta", {
    property: "og:site_name",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.name
  }), __jsx("meta", {
    property: "article:author",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.author
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@".concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.twitter)
  }), __jsx("meta", {
    name: "twitter:title",
    content: prepareTitle(props.title)
  }), __jsx("meta", {
    name: "twitter:description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    name: "twitter:image",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.logo
  }), __jsx("meta", {
    name: "twitter:image:alt",
    content: "roadmap.sh"
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/manifest/apple-touch-icon.png"
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#101010"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#848a9a"
  }), __jsx("link", {
    rel: "manifest",
    href: "/static/manifest/manifest.json"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/manifest/icon32.png"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/manifest/icon16.png"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/manifest/favicon.ico",
    type: "image/x-icon"
  }), __jsx("link", {
    rel: "icon",
    href: "/static/manifest/favicon.ico",
    type: "image/x-icon"
  }), "" && false);
};

/* harmony default export */ __webpack_exports__["default"] = (Helmet);

/***/ }),

/***/ "./components/md-renderer/index.js":
/*!*****************************************!*\
  !*** ./components/md-renderer/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _mdx_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdx-components */ "./components/md-renderer/mdx-components/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MdRenderer = function MdRenderer(props) {
  return __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
    components: _mdx_components__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (MdRenderer);

/***/ }),

/***/ "./components/md-renderer/mdx-components/a.js":
/*!****************************************************!*\
  !*** ./components/md-renderer/mdx-components/a.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "a__Link",
  componentId: "sc-15mb891-0"
})(["font-weight:600;"]);

var EnrichedLink = function EnrichedLink(props) {
  return __jsx(Link, {
    href: props.href,
    target: /^http(s)?:\/\//.test(props.href) ? '_blank' : '_self'
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (EnrichedLink);

/***/ }),

/***/ "./components/md-renderer/mdx-components/blockquote.js":
/*!*************************************************************!*\
  !*** ./components/md-renderer/mdx-components/blockquote.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BlockQuote = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].blockquote.withConfig({
  displayName: "blockquote__BlockQuote",
  componentId: "p7jfb4-0"
})(["padding:16px 20px;position:relative;background:#e8e8e8;border-radius:5px;h1,h2,h3,h4,h5,h6{margin-top:0;}p + h4{margin-top:15px;}p{margin:0;& + p{margin-top:10px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (BlockQuote);

/***/ }),

/***/ "./components/md-renderer/mdx-components/heading.js":
/*!**********************************************************!*\
  !*** ./components/md-renderer/mdx-components/heading.js ***!
  \**********************************************************/
/*! exports provided: Headings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headings", function() { return Headings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_icons_link_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/icons/link.svg */ "./components/icons/link.svg");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var linkify = function linkify(Component) {
  return function (props) {
    var text = props.children;
    var id = text.toLowerCase && text.toLowerCase().replace(/[^\x00-\x7F]/g, '').replace(/\s+/g, '-').replace(/[?!]/g, '');
    return __jsx(Component, {
      id: id
    }, __jsx(HeaderLink, {
      href: "#".concat(id)
    }, __jsx(components_icons_link_svg__WEBPACK_IMPORTED_MODULE_2__["default"], null)), props.children);
  };
};

var HeaderLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "heading__HeaderLink",
  componentId: "f6ws89-0"
})(["position:absolute;top:0;left:-25px;width:25px;display:none;height:100%;align-items:center;justify-content:flex-start;"]);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "heading__H1",
  componentId: "f6ws89-1"
})(["position:relative;font-size:42px;font-weight:700;margin:32px 0 10px !important;&:hover ", "{display:flex;}"], HeaderLink);
var H2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h2'
}).withConfig({
  displayName: "heading__H2",
  componentId: "f6ws89-2"
})(["font-size:32px;"]);
var H3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h3'
}).withConfig({
  displayName: "heading__H3",
  componentId: "f6ws89-3"
})(["margin:22px 0 8px;font-size:30px;"]);
var H4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h4'
}).withConfig({
  displayName: "heading__H4",
  componentId: "f6ws89-4"
})(["margin:18px 0 8px;font-size:24px;"]);
var H5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h5'
}).withConfig({
  displayName: "heading__H5",
  componentId: "f6ws89-5"
})(["margin:14px 0 8px;font-size:18px;"]);
var H6 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h6'
}).withConfig({
  displayName: "heading__H6",
  componentId: "f6ws89-6"
})(["margin:12px 0 8px;font-size:18px;"]);
var Headings = {
  h1: linkify(H1),
  h2: linkify(H2),
  h3: linkify(H3),
  h4: linkify(H4),
  h5: linkify(H5),
  h6: linkify(H6)
};

/***/ }),

/***/ "./components/md-renderer/mdx-components/iframe.js":
/*!*********************************************************!*\
  !*** ./components/md-renderer/mdx-components/iframe.js ***!
  \*********************************************************/
/*! exports provided: IFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFrame", function() { return IFrame; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var IFrame = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].iframe.withConfig({
  displayName: "iframe__IFrame",
  componentId: "p4jywl-0"
})(["display:block;width:100%;border:none;margin:30px auto;"]);

/***/ }),

/***/ "./components/md-renderer/mdx-components/img.js":
/*!******************************************************!*\
  !*** ./components/md-renderer/mdx-components/img.js ***!
  \******************************************************/
/*! exports provided: Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "img__Img",
  componentId: "arv17j-0"
})(["max-width:100%;margin:25px auto;display:block;"]);

/***/ }),

/***/ "./components/md-renderer/mdx-components/index.js":
/*!********************************************************!*\
  !*** ./components/md-renderer/mdx-components/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _p__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p */ "./components/md-renderer/mdx-components/p.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heading */ "./components/md-renderer/mdx-components/heading.js");
/* harmony import */ var _pre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pre */ "./components/md-renderer/mdx-components/pre.js");
/* harmony import */ var _blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockquote */ "./components/md-renderer/mdx-components/blockquote.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table */ "./components/md-renderer/mdx-components/table.js");
/* harmony import */ var _iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iframe */ "./components/md-renderer/mdx-components/iframe.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img */ "./components/md-renderer/mdx-components/img.js");
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./a */ "./components/md-renderer/mdx-components/a.js");










var MdxComponents = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  p: _p__WEBPACK_IMPORTED_MODULE_1__["default"]
}, _heading__WEBPACK_IMPORTED_MODULE_2__["Headings"], {
  pre: _pre__WEBPACK_IMPORTED_MODULE_3__["Pre"],
  blockquote: _blockquote__WEBPACK_IMPORTED_MODULE_4__["default"],
  a: _a__WEBPACK_IMPORTED_MODULE_8__["default"],
  table: _table__WEBPACK_IMPORTED_MODULE_5__["Table"],
  iframe: _iframe__WEBPACK_IMPORTED_MODULE_6__["IFrame"],
  img: _img__WEBPACK_IMPORTED_MODULE_7__["Img"]
});

/* harmony default export */ __webpack_exports__["default"] = (MdxComponents);

/***/ }),

/***/ "./components/md-renderer/mdx-components/p.js":
/*!****************************************************!*\
  !*** ./components/md-renderer/mdx-components/p.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var P = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "p__P",
  componentId: "sc-1wvqmv1-0"
})(["color:inherit;font-size:16px;font-weight:400;line-height:26px;margin:0 0 12px;img + em{text-align:center;color:#666666;font-style:normal;font-size:14px;margin:5px 0 10px;display:block;}"]);
/* harmony default export */ __webpack_exports__["default"] = (P);

/***/ }),

/***/ "./components/md-renderer/mdx-components/pre.js":
/*!******************************************************!*\
  !*** ./components/md-renderer/mdx-components/pre.js ***!
  \******************************************************/
/*! exports provided: Pre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Pre = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].pre.withConfig({
  displayName: "pre__Pre",
  componentId: "sc-11s8hs3-0"
})(["margin:25px -25px 25px -25px !important;padding:20px 25px !important;border-radius:10px;line-height:1.5 !important;code{background:transparent;}"]);

/***/ }),

/***/ "./components/md-renderer/mdx-components/table.js":
/*!********************************************************!*\
  !*** ./components/md-renderer/mdx-components/table.js ***!
  \********************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Table = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table.withConfig({
  displayName: "table__Table",
  componentId: "sc-1t5lyto-0"
})(["border-collapse:separate;width:100%;border-spacing:0;margin:20px 0;th{color:#666;font-size:12px;font-weight:400;background:#FAFAFA;text-transform:uppercase;height:40px;vertical-align:middle;padding:5px 10px;}td{font-size:14px;padding:10px;border-bottom:1px solid #EAEAEA;}"]);

/***/ }),

/***/ "./components/mdx-components/a.js":
false,

/***/ "./components/mdx-components/blockquote.js":
false,

/***/ "./components/mdx-components/heading.js":
false,

/***/ "./components/mdx-components/iframe.js":
false,

/***/ "./components/mdx-components/img.js":
false,

/***/ "./components/mdx-components/index.js":
false,

/***/ "./components/mdx-components/p.js":
false,

/***/ "./components/mdx-components/pre.js":
false,

/***/ "./components/mdx-components/table.js":
false,

/***/ "./components/page-footer/style.js":
/*!*****************************************!*\
  !*** ./components/page-footer/style.js ***!
  \*****************************************/
/*! exports provided: FooterWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrap", function() { return FooterWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__FooterWrap",
  componentId: "an4vc9-0"
})(["padding:65px 0;.site-meta{margin-bottom:30px;width:350px;.brand-detail{display:flex;align-items:center;}.brand{display:flex;align-items:center;font-weight:600;color:#000;text-decoration:none;img{height:25px;width:25px;margin-right:8px;}}.preposition{margin:0 7px;}.follow-author{background-color:#1e99e6;border-radius:3px;color:#fff;cursor:pointer;font-size:12px;font-weight:600;line-height:20px;padding:0 6px;white-space:nowrap;text-decoration:none;&:hover{background:#43aaea;}}.brand-explanation{color:#999;p{font-size:15px;line-height:24px;margin:15px 0;}}.meta-links{color:#a3a3a3;font-size:15px;a{color:#000;text-decoration:none;}}}.foot-col{margin-bottom:20px;a{color:#999;}.foot-header{font-weight:500;margin-bottom:7px;}ul{margin:0;padding:0;li{margin-bottom:2px;font-size:15px;list-style:none;margin-left:0;}}}"]);

/***/ }),

/***/ "./components/share-icon/index.js":
/*!****************************************!*\
  !*** ./components/share-icon/index.js ***!
  \****************************************/
/*! exports provided: ShareIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIcon", function() { return ShareIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ShareIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "share-icon__ShareIcon",
  componentId: "sc-1gxg99b-0"
})(["display:block;width:22px;height:22px;margin-bottom:8px;svg{height:22px !important;width:22px !important;color:#757575;transition:all 0.2s;vertical-align:top;}&:hover svg{color:#000000}"]);

/***/ }),

/***/ "./components/share-page/index.js":
/*!****************************************!*\
  !*** ./components/share-page/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var lib_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/url */ "./lib/url.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/share-page/style.js");
/* harmony import */ var components_share_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/share-icon */ "./components/share-icon/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SharePage = function SharePage(_ref) {
  var url = _ref.url,
      title = _ref.title,
      twitterUsername = _ref.twitterUsername;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareWrap"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareIconsList"], {
    className: "d-none d-sm-flex"
  }, __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getTwitterShareUrl"])({
      text: "".concat(title, " ").concat(twitterUsername ? "by @".concat(twitterUsername) : ''),
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitterSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getFacebookShareUrl"])({
      text: title,
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getRedditShareUrl"])({
      text: title,
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRedditSquare"]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SharePage);

/***/ }),

/***/ "./components/share-page/style.js":
/*!****************************************!*\
  !*** ./components/share-page/style.js ***!
  \****************************************/
/*! exports provided: ShareIconsList, ShareWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIconsList", function() { return ShareIconsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareWrap", function() { return ShareWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ShareIconsList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ShareIconsList",
  componentId: "t919y-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;position:sticky;top:50px;"]);
var ShareWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ShareWrap",
  componentId: "t919y-1"
})(["display:flex;align-items:center;flex-direction:column;position:absolute;padding:0 0;top:0;left:-40px;min-height:100%;"]);

/***/ }),

/***/ "./components/site-nav/index.js":
/*!**************************************!*\
  !*** ./components/site-nav/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/site-nav/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SiteNav = function SiteNav() {
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["HeaderWrap"], null, __jsx("div", {
    className: "top-row container"
  }, __jsx("div", {
    className: "flex-grow-1 brand"
  }, __jsx("a", {
    href: "/"
  }, __jsx("img", {
    src: "/static/brand.png",
    alt: ""
  }))), __jsx("div", {
    className: "nav-links"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/roadmaps"
  }, __jsx("a", null, "Roadmaps")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/guides"
  }, __jsx("a", null, "Guides")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, __jsx("a", {
    className: "d-none d-md-inline-block"
  }, "FAQ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup"
  }, __jsx("a", {
    className: "signup"
  }, "Subscribe")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SiteNav);

/***/ }),

/***/ "./layouts/default/index.js":
/*!**********************************!*\
  !*** ./layouts/default/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global.scss */ "./layouts/default/global.scss");
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_global_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lib_gtag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/gtag */ "./lib/gtag.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var DefaultLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DefaultLayout, _React$Component);

  function DefaultLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DefaultLayout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DefaultLayout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DefaultLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(lib_gtag__WEBPACK_IMPORTED_MODULE_8__["firePageView"])(window.location.pathname);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(components_helmet__WEBPACK_IMPORTED_MODULE_6__["default"], null), this.props.children);
    }
  }]);

  return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./lib/url.js":
/*!********************!*\
  !*** ./lib/url.js ***!
  \********************/
/*! exports provided: prefixHost, getTwitterUrl, getTwitterShareUrl, getFacebookShareUrl, getRedditShareUrl, getHnShareUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixHost", function() { return prefixHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitterUrl", function() { return getTwitterUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitterShareUrl", function() { return getTwitterShareUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFacebookShareUrl", function() { return getFacebookShareUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRedditShareUrl", function() { return getRedditShareUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHnShareUrl", function() { return getHnShareUrl; });
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);

var prefixHost = function prefixHost(url) {
  // if it starts with forward slash then prefix site URL
  // @todo proper handling of full URLs and trailing slashes
  return /^\//.test(url) ? "".concat(storage_site__WEBPACK_IMPORTED_MODULE_0__.url.web).concat(url) : url;
};
var getTwitterUrl = function getTwitterUrl(username) {
  return "https://twitter.com/".concat(username);
};
var getTwitterShareUrl = function getTwitterShareUrl(_ref) {
  var text = _ref.text,
      url = _ref.url;
  return "https://twitter.com/intent/tweet?text=".concat(text, "&url=").concat(encodeURI(prefixHost(url)));
};
var getFacebookShareUrl = function getFacebookShareUrl(_ref2) {
  var text = _ref2.text,
      url = _ref2.url;
  return "https://www.facebook.com/sharer/sharer.php?quote=".concat(text, "&u=").concat(encodeURI(prefixHost(url)));
};
var getRedditShareUrl = function getRedditShareUrl(_ref3) {
  var text = _ref3.text,
      url = _ref3.url;
  return "https://www.reddit.com/submit?title=".concat(text, "&url=").concat(encodeURI(prefixHost(url)));
};
var getHnShareUrl = function getHnShareUrl(_ref4) {
  var text = _ref4.text,
      url = _ref4.url;
  return "https://news.ycombinator.com/submitlink?t=".concat(text, "&u=").concat(prefixHost(url));
};

/***/ }),

/***/ "./node_modules/query-string/index.js":
false,

/***/ "./node_modules/strict-uri-encode/index.js":
false,

/***/ "./pages/guides/[guide].js":
/*!*********************************!*\
  !*** ./pages/guides/[guide].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var layouts_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts/guide */ "./layouts/guide/index.js");
/* harmony import */ var lib_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/server */ "./lib/server.js");
/* harmony import */ var components_guide_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/guide-header */ "./components/guide-header/index.js");
/* harmony import */ var components_guide_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/guide-body */ "./components/guide-body/index.js");
/* harmony import */ var components_guide_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/guide-footer */ "./components/guide-footer/index.js");
/* harmony import */ var lib_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/guide */ "./lib/guide.js");
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var Guide = function Guide(_ref) {
  var guide = _ref.guide;

  if (!guide) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_3___default.a, {
      statusCode: 404
    });
  }

  return __jsx(layouts_guide__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(components_helmet__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: guide.title,
    description: guide.description
  }), __jsx(components_guide_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    guide: guide
  }), __jsx(components_guide_body__WEBPACK_IMPORTED_MODULE_7__["default"], {
    guide: guide
  }), __jsx(components_guide_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    guide: guide
  }));
};

Guide.getInitialProps = Object(lib_server__WEBPACK_IMPORTED_MODULE_5__["serverOnlyProps"])(
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return Object(lib_guide__WEBPACK_IMPORTED_MODULE_9__["getRequestedGuide"])(req);

          case 3:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              guide: _context.t0
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (Guide);

/***/ }),

/***/ "./storage/guides sync recursive ^\\.\\/.*\\.md$":
/*!******************************************!*\
  !*** ./storage/guides sync ^\.\/.*\.md$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./design-patterns-for-humans.md": "./storage/guides/design-patterns-for-humans.md",
	"./dns-in-one-picture.md": "./storage/guides/dns-in-one-picture.md",
	"./http-caching.md": "./storage/guides/http-caching.md",
	"./journey-to-http2.md": "./storage/guides/journey-to-http2.md",
	"./upcoming.md": "./storage/guides/upcoming.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./storage/guides sync recursive ^\\.\\/.*\\.md$";

/***/ }),

/***/ "./storage/guides.json":
/*!*****************************!*\
  !*** ./storage/guides.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Design Patterns for Humans\",\"description\":\"A language agnostic, ultra-simplified explanation to design patterns\",\"url\":\"/guides/design-patterns-for-humans\",\"fileName\":\"design-patterns-for-humans\",\"featured\":true,\"author\":\"kamranahmedse\",\"updatedAt\":\"2019-10-09T12:00:00.860Z\",\"createdAt\":\"2019-01-23T17:00:00.860Z\"},{\"title\":\"Journey to HTTP/2\",\"description\":\"The evolution of HTTP. How it all started and where we stand today\",\"url\":\"/guides/journey-to-http2\",\"fileName\":\"journey-to-http2\",\"featured\":true,\"author\":\"kamranahmedse\",\"createdAt\":\"2018-12-04T12:00:00.860Z\",\"updatedAt\":\"2018-12-04T12:00:00.860Z\",\"draft\":true},{\"title\":\"DNS in One Picture\",\"description\":\"Quick illustrative guide on how a website is found on the internet.\",\"url\":\"/guides/dns-in-one-picture\",\"fileName\":\"dns-in-one-picture\",\"featured\":true,\"author\":\"kamranahmedse\",\"updatedAt\":\"2018-12-04T12:00:00.860Z\",\"createdAt\":\"2018-12-04T17:00:00.860Z\"},{\"title\":\"HTTP Caching\",\"description\":\"Everything you need to know about web caching\",\"url\":\"/guides/http-caching\",\"fileName\":\"http-caching\",\"featured\":true,\"author\":\"kamranahmedse\",\"createdAt\":\"2018-11-29T17:00:00.860Z\",\"updatedAt\":\"2018-11-29T17:00:00.860Z\"}]");

/***/ }),

/***/ "./storage/guides/design-patterns-for-humans.md":
/*!******************************************************!*\
  !*** ./storage/guides/design-patterns-for-humans.md ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");

/***/ }),

/***/ "./storage/guides/history-of-javascript.md":
false,

/***/ "./storage/guides/http-caching.md":
/*!****************************************!*\
  !*** ./storage/guides/http-caching.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "As users, we easily get frustrated by the buffering videos, the images that take seconds to load, pages that got stuck because the content is being loaded. Loading the resources from some cache is much faster than fetching the same from the originating server. It reduces latency, speeds up the loading of resources, decreases the load on server, cuts down the bandwidth costs etc. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Introduction"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "What is web cache? It is something that sits somewhere between the client and the server, continuously looking at the requests and their responses, looking for any responses that can be cached. So that there is less time consumed when the same request is made again. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/mJYVvTh.png",
    "alt": "Web Cache"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Note that this image is just to give you an idea. Depending upon the type of cache, the place where it is implemented could vary. More on this later.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before we get into further details, let me give you an overview of the terms that will be used, further in the article"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Client"), " could be your browser or any application requesting the server for some resource"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Origin Server"), ", the source of truth, houses all the content required by the client and is responsible for fulfilling the client requests."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Stale Content"), " is the cached but expired content"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Fresh Content"), " is the content available in cache that hasn't expired yet"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Cache Validation"), " is the process of contacting the server to check the validity of the cached content and get it updated for when it is going to expire"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Cache Invalidation"), " is the process of removing any stale content available in the cache")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/9MjlzvW.png",
    "alt": null
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Caching Locations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Web cache can be shared or private depending upon the location where it exists. Here is the list of different caching locations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#browser-cache"
  }), "Browser Cache")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#proxy-cache"
  }), "Proxy Cache")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#reverse-proxy-cache"
  }), "Reverse Proxy Cache"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Browser Cache"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You might have noticed that when you click the back button in your browser it takes less time to load the page than the time that it took during the first load; this is the browser cache in play. Browser cache is the most common location for caching and browsers usually reserve some space for it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/mJYVvTh.png",
    "alt": "Web Cache"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A browser cache is limited to just one user and unlike other caches, it can store the \"private\" responses. More on it later."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Proxy Cache"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Unlike browser cache which serves a single user, proxy caches may serve hundreds of different users accessing the same content. They are usually implemented on a broader level by ISPs or any other independent entities for example."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/3mj6e1O.png",
    "alt": "Proxy Cache"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Reverse Proxy Cache"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Reverse proxy cache or surrogate cache is implemented close to the origin servers in order to reduce the load on server. Unlike proxy caches which are implemented by ISPs etc to reduce the bandwidth usage in a network, surrogates or reverse proxy caches are implemented near to the origin servers by the server administrators to reduce the load on server."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "http://i.imgur.com/Eg4Cru3.png",
    "alt": "Reverse Proxy Cache"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Although you can control the reverse proxy caches (since it is implemented by you on your server) you can not avoid or control browser and proxy caches. And if your website is not configured to use these caches properly, it will still be cached using whatever the defaults are set on these caches."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Caching Headers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "So, how do we control the web cache? Whenever the server emits some response, it is accompanied with some HTTP headers to guide the caches whether and how to cache this response. Content provider is the one that has to make sure to return proper HTTP headers to force the caches on how to cache the content."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#expires"
  }), "Expires")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#pragma"
  }), "Pragma")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#cache-control"
  }), "Cache-Control"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#private"
  }), "private")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#public"
  }), "public")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#no-store"
  }), "no-store")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#no-cache"
  }), "no-cache")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#max-age"
  }), "max-age: seconds")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#s-maxage"
  }), "s-maxage: seconds")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#must-revalidate"
  }), "must-revalidate")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#proxy-revalidate"
  }), "proxy-revalidate")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#mixing-values"
  }), "Mixing Values")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#validators"
  }), "Validators"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#etag"
  }), "ETag")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#last-modified"
  }), "Last-Modified"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Expires"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before HTTP/1.1 and introduction of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Cache-Control"), ", there was ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Expires"), " header which is simply a timestamp telling the caches how long should some content be considered fresh. Possible value to this header is absolute expiry date; where date has to be in GMT. Below is the sample header"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Expires: Mon, 13 Mar 2017 12:22:00 GMT\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It should be noted that the date cannot be more than a year and if the date format is wrong, content will be considered stale. Also, the clock on cache has to be in sync with the clock on server, otherwise the desired results might not be achieved. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Although, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Expires"), " header is still valid and is supported widely by the caches, preference should be given to HTTP/1.1 successor of it i.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Cache-Control"), ".  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Pragma"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Another one from the old, pre HTTP/1.1 days, is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Pragma"), ". Everything that it could do is now possible using the cache-control header given below. However, one thing I would like to point out about it is, you might see ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Pragma: no-cache"), " being used here and there in hopes of stopping the response from being cached. It might not necessarily work; as HTTP specification discusses it in the request headers and there is no mention of it in the response headers. Rather ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Cache-Control"), " header should be used to control the caching."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Cache-Control"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Cache-Control specifies how long and in what manner should the content be cached. This family of headers was introduced in HTTP/1.1 to overcome the limitations of the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Expires"), " header."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Value for the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Cache-Control"), " header is composite i.e. it can have multiple directive/values. Let's look at the possible values that this header may contain. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "private"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Setting the cache to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "private"), " means that the content will not be cached in any of the proxies and it will only be cached by the client (i.e. browser)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: private\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Having said that, don't let it fool you in to thinking that setting this header will make your data any secure; you still have to use SSL for that purpose. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "public"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If set to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "public"), ", apart from being cached by the client, it can also be cached by the proxies; serving many other users"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: public\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "no-store"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "no-store")), " specifies that the content is not to be cached by any of the caches"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: no-store\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "no-cache"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "no-cache")), " indicates that the cache can be maintained but the cached content is to be re-validated (using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ETag"), " for example) from the server before being served. That is, there is still a request to server but for validation and not to download the cached content."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: max-age=3600, no-cache, public\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "max-age: seconds"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "max-age")), " specifies the number of seconds for which the content will be cached. For example, if the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "cache-control"), " looks like below:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: max-age=3600, public\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "it would mean that the content is publicly cacheable and will be considered stale after 60 seconds"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "s-maxage: seconds"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "s-maxage")), " here ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "s-"), " prefix stands for shared. This directive specifically targets the shared caches. Like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "max-age"), " it also gets the number of seconds for which something is to be cached. If present, it will override ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "max-age"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "expires"), " headers for shared caching."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: s-maxage=3600, public\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "must-revalidate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "must-revalidate")), " it might happen sometimes that if you have network problems and the content cannot be retrieved from the server, browser may serve stale content without validation. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "must-revalidate"), " avoids that. If this directive is present, it means that stale content cannot be served in any case and the data must be re-validated from the server before serving. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: max-age=3600, public, must-revalidate\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "proxy-revalidate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "proxy-revalidate")), " is similar to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "must-revalidate"), " but it specifies the same for shared or proxy caches. In other words ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "proxy-revalidate"), " is to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "must-revalidate"), " as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "s-maxage"), " is to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "max-age"), ". But why did they not call it ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "s-revalidate"), "?. I have no idea why, if you have any clue please leave a comment below. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "Mixing Values"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You can combine these directives in different ways to achieve different caching behaviors, however ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-cache/no-store"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "public/private"), " are mutually exclusive. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If you specify both ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-store"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-cache"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-store"), " will be given precedence over ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-cache"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "; If specified both\nCache-Control: no-store, no-cache\n\n; Below will be considered\nCache-Control: no-store\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "For ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "private/public"), ", for any unauthenticated requests cache is considered ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "public"), " and for any authenticated ones cache is considered ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "private"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Validators"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Up until now we only discussed how the content is cached and how long the cached content is to be considered fresh but we did not discuss how the client does the validation from the server. Below we discuss the headers used for this purpose."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "ETag"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Etag or \"entity tag\" was introduced in HTTP/1.1 specs. Etag is just a unique identifier that the server attaches with some resource. This ETag is later on used by the client to make conditional HTTP requests stating ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"give me this resource if ETag is not same as the ETag that I have\""), " and the content is downloaded only if the etags do not match. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Method by which ETag is generated is not specified in the HTTP docs and usually some collision-resistant hash function is used to assign etags to each version of a resource. There could be two types of etags i.e. strong and weak"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "ETag: \"j82j8232ha7sdh0q2882\" - Strong Etag\nETag: W/\"j82j8232ha7sdh0q2882\" - Weak Etag (prefixed with `W/`)\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A strong validating ETag means that two resources are ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "exactly"), " same and there is no difference between them at all. While a weak ETag means that two resources are although not strictly same but could be considered same. Weak etags might be useful for dynamic content, for example."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now you know what etags are but how does the browser make this request? by making a request to server while sending the available Etag in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "If-None-Match"), " header."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Consider the scenario, you opened a web page which loaded a logo image with caching period of 60 seconds and ETag of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "abc123xyz"), ". After about 30 minutes you reload the page, browser will notice that the logo which was fresh for 60 seconds is now stale; it will trigger a request to server, sending the ETag of the stale logo image in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "if-none-match"), " header"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "If-None-Match: \"abc123xyz\"\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Server will then compare this ETag with the ETag of the current version of resource. If both etags are matched, server will send back the response of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "304 Not Modified"), " which will tell the client that the copy that it has is still good and it will be considered fresh for another 60 seconds. If both the etags do not match i.e. the logo has likely changed and client will be sent the new logo which it will use to replace the stale logo that it has."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Last-Modified"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Server might include the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " header indicating the date and time at which some content was last modified on."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Last-Modified: Wed, 15 Mar 2017 12:30:26 GMT\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When the content gets stale, client will make a conditional request including the last modified date that it has inside the header called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "If-Modified-Since"), " to server to get the updated ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " date; if it matches the date that the client has, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " date for the content is updated to be considered fresh for another ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "n"), " seconds. If the received ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " date does not match the one that the client has, content is reloaded from the server and replaced with the content that client has."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "If-Modified-Since: Wed, 15 Mar 2017 12:30:26 GMT\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You might be questioning now, what if the cached content has both the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ETag"), " assigned to it? Well, in that case both are to be used i.e. there will not be any re-downloading of the resource if and only if ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ETag"), " matches the newly retrieved one and so does the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " date. If either the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ETag"), " does not match or the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " is greater than the one from the server, content has to be downloaded again. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Where do I start?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now that we have got ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "everything"), " covered, let us put everything in perspective and see how you can use this information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Utilizing Server"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before we get into the possible caching strategies , let me add the fact that most of the servers including Apache and Nginx allow you to implement your caching policy through the server so that you don't have to juggle with headers in your code. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "For example"), ", if you are using Apache and you have your static content placed at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "/static"), ", you can put below ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".htaccess"), " file in the directory to make all the content in it be cached for an year using below"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "# Cache everything for an year\nHeader set Cache-Control \"max-age=31536000, public\"\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You can further use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "filesMatch"), " directive to add conditionals and use different caching strategy for different kinds of files e.g."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "# Cache any images for one year\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), "<"), "filesMatch"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }), "\".(png|jpg|jpeg|gif)$\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), ">")), "\n    Header set Cache-Control \"max-age=31536000, public\"\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), "</"), "filesMatch"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), ">")), "\n\n# Cache any CSS and JS files for a month\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), "<"), "filesMatch"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }), "\".(css|js)$\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), ">")), "\n    Header set Cache-Control \"max-age=2628000, public\"\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), "</"), "filesMatch"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), ">")), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Or if you don't want to use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".htaccess"), " file you can modify Apache's configuration file ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "http.conf"), ". Same goes for Nginx, you can add the caching information in the location or server block.  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Caching Recommendations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "There is no golden rule or set standards about how your caching policy should look like, each of the application is different and you have to look and find what suits your application the best. However, just to give you a rough idea"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "You can have aggressive caching (e.g. cache for an year) on any static content and use fingerprinted filenames (e.g. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "style.ju2i90.css"), ") so that the cache is automatically rejected whenever the files are updated.\nAlso it should be noted that you should not cross the upper limit of one year as it ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9"
  }), "might not be honored"), " "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Look and decide do you even need caching for any dynamic content, if yes how long it should be. For example, in case of some RSS feed of a blog there could be the caching of a few hours but there couldn't be any caching for inventory items in an ERP."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Always add the validators (preferably ETags) in your response."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Pay attention while choosing the visibility (private or public) of the cached content. Make sure that you do not accidentally cache any user-specific or sensitive content in any public proxies. When in doubt, do not use cache at all."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Separate the content that changes often from the content that doesn't change that often (e.g. in javascript bundles) so that when it is updated it doesn't need to make the whole cached content stale.  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Test and monitor the caching headers being served by your site. You can use the browser console or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "curl -I http://some-url.com"), " for that purpose. ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "And that about wraps it up. Stay tuned for more!"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/guides/levels-of-seniority.md":
false,

/***/ "./storage/guides/upcoming.md":
/*!************************************!*\
  !*** ./storage/guides/upcoming.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Roadmap is not ready yet"), ". Please check back later or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/signup"
  }), "subscribe to get notified"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "While we prepare the roadmap, follow this simple advice to learn anything"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Just ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "pick a project and start working on it"), ", you will learn all that you need along the way.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u2192"), " ", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/roadmaps"
  }), "All Roadmaps"), " ", "\xA0", "\u2022", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/guides"
  }), "Programming guides"), " ", "\xA0", "\u2022", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/signup"
  }), "Subscribe"), " "));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/site.json":
/*!***************************!*\
  !*** ./storage/site.json ***!
  \***************************/
/*! exports provided: author, title, name, description, twitter, facebook, logo, url, keywords, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"author\":\"Kamran Ahmed\",\"title\":\"Roadmaps to becoming a modern developer\",\"name\":\"roadmap.sh\",\"description\":\"Roadmaps, articles and resources to help you choose your path, learn and improve.\",\"twitter\":\"kamranahmedse\",\"facebook\":\"kamranahmedse\",\"logo\":\"/static/brand.png\",\"url\":{\"web\":\"https://roadmap.sh\",\"repo\":\"https://github.com/kamranahmedse/roadmap.sh\",\"repoData\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/storage\",\"addGuide\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing/guide.md\",\"addRoadmap\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing/roadmap.md\",\"addResources\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing/resources.md\",\"contribute\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing\",\"issue\":\"https://github.com/kamranahmedse/roadmap.sh/issues/new\"},\"keywords\":[\"roadmap\",\"developer roadmaps\",\"developer roadmap\",\"frontend developer\",\"frontend developer roadmap\",\"frontend\",\"frontend roadmap\",\"backend\",\"backend developer\",\"backend developer roadmap\",\"devops\",\"devops roadmap\",\"fullstack developer roadmap\",\"guide to becoming a developer\",\"sre roadmap\",\"sre\",\"operations roadmap\"]}");

/***/ })

})
//# sourceMappingURL=[guide].js.c4212a5c4334a2f66783.hot-update.js.map