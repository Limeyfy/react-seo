var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { CheckDescription, CheckForNoIndexTag, CheckImages, CheckKeywords, CheckPageTitle, CheckTitles } from "./seoScripts";
var calculatePercentage = function (num1, num2) { return (100 * num2) / num1; };
var useSeo = function () {
    var getResultPercentage = function (props) {
        var total = Object.keys(props).length;
        var checked = 0;
        Object.keys(props).map(function (prop) {
            if (props[prop].checked)
                checked++;
            return;
        });
        return {
            percentage: calculatePercentage(total, checked),
            checked: checked
        };
    };
    var result = function () {
        var simpleRes = {
            title: CheckTitles(),
            header: CheckPageTitle(),
            description: CheckDescription(),
            images: CheckImages(),
            keywords: CheckKeywords(),
            noIndexTag: CheckForNoIndexTag()
        };
        var resPercentage = getResultPercentage(simpleRes);
        var res = __assign(__assign({}, simpleRes), { checked: resPercentage.checked, percentage: resPercentage.percentage });
        return res;
    };
    return {
        result: result
    };
};
export default useSeo;
