'use client'

import { CarCardPropsTypes } from "@/types"
import React, { useState } from 'react'
import "./car-card.css"
import { calculateCarRent, getCarImageURL } from "@/utils";
import Image from "next/image";
import { Button } from "..";
import CarDetails from "../car-details";

const CarCard = ({ car }: CarCardPropsTypes) => {

    const carImageURL = getCarImageURL(car);

    const { city_mpg, drive, make, model, transmission, year } = car;
    const rent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="car-card group">
            <div className="car-card__header">
                <h2 className="car-card__header-title">
                    {make} {model}
                </h2>
            </div>

            <div className="car-card__content">
                <div className="car-card__content__rent">
                    <span className="symbol">$</span>
                    <span className="price">{rent}</span>
                    <span className="per">/day</span>
                </div>

                <div className="car-card__content__image">
                    <Image src={carImageURL[0]}
                        alt="Car" fill priority
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="car-card__controls">
                <div className="flex w-full justify-between group-hover:hidden">
                    <div className="car-card__control">
                        <Image src="/steering-wheel.svg" alt="Gas Icon"
                            width={20}
                            height={20}
                        />
                        <p>{transmission === 'a' ? "Automatic" : "Manual"}</p>
                    </div>
                    <div className="car-card__control">
                        <Image src="/tire.svg" alt="Gas Icon"
                            width={20}
                            height={20}
                        />
                        <p>{drive.toLocaleUpperCase()}</p>
                    </div>
                    <div className="car-card__control">
                        <Image src="/gas.svg" alt="Gas Icon"
                            width={20}
                            height={20}
                        />
                        <p>{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="car-card__button hidden group-hover:flex">
                    <Button title="View More" handleClick={() => setIsOpen(true)} />
                </div>
            </div>

            <CarDetails isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                car={car} />
        </div>
    )
}

export default CarCard