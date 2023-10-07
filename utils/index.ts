import { CarDetailsTypes, SearchParamsTypes } from "@/types";

export const fetchCars = async (searchParams: SearchParamsTypes) => {

    const { manufacturer, limit, year } = searchParams;
    const url = new URL('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars');
    url.searchParams.set('make', manufacturer ? manufacturer : 'audi');

    limit
        ? url.searchParams.set('limit', `${limit}`)
        : url.searchParams.delete('limit');

    year
        ? url.searchParams.set('year', `${year}`)
        : url.searchParams.delete('year');


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71be79527cmshbec623c0143d9c2p1567fdjsnc0f4127450b2',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarDetailsTypes, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const getCarImageURL = (car: CarDetailsTypes) => {
    return [
        generateCarImageUrl(car, '0'),
        generateCarImageUrl(car, '29'),
        generateCarImageUrl(car, '21'),
        generateCarImageUrl(car, '13'),
    ]
}

export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
}