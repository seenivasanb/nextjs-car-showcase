import { CarCardListPropsTypes } from "@/types"
import React from 'react'
import { CarCard } from ".."
import "./car-card-list.css"

const CarCardList = ({ cars }: CarCardListPropsTypes) => {
    return (
        <div className="car-card-list">
            {cars.length > 0 && cars?.map((car: any, index) => (
                <CarCard car={car} key={index} />
            ))}
        </div>
    )
}

export default CarCardList