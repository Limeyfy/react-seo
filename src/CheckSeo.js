const words = [
    [
        "I think you can do a little better",
        "Its not exactly good..",
        "Your gonna have to look for this page",
        "...okay"
    ],
    [
        "This is pretty okay",
        "U did a decent job",
        "Its good, but theres room for improvement",
        "You're almost there!"
    ],
    [
        "You're rocking this!",
        "Hats off to you",
        "You're so good you don't need to use google ads!",
        "Damnnnnn write that off on your "
    ]
];
const consoleWarn = (text) => console.warn(`${text}`);
const consoleInfo = (text) => console.info(`${text}`);
const CheckTitles = () => {
    const titles = window.document.getElementsByTagName("h1");
    if (!titles) {
        consoleWarn("Cant find a h1 tag on the page");
        return false;
    }
    if ((titles === null || titles === void 0 ? void 0 : titles.length) > 1) {
        consoleWarn(`Too many <h1> tags, you have ${titles.length}. It should be 1`);
        return false;
    }
    if ((titles === null || titles === void 0 ? void 0 : titles.length) < 1) {
        consoleWarn(`Page should have a <h1> tag`);
        return false;
    }
    consoleInfo("Page has a good h1 tag!");
    return true;
};
const CheckPageTitle = () => {
    var _a;
    const pageTitle = (_a = window.document.querySelector("title")) === null || _a === void 0 ? void 0 : _a.innerText;
    if (!pageTitle) {
        consoleWarn("Page should have a <title> tag. Use title value in DefaultHelmet");
        return false;
    }
    if (pageTitle.length <= 7 || pageTitle.length >= 70) {
        consoleWarn(`You have a title tag of optimal length (between 10 and 70 characters). Current description length: ${pageTitle.length}`);
        return false;
    }
    consoleInfo("Page has a good title! Fantastic!");
    return true;
};
const CheckDescription = () => {
    const description = window.document.querySelector('meta[name="description"]');
    if (!description) {
        consoleWarn("Page should have a <meta> tag with description. Use description value in DefaultHelmet");
        return false;
    }
    const newLocal = "content";
    const descriptionText = description.attributes[newLocal].nodeValue;
    if (!descriptionText) {
        consoleWarn(`Description text is null`);
        return false;
    }
    if (descriptionText.length < 71 || descriptionText.length > 320) {
        consoleWarn(`Your page has a meta description of optimal length (between 70 and 320 characters). Current description length: ${descriptionText.length}`);
        return false;
    }
    consoleInfo("Page has a good description! Good job mate!");
    return true;
};
const CheckKeywords = () => {
    const keywords = window.document.querySelector('meta[name="keywords"]');
    if (!keywords) {
        consoleWarn("Page should have a <meta> tag with keywords. Use keywords value in DefaultHelmet");
        return false;
    }
    const newLocal = "content";
    const keywordsText = keywords.attributes[newLocal].nodeValue;
    if (!keywordsText) {
        consoleWarn(`Keywords is null`);
        return false;
    }
    const keywordsArray = keywordsText.split(",");
    if (keywordsArray.length < 10) {
        consoleWarn("You should have at least 10 keywords on your page");
        return false;
    }
    consoleInfo("Page has a good amount of keywords!");
    return true;
};
const CheckImages = () => {
    const images = window.document.querySelectorAll('img');
    let imagesWithNoAlt = [];
    images.forEach(img => {
        const newLocal = "alt";
        const alt = img.attributes[newLocal];
        if (!alt)
            imagesWithNoAlt.push(img);
    });
    if (imagesWithNoAlt.length > 0) {
        console.log(imagesWithNoAlt);
        consoleWarn("You have images with no alt attribute. Images listed in console log above.");
        return false;
    }
    consoleInfo("All images has alt attribute.");
    return true;
};
const CheckForNoIndexTag = () => {
    const noIndexTag = window.document.querySelector('meta[content="noindex"]');
    if (noIndexTag) {
        consoleWarn('Page has a meta tag with content "noindex". Remove this');
        return false;
    }
    consoleInfo('The page has no "noindex" tag.');
    return true;
};
export const CheckSeo = () => {
    let Works = [];
    if (CheckTitles())
        Works.push("H1 tag");
    if (CheckPageTitle())
        Works.push("Titles");
    if (CheckDescription())
        Works.push("Description");
    if (CheckKeywords())
        Works.push("Keywords");
    if (CheckImages())
        Works.push("Images");
    if (CheckForNoIndexTag())
        Works.push("NoIndexTag");
    let leng = parseInt(((Works.length - 1) / 2).toFixed());
    if (Works.length !== 6 && leng === 2)
        leng--;
    const word = words[leng];
    consoleInfo(`Report finished. ${word && word[Math.floor(Math.random() * word.length)]}`);
};
