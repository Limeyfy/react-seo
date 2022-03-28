import React, { useState } from "react";

interface IResult {
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

    }

    return {
        result
    }
}

export default useSeo;