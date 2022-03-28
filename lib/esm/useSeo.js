import { CheckDescription, CheckForNoIndexTag, CheckImages, CheckKeywords, CheckPageTitle, CheckTitles } from "./seoScripts";
var useSeo = function () {
    var result = function () {
        var res = {
            title: CheckTitles(),
            header: CheckPageTitle(),
            description: CheckDescription(),
            images: CheckImages(),
            keywords: CheckKeywords(),
            noIndexTag: CheckForNoIndexTag()
        };
        return res;
    };
    return {
        result: result
    };
};
export default useSeo;
