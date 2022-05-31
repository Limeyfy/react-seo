"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetterHelmet = void 0;
var react_1 = __importDefault(require("react"));
var react_helmet_async_1 = require("react-helmet-async");
var getTitle = function (props) { return "".concat(props.title, " ").concat(props.titleDivider, " ").concat(props.subTitle); };
var BetterHelmet = function (props) {
    var _a, _b;
    return (react_1.default.createElement(react_helmet_async_1.HelmetProvider, null,
        props.title && (react_1.default.createElement(react_helmet_async_1.Helmet, null,
            react_1.default.createElement("title", null, getTitle(props)),
            react_1.default.createElement("meta", { name: "title", content: getTitle(props) }),
            react_1.default.createElement("meta", { property: "og:title", content: getTitle(props) }),
            react_1.default.createElement("meta", { property: "twitter:title", content: getTitle(props) }))),
        props.description &&
            react_1.default.createElement(react_helmet_async_1.Helmet, null,
                react_1.default.createElement("meta", { name: "description", content: props.description }),
                react_1.default.createElement("meta", { property: "og:description", content: props.description }),
                react_1.default.createElement("meta", { property: "twitter:description", content: props.description })),
        react_1.default.createElement(react_helmet_async_1.Helmet, null,
            props.keywords && react_1.default.createElement("meta", { name: "keywords", content: props.keywords }),
            props.subject && react_1.default.createElement("meta", { name: "subject", content: props.subject }),
            props.copyright && react_1.default.createElement("meta", { name: "copyright", content: props.copyright }),
            props.language && react_1.default.createElement("meta", { name: "language", content: props.language }),
            props.robots && react_1.default.createElement("meta", { name: "robots", content: props.robots }),
            props.revised && react_1.default.createElement("meta", { name: "revised", content: props.revised }),
            props.topic && react_1.default.createElement("meta", { name: "topic", content: props.topic }),
            props.summary && react_1.default.createElement("meta", { name: "summary", content: props.summary }),
            props.Classification && react_1.default.createElement("meta", { name: "Classification", content: props.Classification }),
            props.author && react_1.default.createElement("meta", { name: "author", content: props.author }),
            props.replyTo && react_1.default.createElement("meta", { name: "replyTo", content: props.replyTo }),
            props.owner && react_1.default.createElement("meta", { name: "owner", content: props.owner }),
            props.identifierURL && react_1.default.createElement("meta", { name: "identifierURL", content: props.identifierURL }),
            props.favIcon && react_1.default.createElement("link", { rel: "icon", type: "image/x-icon", href: props.favIcon }),
            react_1.default.createElement("meta", { property: "og:type", content: (_a = props.ogType) !== null && _a !== void 0 ? _a : "website" }),
            react_1.default.createElement("meta", { property: "twitter:card", content: (_b = props.twitterCard) !== null && _b !== void 0 ? _b : "summary_large_image" }),
            props.children),
        props.themeColor && react_1.default.createElement(react_helmet_async_1.Helmet, null,
            react_1.default.createElement("meta", { name: "theme-color", content: props.themeColor })),
        props.url ?
            react_1.default.createElement(react_helmet_async_1.Helmet, null,
                react_1.default.createElement("meta", { name: "url", content: props.url }),
                react_1.default.createElement("meta", { property: "og:url", content: props.url }),
                react_1.default.createElement("meta", { property: "twitter:url", content: props.url }))
            :
                react_1.default.createElement(react_helmet_async_1.Helmet, null,
                    react_1.default.createElement("meta", { name: "url", content: window.location.origin + window.location.pathname }),
                    react_1.default.createElement("meta", { property: "og:url", content: window.location.origin + window.location.pathname }),
                    react_1.default.createElement("meta", { property: "twitter:url", content: window.location.origin + window.location.pathname })),
        props.image &&
            react_1.default.createElement(react_helmet_async_1.Helmet, null,
                react_1.default.createElement("meta", { property: "og:image", content: props.image }),
                react_1.default.createElement("meta", { property: "twitter:image", content: props.image }))));
};
exports.BetterHelmet = BetterHelmet;
