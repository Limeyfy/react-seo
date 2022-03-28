var CheckTitles = function () {
    var titles = window.document.getElementsByTagName("h1");
    if (!titles) {
        return {
            message: "Cant find a h1 tag on the page",
            checked: false
        };
    }
    if ((titles === null || titles === void 0 ? void 0 : titles.length) > 1) {
        return {
            message: "Too many <h1> tags, you have ".concat(titles.length, ". It should be 1"),
            checked: false
        };
    }
    if ((titles === null || titles === void 0 ? void 0 : titles.length) < 1) {
        return {
            message: "Page should have a <h1> tag",
            checked: false
        };
    }
    return {
        message: "Page has a good h1 tag!",
        checked: true
    };
};
var CheckPageTitle = function () {
    var _a;
    var pageTitle = (_a = window.document.querySelector("title")) === null || _a === void 0 ? void 0 : _a.innerText;
    if (!pageTitle) {
        return {
            message: "Page should have a <title> tag. Use title value in DefaultHelmet",
            checked: false
        };
    }
    if (pageTitle.length <= 7 || pageTitle.length >= 70) {
        return {
            message: "You have a title tag of optimal length (between 10 and 70 characters). Current description length: ".concat(pageTitle.length),
            checked: false
        };
    }
    return {
        message: "Page has a good title! Fantastic!",
        checked: true
    };
};
var CheckDescription = function () {
    var description = window.document.querySelector('meta[name="description"]');
    if (!description) {
        return {
            message: "Page should have a <meta> tag with description. Use description value in DefaultHelmet",
            checked: false
        };
    }
    var newLocal = "content";
    var descriptionText = description.attributes[newLocal].nodeValue;
    if (!descriptionText) {
        return {
            message: "Description text is null",
            checked: false
        };
    }
    if (descriptionText.length < 71 || descriptionText.length > 320) {
        return {
            message: "Your page has a meta description of optimal length (between 70 and 320 characters). Current description length: ".concat(descriptionText.length),
            checked: false
        };
    }
    return {
        message: "Page has a good description! Good job mate!",
        checked: true
    };
};
var CheckKeywords = function () {
    var keywords = window.document.querySelector('meta[name="keywords"]');
    if (!keywords) {
        return {
            message: "Page should have a <meta> tag with keywords. Use keywords value in DefaultHelmet",
            checked: false
        };
    }
    var newLocal = "content";
    var keywordsText = keywords.attributes[newLocal].nodeValue;
    if (!keywordsText) {
        return {
            message: "Keywords is null",
            checked: false
        };
    }
    var keywordsArray = keywordsText.split(",");
    if (keywordsArray.length < 10) {
        return {
            message: "You should have at least 10 keywords on your page",
            checked: false
        };
    }
    return {
        message: "Page has a good amount of keywords!",
        checked: true
    };
};
var CheckImages = function () {
    var images = window.document.querySelectorAll("img");
    var imagesWithNoAlt = [];
    images.forEach(function (img) {
        var newLocal = "alt";
        var alt = img.attributes[newLocal];
        if (!alt)
            imagesWithNoAlt.push(img);
    });
    if (imagesWithNoAlt.length > 0) {
        console.log(imagesWithNoAlt);
        return {
            message: "You have images with no alt attribute. Images listed in console log above.",
            checked: false
        };
    }
    return {
        message: "All images has alt attribute.",
        checked: true
    };
};
var CheckForNoIndexTag = function () {
    var noIndexTag = window.document.querySelector('meta[content="noindex"]');
    if (noIndexTag) {
        return {
            message: "Page has a meta tag with content \"noindex\". Remove this",
            checked: false
        };
    }
    return {
        message: "The page has no \"noindex\" tag.",
        checked: false
    };
};
export { CheckTitles, CheckPageTitle, CheckDescription, CheckKeywords, CheckImages, CheckForNoIndexTag };
