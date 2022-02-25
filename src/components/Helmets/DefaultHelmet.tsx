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
}

export const DefaultHelmet = (props : DefaultHelmetProps) => {

    const _defaultSettings = defaultSettings;

    if(props) {
        const keys = Object.keys(props);
        for(var i = 0; i < keys.length; i++) {
            if(props[keys[i]] === "title" || props[keys[i]] === "subTitle" || props[keys[i]] === "titleDivider")
                defaultSettings[keys[i]] = props[keys[i]]
        }
    }

    const getTitle = () => {
        let text = "";

        if(props.title) {
            text = text + props.title;
        }else {
            if(_defaultSettings.title) {
                text = text + _defaultSettings.title;
            }
        }

        
        if(props.subTitle || _defaultSettings.subTitle) {
            let subTtl = props.subTitle ?? _defaultSettings.subTitle;

            if(props.titleDivider || _defaultSettings.titleDivider) {
                text = text + ` ${props.titleDivider ?? _defaultSettings.titleDivider} ` + subTtl
            }else {
                text = text + " | " + subTtl
            }
        }

        return text
    }

    return (
        <React.Fragment>
            {(props.title || _defaultSettings.title) &&
                <Helmet>
                    <title>
                        {getTitle()}
                    </title>
                    <meta name="og:title" content={getTitle()} />
                </Helmet>
            }
            {props.description &&
                <Helmet>
                    <meta name="description" content={props.description}/>
                    <meta name="og:description" content={props.description} />
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
                {props.url ? <meta name="url" content={props.url} /> : <meta name="url" content={window.location.origin + window.location.pathname} />}
                {props.identifierURL && <meta name="identifierURL" content={props.identifierURL} />}
                {props.image && <meta property="og:image" content={props.image} />}
                {props.favIcon && <link rel="icon" type="image/x-icon" href={props.favIcon} />}
                {props.children}
            </Helmet>
        </React.Fragment>
    )
}