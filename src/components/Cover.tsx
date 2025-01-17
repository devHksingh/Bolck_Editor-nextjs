import { UploadButton } from "@/utils/uploadthing"
import Image from "next/image"
import React from "react"

interface CoverPrpos {
    url?:string;
    setUrl: (_: string) => void
}

const Cover:React.FC<CoverPrpos> = ({url , setUrl}) => {
  return (
    <div className={`relative w-auto h-[35vh] bg-neutral-400 ${
    !url ?'hidden':''}`}>
        {url && (
            <>
                <Image
                src={url}
                alt="Cover Image"
                fill
                className="object-cover"
                sizes="100vw"
                />
                <div className="absolute w-[20%] h-[20%] right-0 bottom-0 group flex justify-center items-center bg-transparent">
                    <UploadButton
                    className="w-fit opacity-0 group-hover:opacity-100 transition-opacity ut-allowed-content:hidden ut-button:bg-neutral-200 ut-button:hover:bg-neutral-300 ut-button:text-neutral-800 ut-button:transition-colors"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        console.log("Upload completed. Files: ", res);
                        setUrl(res[0].url);
                    }}
                    onUploadError={(error: Error) => {
                        console.log("Upload ERROR. Details: ", error.message);
                    }}
                    />
                </div>
            </>
        )}
    </div>
  )
}

export default Cover