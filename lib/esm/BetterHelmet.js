import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
var getTitle = function (props) { var _a, _b, _c; return "".concat((_a = props.title) !== null && _a !== void 0 ? _a : "", " ").concat((_b = props.titleDivider) !== null && _b !== void 0 ? _b : "", " ").concat((_c = props.subTitle) !== null && _c !== void 0 ? _c : ""); };
export var BetterHelmet = function (props) {
    var _a, _b;
    return (React.createElement(HelmetProvider, null,
        props.title && (React.createElement(Helmet, null,
            React.createElement("title", null, getTitle(props)),
            React.createElement("meta", { name: "title", content: getTitle(props) }),
            React.createElement("meta", { property: "og:title", content: getTitle(props) }),
            React.createElement("meta", { property: "twitter:title", content: getTitle(props) }))),
        props.description &&
            React.createElement(Helmet, null,
                React.createElement("meta", { name: "description", content: props.description }),
                React.createElement("meta", { property: "og:description", content: props.description }),
                React.createElement("meta", { property: "twitter:description", content: props.description })),
        React.createElement(Helmet, null,
            props.keywords && React.createElement("meta", { name: "keywords", content: props.keywords }),
            props.subject && React.createElement("meta", { name: "subject", content: props.subject }),
            props.copyright && React.createElement("meta", { name: "copyright", content: props.copyright }),
            props.language && React.createElement("meta", { name: "language", content: props.language }),
            props.robots && React.createElement("meta", { name: "robots", content: props.robots }),
            props.revised && React.createElement("meta", { name: "revised", content: props.revised }),
            props.topic && React.createElement("meta", { name: "topic", content: props.topic }),
            props.summary && React.createElement("meta", { name: "summary", content: props.summary }),
            props.Classification && React.createElement("meta", { name: "Classification", content: props.Classification }),
            props.author && React.createElement("meta", { name: "author", content: props.author }),
            props.replyTo && React.createElement("meta", { name: "replyTo", content: props.replyTo }),
            props.owner && React.createElement("meta", { name: "owner", content: props.owner }),
            props.identifierURL && React.createElement("meta", { name: "identifierURL", content: props.identifierURL }),
            props.favIcon && React.createElement("link", { rel: "icon", type: "image/x-icon", href: props.favIcon }),
            React.createElement("meta", { property: "og:type", content: (_a = props.ogType) !== null && _a !== void 0 ? _a : "website" }),
            React.createElement("meta", { property: "twitter:card", content: (_b = props.twitterCard) !== null && _b !== void 0 ? _b : "summary_large_image" }),
            props.children),
        props.themeColor && React.createElement(Helmet, null,
            React.createElement("meta", { name: "theme-color", content: props.themeColor })),
        props.url ?
            React.createElement(Helmet, null,
                React.createElement("meta", { name: "url", content: props.url }),
                React.createElement("meta", { property: "og:url", content: props.url }),
                React.createElement("meta", { property: "twitter:url", content: props.url }))
            :
                React.createElement(Helmet, null,
                    React.createElement("meta", { name: "url", content: window.location.origin + window.location.pathname }),
                    React.createElement("meta", { property: "og:url", content: window.location.origin + window.location.pathname }),
                    React.createElement("meta", { property: "twitter:url", content: window.location.origin + window.location.pathname })),
        props.image &&
            React.createElement(Helmet, null,
                React.createElement("meta", { property: "og:image", content: props.image }),
                React.createElement("meta", { property: "twitter:image", content: props.image }))));
};
