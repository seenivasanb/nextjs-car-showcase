'use client'

import { CarDetailsPropsTypes } from "@/types"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import React, { Fragment } from 'react';
import "./car-details.css"
import { getCarImageURL } from "@/utils";

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsPropsTypes) => {
    const carImages = getCarImageURL(car);
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className="car-details">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-out duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel>
                                    <div className="dialog-panel">
                                        <button type="button"
                                            onClick={closeModal}
                                            className="dialog-panel__close-btn">
                                            <Image src="/close.svg" alt="Close Icon"
                                                width={20} height={20}
                                            />
                                        </button>
                                        <div className="image-container">
                                            <Image src={carImages[0]} alt="Car" width={200} height={200} />
                                        </div>

                                        <div className="image-thumbs">
                                            <div className="image-thumbs__item">
                                                <Image src={carImages[1]} alt="Car Model" fill priority className="object-contain" />
                                            </div>
                                            <div className="image-thumbs__item">
                                                <Image src={carImages[2]} alt="Car Model" fill priority className="object-contain" />
                                            </div>
                                            <div className="image-thumbs__item">
                                                <Image src={carImages[3]} alt="Car Model" fill priority className="object-contain" />
                                            </div>
                                        </div>

                                        <div className="car-details__info">
                                            <h4 className="car-details__info__title">
                                                {car.make} {car.model}
                                            </h4>
                                            {Object.entries(car).map(([key, value]) => (
                                                <div className="car-details__info__row" key={key}>
                                                    <div className="text-slate-500">{key.split('_').join(' ')}</div>
                                                    <div>{value}</div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails