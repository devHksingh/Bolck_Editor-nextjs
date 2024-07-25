'use client'

import Image from "next/image";
import TextareaAutosize  from "react-textarea-autosize";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Cover from "@/components/Cover";

export default function Home() {

  const Editor = useMemo(
    ()=>dynamic(()=> import('@/components/Editor'),{ssr:false}),
    []
  )
  return (
    <main className="min-h-screen">
      <Cover url="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className="flex flex-col px-24 py-10 w-full ">
        <TextareaAutosize placeholder="Untitled" className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"/>
      </div>
      <Editor onChange={()=>{}}/>
    </main>
  );
}
