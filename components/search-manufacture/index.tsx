'use client'

import { SearchManufacturePropsTypes } from "@/types"
import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"
import React, { Fragment, useState } from 'react'
import { manufacturers } from "../../constants";
import "./search-manufacture.css";

const SearchManufacture = ({ manufacturer, setManufacturer }: SearchManufacturePropsTypes) => {

    const [query, setQuery] = useState("");

    const filterdManufacturer = query === ""
        ? manufacturers
        : manufacturers.filter((item) => {
            return item.toLowerCase().includes(query.toLocaleLowerCase());
        });

    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="search-field">
                    <Combobox.Button className="search-field__button">
                        <Image src="/car-logo.svg"
                            alt="Car Icon"
                            width="20"
                            height="20"
                            className="mr-3" />

                        <Combobox.Input
                            className="search-field__input"
                            placeholder="BMW"
                            displayValue={(manufacturer: string) => manufacturer}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </Combobox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        enter="transition ease-in duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options
                            className="search-field__options">
                            {filterdManufacturer.map(item => (
                                <Combobox.Option
                                    value={item}
                                    key={item}
                                    className={({ active, selected }) => `search-field__option
                                        ${selected ? 'bg-blue-700 text-white' :
                                            active ? 'bg-blue-400 text-white' : ''
                                        }`}
                                >
                                    {item}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture