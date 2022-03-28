import { CheckDescription, CheckForNoIndexTag, CheckImages, CheckKeywords, CheckPageTitle, CheckTitles } from "./seoScripts";

export interface IResult {
    message: string;
    checked: boolean;
}

interface ResultProps {
    title: IResult;
    header: IResult;
    description: IResult;
    keywords: IResult;
    images: IResult;
    noIndexTag: IResult;
}


const useSeo = () => {

    const result = () => {
        var res: ResultProps = {
            title: CheckTitles(),
            header: CheckPageTitle(),
            description: CheckDescription(),
            images: CheckImages(),
            keywords: CheckKeywords(),
            noIndexTag: CheckForNoIndexTag()
        }
        return res;
    }

    return {
        result
    }
}

export default useSeo;