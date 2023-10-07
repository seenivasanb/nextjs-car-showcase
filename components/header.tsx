import Image from "next/image"
import React from "react"

const Header = () => {
    return (
        <nav>
            <div className="mb-16 xl:mb-24">
                <Image
                    src="/logo.svg"
                    width={100}
                    height={15}
                    alt="Car Hub Logo"></Image>
            </div>
        </nav>
    )
}

export default Header