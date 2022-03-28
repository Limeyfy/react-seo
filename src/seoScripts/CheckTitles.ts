const CheckTitles = () => {
    const titles = window.document.getElementsByTagName("h1");
    if (!titles) {
        return {
            message: "Cant find a h1 tag on the page",
            checked: false
        };
    }
    if (titles?.length > 1) {
        return {
            message: `Too many <h1> tags, you have ${titles.length}. It should be 1`,
            checked: false
        };
    }

    if (titles?.length < 1) {
        return {
            message: `Page should have a <h1> tag`,
            checked: false
        };
    }
    return {
        message: `Page has a good h1 tag!`,
        checked: true
    };
};

export default CheckTitles;