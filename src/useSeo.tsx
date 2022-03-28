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
    percentage: number;
    checked: number
}

interface SimpleResult {
    title: IResult;
    header: IResult;
    description: IResult;
    keywords: IResult;
    images: IResult;
    noIndexTag: IResult;
}

const calculatePercentage = (num1: number, num2: number) => (100 * num2) / num1;

const useSeo = () => {
    const getResultPercentage = (props: SimpleResult) => {
        let total = Object.keys(props).length;
        let checked = 0;
        Object.keys(props).map(prop => {
            if (props[prop].checked) checked++;
            return;
        })
        return {
            percentage: calculatePercentage(total, checked),
            checked
        }
    }

    const result = () => {
        var simpleRes: SimpleResult = {
            title: CheckTitles(),
            header: CheckPageTitle(),
            description: CheckDescription(),
            images: CheckImages(),
            keywords: CheckKeywords(),
            noIndexTag: CheckForNoIndexTag()
        }
        var resPercentage = getResultPercentage(simpleRes);
        var res: ResultProps = {
            ...simpleRes,
            checked: resPercentage.checked,
            percentage: resPercentage.percentage
        }
        return res;
    }

    return {
        result
    }
}

export default useSeo;