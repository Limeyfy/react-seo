"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seoScripts_1 = require("./seoScripts");
var useSeo = function () {
    var result = function () {
        var res = {
            title: (0, seoScripts_1.CheckTitles)(),
            header: (0, seoScripts_1.CheckPageTitle)(),
            description: (0, seoScripts_1.CheckDescription)(),
            images: (0, seoScripts_1.CheckImages)(),
            keywords: (0, seoScripts_1.CheckKeywords)(),
            noIndexTag: (0, seoScripts_1.CheckForNoIndexTag)()
        };
        return res;
    };
    return {
        result: result
    };
};
exports.default = useSeo;
