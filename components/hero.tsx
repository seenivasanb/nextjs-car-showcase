import React from 'react'
import { Button } from "."
import Image from "next/image"

const Hero = () => {
    return (
        <section className="hero flex flex-col xl:flex-row mb-16">
            <div className="hero__left-block xl:w-2/3 mb-16">
                <h2 className="text-4xl xl:text-7xl font-bold tracking-wider leading-snug mb-6">
                    Find, book, rent a car - quick and super easily!
                </h2>
                <p className="text-lg xl:text-2xl text-slate-600 font-extralight mb-6">
                    Streamline your car rental experience with our effortless booking process
                </p>
                <Button title="Explore Cars" />
            </div>
            <div className="hero__right-block w-full relative h-[200px] xl:h-[600px] xl:-top-[50px] flex justify-end items-end">
                <div className="absolute bg-[url('/hero-bg.png')] w-full h-[250px] xl:h-[700px] bg-repeat-round
                -top-4 xl:-top-24 -right-24 xl:-right-64" />
                <Image src="/hero.png" fill className="object-contain" priority alt="Hero Car" />
            </div>
        </section>
    )
}

export default Hero