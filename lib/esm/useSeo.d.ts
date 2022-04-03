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
    checked: number;
}
declare const useSeo: () => {
    result: () => ResultProps;
};
export default useSeo;
