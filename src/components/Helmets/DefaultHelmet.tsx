import React from "react";
import { Helmet } from "react-helmet";

var defaultSettings : any = {}

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
}

export const DefaultHelmet = (props : DefaultHelmetProps) => {

    const _defaultSettings = defaultSettings;

    const keys = Object.keys(props);
    for(var i = 0; i < keys.length; i++) {
        if(keys[i] === "title") _defaultSettings.title = props[keys[i]];
        if(keys[i] === "subTitle") _defaultSettings.subTitle = props[keys[i]];
        if(keys[i] === "titleDivider") _defaultSettings.titleDivider = props[keys[i]];
    }

    const getTitle = () => {
        const title = props.title ?? _defaultSettings.title;
        let text = "";

        text = text + title;
        if(props.subTitle || _defaultSettings.subTitle) {
            if(props.titleDivider || _defaultSettings.titleDivider) {
                text = text + ` ${props.titleDivider ?? _defaultSettings.titleDivider} `
            }else {
                text = text + ` | `
            }
            text = text + props.subTitle ?? _defaultSettings.subTitle;
        }

        return text;
    }

    return (
        <React.Fragment>
            {(
                (props.title || _defaultSettings.title) ||
                (props.subTitle)
            )&&
                <Helmet>
                    <title>
                        {getTitle()}
                    </title>
                    <meta name="title" content={getTitle()} />
                    <meta property="og:title" content={getTitle()} />
                    <meta property="twitter:title" content={getTitle()} />
                </Helmet>
            }
            {props.description &&
                <Helmet>
                    <meta name="description" content={props.description}/>
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
                {props.url ? 
                    <React.Fragment>
                        <meta name="url" content={props.url} />
                        <meta property="og:url" content={props.url} />
                        <meta property="twitter:url" content={props.url} />
                    </React.Fragment> 
                : 
                    <React.Fragment>
                        <meta name="url" content={window.location.origin + window.location.pathname} />
                        <meta property="og:url" content={window.location.origin + window.location.pathname} />
                        <meta property="twitter:url" content={window.location.origin + window.location.pathname} />
                    </React.Fragment>
                }
                {props.identifierURL && <meta name="identifierURL" content={props.identifierURL} />}
                {props.image && 
                    <React.Fragment>
                        <meta property="og:image" content={props.image} />
                        <meta property="twitter:image" content={props.image} />
                    </React.Fragment>
                }
                {props.favIcon && <link rel="icon" type="image/x-icon" href={props.favIcon} />}
                <meta property="og:type" content={props.ogType ?? "website"} />
                <meta property="twitter:card" content={props.twitterCard ?? "summary_large_image"} />
                {props.children}
            </Helmet>
        </React.Fragment>
    )
}