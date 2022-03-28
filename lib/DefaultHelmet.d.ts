import React from "react";
interface DefaultHelmetProps {
    title?: string;
    subTitle?: string;
    titleDivider?: string;
    keywords?: string;
    description?: string;
    subject?: string;
    copyright?: string;
    language?: string;
    robots?: string;
    revised?: string;
    topic?: string;
    summary?: string;
    Classification?: string;
    author?: string;
    replyTo?: string;
    owner?: string;
    url?: string;
    identifierURL?: string;
    image?: string;
    favIcon?: string;
    children?: React.ReactNode;
    ogType?: string;
    twitterCard?: string;
    themeColor?: string;
}
export declare const DefaultHelmet: (props: DefaultHelmetProps) => JSX.Element;
export {};
