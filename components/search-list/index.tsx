import { yearsOfProduction } from "@/constants"
import { SearchListPropTypes } from "@/types"
import { Listbox, Transition } from "@headlessui/react"
import Image from "next/image"
import React, { Fragment } from 'react'

const SearchList = ({ year, setYear }: SearchListPropTypes) => {
    return (
        <div className="search-field">
            <Listbox value={year} onChange={setYear}>
                <Listbox.Button className="search-field__button w-40 h-6">
                    <Image src="/car-logo.svg"
                        alt="Car Icon"
                        width="20"
                        height="20"
                        className="mr-3" />
                    {year || "Year"}
                </Listbox.Button>
                <Listbox.Options className="search-field__options">
                    {yearsOfProduction.map(({ title, value }) => (
                        <Listbox.Option key={title} value={value} className="search-field__option">
                            {title}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}

export default SearchList