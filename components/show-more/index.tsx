'use client';

import React from 'react'
import { Button } from ".."
import { useRouter } from "next/navigation"
import { updateSearchParams } from "@/utils";
import { ShowMorePropTypes } from "@/types";

const ShowMore = ({ pageNumber, isNext }: ShowMorePropTypes) => {
    const router = useRouter();

    const handleClick = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPath = updateSearchParams('limit', `${newLimit}`);
        router.push(newPath, { scroll: false });
    }

    return (
        <>
            {isNext && <Button title="Show More" handleClick={handleClick} />}
        </>
    )
}

export default ShowMore