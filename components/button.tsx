import { ButtonPropsTypes } from "@/types"
import React from 'react'

const Button = ({ title, handleClick }: ButtonPropsTypes) => {
    return (
        <button className="font-bold px-6 py-2 bg-blue-600 text-white rounded-full"
            onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button