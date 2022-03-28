"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultHelmet = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_helmet_1 = require("react-helmet");
var defaultSettings = {};
var DefaultHelmet = function (props) {
    var _a, _b;
    var _defaultSettings = defaultSettings;
    var keys = Object.keys(props);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] === "title")
            _defaultSettings.title = props.title;
        if (keys[i] === "subTitle")
            _defaultSettings.subTitle = props.subTitle;
        if (keys[i] === "titleDivider")
            _defaultSettings.titleDivider = props.titleDivider;
    }
    var getTitle = function () {
        var _a, _b, _c;
        var title = (_a = props.title) !== null && _a !== void 0 ? _a : _defaultSettings.title;
        var text = "";
        text = text + title;
        if (props.subTitle || _defaultSettings.subTitle) {
            if (props.titleDivider || _defaultSettings.titleDivider) {
                text = text + " ".concat((_b = props.titleDivider) !== null && _b !== void 0 ? _b : _defaultSettings.titleDivider, " ");
            }
            else {
                text = text + " | ";
            }
            text = (_c = text + props.subTitle) !== null && _c !== void 0 ? _c : _defaultSettings.subTitle;
        }
        return text;
    };
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [((props.title || _defaultSettings.title) ||
                (props.subTitle)) &&
                (0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("title", { children: getTitle() }), (0, jsx_runtime_1.jsx)("meta", { name: "title", content: getTitle() }), (0, jsx_runtime_1.jsx)("meta", { property: "og:title", content: getTitle() }), (0, jsx_runtime_1.jsx)("meta", { property: "twitter:title", content: getTitle() })] }), props.description &&
                (0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("meta", { name: "description", content: props.description }), (0, jsx_runtime_1.jsx)("meta", { property: "og:description", content: props.description }), (0, jsx_runtime_1.jsx)("meta", { property: "twitter:description", content: props.description })] }), (0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [props.keywords && (0, jsx_runtime_1.jsx)("meta", { name: "keywords", content: props.keywords }), props.subject && (0, jsx_runtime_1.jsx)("meta", { name: "subject", content: props.subject }), props.copyright && (0, jsx_runtime_1.jsx)("meta", { name: "copyright", content: props.copyright }), props.language && (0, jsx_runtime_1.jsx)("meta", { name: "language", content: props.language }), props.robots && (0, jsx_runtime_1.jsx)("meta", { name: "robots", content: props.robots }), props.revised && (0, jsx_runtime_1.jsx)("meta", { name: "revised", content: props.revised }), props.topic && (0, jsx_runtime_1.jsx)("meta", { name: "topic", content: props.topic }), props.summary && (0, jsx_runtime_1.jsx)("meta", { name: "summary", content: props.summary }), props.Classification && (0, jsx_runtime_1.jsx)("meta", { name: "Classification", content: props.Classification }), props.author && (0, jsx_runtime_1.jsx)("meta", { name: "author", content: props.author }), props.replyTo && (0, jsx_runtime_1.jsx)("meta", { name: "replyTo", content: props.replyTo }), props.owner && (0, jsx_runtime_1.jsx)("meta", { name: "owner", content: props.owner }), props.identifierURL && (0, jsx_runtime_1.jsx)("meta", { name: "identifierURL", content: props.identifierURL }), props.favIcon && (0, jsx_runtime_1.jsx)("link", { rel: "icon", type: "image/x-icon", href: props.favIcon }), (0, jsx_runtime_1.jsx)("meta", { property: "og:type", content: (_a = props.ogType) !== null && _a !== void 0 ? _a : "website" }), (0, jsx_runtime_1.jsx)("meta", { property: "twitter:card", content: (_b = props.twitterCard) !== null && _b !== void 0 ? _b : "summary_large_image" }), props.children] }), props.themeColor && (0, jsx_runtime_1.jsx)(react_helmet_1.Helmet, { children: (0, jsx_runtime_1.jsx)("meta", { name: "theme-color", content: props.themeColor }) }), props.url ?
                (0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("meta", { name: "url", content: props.url }), (0, jsx_runtime_1.jsx)("meta", { property: "og:url", content: props.url }), (0, jsx_runtime_1.jsx)("meta", { property: "twitter:url", content: props.url })] })
                :
                    (0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("meta", { name: "url", content: window.location.origin + window.location.pathname }), (0, jsx_runtime_1.jsx)("meta", { property: "og:url", content: window.location.origin + window.location.pathname }), (0, jsx_runtime_1.jsx)("meta", { property: "twitter:url", content: window.location.origin + window.location.pathname })] }), props.image &&
                (0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("meta", { property: "og:image", content: props.image }), (0, jsx_runtime_1.jsx)("meta", { property: "twitter:image", content: props.image })] })] }));
};
exports.DefaultHelmet = DefaultHelmet;
