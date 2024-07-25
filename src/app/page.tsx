'use client'

import Image from "next/image";
import TextareaAutosize  from "react-textarea-autosize";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Cover from "@/components/Cover";

export default function Home() {

  const [coverUrl,setCoverUrl] = useState("")

  const Editor = useMemo(
    ()=>dynamic(()=> import('@/components/Editor'),{ssr:false}),
    []
  )

  const enableCover = ()=>{
    setCoverUrl("https://images.unsplash.com/photo-1624777771435-913a1b979be2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
  }
  return (
    <main className="min-h-screen">
      <Cover url={coverUrl} setUrl={setCoverUrl}/>
      <div className="flex flex-col px-24 py-10 w-full ">
        <div className="group flex flex-col gap-2">
          {
            !coverUrl && (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="hover:bg-neutral-100 text-neutral-400 rounded-md px-3 py-1 transition-colors"
                  onClick={enableCover}
                >📷 Add cover</button>
              </div>
            )
          }
          <TextareaAutosize placeholder="Untitled" className="w-auto resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"/>
        </div>
      </div>
      <Editor onChange={()=>{}}/>
    </main>
  );
}
