export interface ButtonPropsTypes {
    title: string;
    handleClick?: () => void
}

export interface SearchManufacturePropsTypes {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void
}

export interface CarDetailsTypes {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface CarCardPropsTypes {
    car: CarDetailsTypes
}

export interface CarCardListPropsTypes {
    cars: CarCardListPropsTypes[]
}

export interface CarDetailsPropsTypes {
    isOpen: boolean,
    closeModal: () => void,
    car: CarDetailsTypes
}

export interface SearchParamsTypes {
    manufacturer: string,
    year: string,
    limit: number
}

export interface SearchListPropTypes {
    year: string;
    setYear: (year: string) => void
}
export interface ShowMorePropTypes {
    pageNumber: number;
    isNext: boolean
}