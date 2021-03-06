import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export interface BetterHelmetProps {
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

const getTitle = (props: BetterHelmetProps) => `${props.title ?? ""} ${props.titleDivider ?? ""} ${props.subTitle ?? ""}`;

export const BetterHelmet: React.FC<BetterHelmetProps> = (props: BetterHelmetProps) => (
    <HelmetProvider>
        {props.title && (
            <Helmet>
                <title>
                    {getTitle(props)}
                </title>
                <meta name="title" content={getTitle(props)} />
                <meta property="og:title" content={getTitle(props)} />
                <meta property="twitter:title" content={getTitle(props)} />
            </Helmet>
        )}
        {props.description &&
            <Helmet>
                <meta name="description" content={props.description} />
                <meta property="og:description" content={props.description} />
                <meta property="twitter:description" content={props.description} />
            </Helmet>
        }
        <Helmet>
            {props.keywords && <meta name="keywords" content={props.keywords} />}
            {props.subject && <meta name="subject" content={props.subject} />}
            {props.copyright && <meta name="copyright" content={props.copyright} />}
            {props.language && <meta name="language" content={props.language} />}
            {props.robots && <meta name="robots" content={props.robots} />}
            {props.revised && <meta name="revised" content={props.revised} />}
            {props.topic && <meta name="topic" content={props.topic} />}
            {props.summary && <meta name="summary" content={props.summary} />}
            {props.Classification && <meta name="Classification" content={props.Classification} />}
            {props.author && <meta name="author" content={props.author} />}
            {props.replyTo && <meta name="replyTo" content={props.replyTo} />}
            {props.owner && <meta name="owner" content={props.owner} />}
            {props.identifierURL && <meta name="identifierURL" content={props.identifierURL} />}
            {props.favIcon && <link rel="icon" type="image/x-icon" href={props.favIcon} />}
            <meta property="og:type" content={props.ogType ?? "website"} />
            <meta property="twitter:card" content={props.twitterCard ?? "summary_large_image"} />
            {props.children}
        </Helmet>
        {props.themeColor && <Helmet>
            <meta name="theme-color" content={props.themeColor} />
        </Helmet>}
        {props.url ?
            <Helmet>
                <meta name="url" content={props.url} />
                <meta property="og:url" content={props.url} />
                <meta property="twitter:url" content={props.url} />
            </Helmet>
            :
            <Helmet>
                <meta name="url" content={window.location.origin + window.location.pathname} />
                <meta property="og:url" content={window.location.origin + window.location.pathname} />
                <meta property="twitter:url" content={window.location.origin + window.location.pathname} />
            </Helmet>
        }
        {props.image &&
            <Helmet>
                <meta property="og:image" content={props.image} />
                <meta property="twitter:image" content={props.image} />
            </Helmet>
        }
    </HelmetProvider>
);