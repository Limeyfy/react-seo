import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Helmet } from "react-helmet";
let defaultSettings = {};
export const DefaultHelmet = (props) => {
    var _a, _b;
    const _defaultSettings = defaultSettings;
    const keys = Object.keys(props);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] === "title")
            _defaultSettings.title = props.title;
        if (keys[i] === "subTitle")
            _defaultSettings.subTitle = props.subTitle;
        if (keys[i] === "titleDivider")
            _defaultSettings.titleDivider = props.titleDivider;
    }
    const getTitle = () => {
        var _a, _b, _c;
        const title = (_a = props.title) !== null && _a !== void 0 ? _a : _defaultSettings.title;
        let text = "";
        text = text + title;
        if (props.subTitle || _defaultSettings.subTitle) {
            if (props.titleDivider || _defaultSettings.titleDivider) {
                text = text + ` ${(_b = props.titleDivider) !== null && _b !== void 0 ? _b : _defaultSettings.titleDivider} `;
            }
            else {
                text = text + ` | `;
            }
            text = (_c = text + props.subTitle) !== null && _c !== void 0 ? _c : _defaultSettings.subTitle;
        }
        return text;
    };
    return (_jsxs(React.Fragment, { children: [((props.title || _defaultSettings.title) ||
                (props.subTitle)) &&
                _jsxs(Helmet, { children: [_jsx("title", { children: getTitle() }, void 0), _jsx("meta", { name: "title", content: getTitle() }, void 0), _jsx("meta", { property: "og:title", content: getTitle() }, void 0), _jsx("meta", { property: "twitter:title", content: getTitle() }, void 0)] }, void 0), props.description &&
                _jsxs(Helmet, { children: [_jsx("meta", { name: "description", content: props.description }, void 0), _jsx("meta", { property: "og:description", content: props.description }, void 0), _jsx("meta", { property: "twitter:description", content: props.description }, void 0)] }, void 0), _jsxs(Helmet, { children: [props.keywords && _jsx("meta", { name: "keywords", content: props.keywords }, void 0), props.subject && _jsx("meta", { name: "subject", content: props.subject }, void 0), props.copyright && _jsx("meta", { name: "copyright", content: props.copyright }, void 0), props.language && _jsx("meta", { name: "language", content: props.language }, void 0), props.robots && _jsx("meta", { name: "robots", content: props.robots }, void 0), props.revised && _jsx("meta", { name: "revised", content: props.revised }, void 0), props.topic && _jsx("meta", { name: "topic", content: props.topic }, void 0), props.summary && _jsx("meta", { name: "summary", content: props.summary }, void 0), props.Classification && _jsx("meta", { name: "Classification", content: props.Classification }, void 0), props.author && _jsx("meta", { name: "author", content: props.author }, void 0), props.replyTo && _jsx("meta", { name: "replyTo", content: props.replyTo }, void 0), props.owner && _jsx("meta", { name: "owner", content: props.owner }, void 0), props.url ?
                        _jsxs(Helmet, { children: [_jsx("meta", { name: "url", content: props.url }, void 0), _jsx("meta", { property: "og:url", content: props.url }, void 0), _jsx("meta", { property: "twitter:url", content: props.url }, void 0)] }, void 0)
                        :
                            _jsxs(Helmet, { children: [_jsx("meta", { name: "url", content: window.location.origin + window.location.pathname }, void 0), _jsx("meta", { property: "og:url", content: window.location.origin + window.location.pathname }, void 0), _jsx("meta", { property: "twitter:url", content: window.location.origin + window.location.pathname }, void 0)] }, void 0), props.identifierURL && _jsx("meta", { name: "identifierURL", content: props.identifierURL }, void 0), props.image &&
                        _jsxs(Helmet, { children: [_jsx("meta", { property: "og:image", content: props.image }, void 0), _jsx("meta", { property: "twitter:image", content: props.image }, void 0)] }, void 0), props.favIcon && _jsx("link", { rel: "icon", type: "image/x-icon", href: props.favIcon }, void 0), _jsx("meta", { property: "og:type", content: (_a = props.ogType) !== null && _a !== void 0 ? _a : "website" }, void 0), _jsx("meta", { property: "twitter:card", content: (_b = props.twitterCard) !== null && _b !== void 0 ? _b : "summary_large_image" }, void 0), props.children] }, void 0)] }, void 0));
};
