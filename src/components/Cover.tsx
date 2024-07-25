import Image from "next/image"
import React from "react"

interface CoverPrpos {
    url?:string
}

const Cover:React.FC<CoverPrpos> = ({url}) => {
  return (
    <div className="relative w-full h-[35vh] bg-neutral-300">
        {url && (
            <Image
            src={url}
            alt="Cover Image"
            fill
            className="object-cover"
            sizes="100vw"
            />
        )}
    </div>
  )
}

export default Cover