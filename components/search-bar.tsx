'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter } from "next/navigation"
import { Button, SearchManufacture } from "."
import SearchList from "./search-list"

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('');
    const [year, setYear] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault()
        const searchParams = new URLSearchParams(window.location.search);

        manufacturer
            ? searchParams.set('manufacturer', manufacturer.toLowerCase())
            : searchParams.delete('manufacturer');

        year
            ? searchParams.set('year', year.toLowerCase())
            : searchParams.delete('year');


        const newPathName = window.location.pathname + '?' + searchParams.toString();
        router.push(newPathName, { scroll: false });
    }

    return (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            <div className="search__item">
                <SearchManufacture
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
            </div>
            <div className="search__item">
                <SearchList year={year} setYear={setYear} />
            </div>

            <Button title="Search" />

        </form>
    )
}

export default SearchBar